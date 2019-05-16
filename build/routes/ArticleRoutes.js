"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _ArticleController = _interopRequireDefault(require("../controllers/ArticleController"));

var router = (0, _express.Router)();
router.get('/', _ArticleController["default"].getAllArticles);
router.post('/', _ArticleController["default"].addArticle);
router.get('/:id', _ArticleController["default"].getArticle);
router.put('/:id', _ArticleController["default"].updateArticle);
router["delete"]('/:id', _ArticleController["default"].deleteArticle);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=ArticleRoutes.js.map