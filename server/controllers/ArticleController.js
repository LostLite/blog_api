import ArticleService from '../services/ArticleService';
import Util from '../utils/Utils';

const util = new Util();

class ArticleController {
  static async getAllArticles(req, res) {
    try {
      const allArticles = await ArticleService.getAllArticles();
      if (allArticles.length > 0) {
        util.setSuccess(200, 'Articles Found', allArticles);
      } else {
        util.setSuccess(200, 'No articles found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async addArticle(req, res) {
    const { title, description, body } = req.body;
    if (!title || !description || !body) {
      util.setError(400, 'Please provide all complete details');
      return util.send(res);
    }

    try {
      const createdArticle = await ArticleService.addArticle({ title, description, body });
      util.setSuccess(201, 'Article Added!', createdArticle);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updateArticle(req, res) {
    const alteredArticle = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Provide a valid numeric value');
      return util.send(res);
    }
    try {
      const updatedArticle = await ArticleService.updateArticle(id, alteredArticle);
      if (!updatedArticle) {
        util.setError(404, `Cannot find article with the provided Id ${id}`);
      } else {
        util.setSuccess(200, 'Article updated', updatedArticle);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async getArticle(req, res) {
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please provide a valid ID');
      return util.send(res);
    }

    try {
      const theArticle = await ArticleService.getArticle(id);

      if (!theArticle) {
        util.setError(400, `Could not find article with that Id: ${id}`);
      } else {
        util.setSuccess(200, 'Found Article', theArticle);
      }

      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async deleteArticle(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value');
      return util.send(res);
    }

    try {
      const articleToDelete = await ArticleService.deleteArticle(id);

      if (articleToDelete) {
        util.setSuccess(200, 'Article deleted');
      } else {
        util.setError(404, `Article with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
}

export default ArticleController;
