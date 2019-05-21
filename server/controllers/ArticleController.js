import ArticleService from '../services/ArticleService';
import Util from '../utils/Utils';

const util = new Util();

class ArticleController {
  static async getAllArticles(request, response) {
    try {
      const allArticles = await ArticleService.getAllArticles();
      if (allArticles.length > 0) {
        util.setSuccess(200, 'Articles Found', allArticles);
      } else {
        util.setSuccess(200, 'No articles found');
      }
      return util.send(response);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(response);
    }
  }

  static async addArticle(request, response) {
    const { title, description, body } = request.body;
    if (!title || !description || !body) {
      util.setError(400, 'Please provide all complete details');
      return util.send(response);
    }

    try {
      const createdArticle = await ArticleService.addArticle({ title, description, body });
      util.setSuccess(201, 'Article Added!', createdArticle);
      return util.send(response);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(response);
    }
  }

  static async updateArticle(request, response) {
    const alteredArticle = request.body;
    const { id } = request.params;
    if (!Number(id)) {
      util.setError(400, 'Provide a valid numeric value');
      return util.send(response);
    }
    try {
      const updatedArticle = await ArticleService.updateArticle(id, alteredArticle);
      if (!updatedArticle) {
        util.setError(404, `Cannot find article with the provided Id ${id}`);
      } else {
        util.setSuccess(200, 'Article updated', updatedArticle);
      }
      return util.send(response);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(response);
    }
  }

  static async getArticle(request, response) {
    const { id } = request.params;
    if (!Number(id)) {
      util.setError(400, 'Please provide a valid ID');
      return util.send(response);
    }

    try {
      const theArticle = await ArticleService.getArticle(id);

      if (!theArticle) {
        util.setError(400, `Could not find article with that Id: ${id}`);
      } else {
        util.setSuccess(200, 'Found Article', theArticle);
      }

      return util.send(response);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(response);
    }
  }

  static async deleteArticle(request, response) {
    const { id } = request.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(response);
    }

    try {
      const articleToDelete = await ArticleService.deleteArticle(id);

      if (articleToDelete) {
        util.setSuccess(200, 'Article deleted');
      } else {
        util.setError(404, `Article with the id ${id} cannot be found`);
      }
      return util.send(response);
    } catch (error) {
      util.setError(400, error);
      return util.send(response);
    }
  }
}

export default ArticleController;
