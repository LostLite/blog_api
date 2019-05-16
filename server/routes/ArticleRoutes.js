import { Router } from 'express';
import ArticleController from '../controllers/ArticleController';

const router = Router();

router.get('/', ArticleController.getAllArticles);
router.post('/', ArticleController.addArticle);
router.get('/:id', ArticleController.getArticle);
router.put('/:id', ArticleController.updateArticle);
router.delete('/:id', ArticleController.deleteArticle);

export default router;
