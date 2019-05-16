import database from '../models';

class ArticleService {
  static async getAllArticles() {
    try {
      return await database.Article.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addArticle(newArticle) {
    try {
      return await database.Article.create(newArticle);
    } catch (error) {
      throw error;
    }
  }

  static async updateArticle(id, updateArticle) {
    try {
      const articleToUpdate = await database.Article.findOne({
        where: { id: Number(id) }
      });

      if (articleToUpdate) {
        await database.Article.update(updateArticle, { where: { id: Number(id) } });

        return updateArticle;
      }

      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getArticle(id) {
    try {
      const theArticle = await database.Article.findOne({
        where: { id: Number(id) }
      });

      return theArticle;
    } catch (error) {
      throw error;
    }
  }

  static async deleteArticle(id) {
    try {
      const articleToDelete = await database.Article.findOne({
        where: { id: Number(id) }
      });

      if (articleToDelete) {
        return await database.Article.destroy({
          where: { id: Number(id) }
        });
      }

      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default ArticleService;
