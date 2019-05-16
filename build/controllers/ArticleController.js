"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _ArticleService = _interopRequireDefault(require("../services/ArticleService"));

var _Utils = _interopRequireDefault(require("../utils/Utils"));

var util = new _Utils["default"]();

var ArticleController =
/*#__PURE__*/
function () {
  function ArticleController() {
    (0, _classCallCheck2["default"])(this, ArticleController);
  }

  (0, _createClass2["default"])(ArticleController, null, [{
    key: "getAllArticles",
    value: function () {
      var _getAllArticles = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(req, res) {
        var allArticles;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _ArticleService["default"].getAllArticles();

              case 3:
                allArticles = _context.sent;

                if (allArticles.length > 0) {
                  util.setSuccess(200, 'Articles Found', allArticles);
                } else {
                  util.setSuccess(200, 'No articles found');
                }

                return _context.abrupt("return", util.send(res));

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                util.setError(400, _context.t0.message);
                return _context.abrupt("return", util.send(res));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 8]]);
      }));

      function getAllArticles(_x, _x2) {
        return _getAllArticles.apply(this, arguments);
      }

      return getAllArticles;
    }()
  }, {
    key: "addArticle",
    value: function () {
      var _addArticle = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(req, res) {
        var _req$body, title, description, body, createdArticle;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _req$body = req.body, title = _req$body.title, description = _req$body.description, body = _req$body.body;

                if (!(!title || !description || !body)) {
                  _context2.next = 4;
                  break;
                }

                util.setError(400, 'Please provide all complete details');
                return _context2.abrupt("return", util.send(res));

              case 4:
                _context2.prev = 4;
                _context2.next = 7;
                return _ArticleService["default"].addArticle({
                  title: title,
                  description: description,
                  body: body
                });

              case 7:
                createdArticle = _context2.sent;
                util.setSuccess(201, 'Article Added!', createdArticle);
                return _context2.abrupt("return", util.send(res));

              case 12:
                _context2.prev = 12;
                _context2.t0 = _context2["catch"](4);
                util.setError(400, _context2.t0.message);
                return _context2.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[4, 12]]);
      }));

      function addArticle(_x3, _x4) {
        return _addArticle.apply(this, arguments);
      }

      return addArticle;
    }()
  }, {
    key: "updateArticle",
    value: function () {
      var _updateArticle = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(req, res) {
        var alteredArticle, id, updatedArticle;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                alteredArticle = req.body;
                id = req.params.id;

                if (Number(id)) {
                  _context3.next = 5;
                  break;
                }

                util.setError(400, 'Provide a valid numeric value');
                return _context3.abrupt("return", util.send(res));

              case 5:
                _context3.prev = 5;
                _context3.next = 8;
                return _ArticleService["default"].updateArticle(id, alteredArticle);

              case 8:
                updatedArticle = _context3.sent;

                if (!updatedArticle) {
                  util.setError(404, "Cannot find article with the provided Id ".concat(id));
                } else {
                  util.setSuccess(200, 'Article updated', updatedArticle);
                }

                return _context3.abrupt("return", util.send(res));

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](5);
                util.setError(400, _context3.t0.message);
                return _context3.abrupt("return", util.send(res));

              case 17:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[5, 13]]);
      }));

      function updateArticle(_x5, _x6) {
        return _updateArticle.apply(this, arguments);
      }

      return updateArticle;
    }()
  }, {
    key: "getArticle",
    value: function () {
      var _getArticle = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(req, res) {
        var id, theArticle;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context4.next = 4;
                  break;
                }

                util.setError(400, 'Please provide a valid ID');
                return _context4.abrupt("return", util.send(res));

              case 4:
                _context4.prev = 4;
                _context4.next = 7;
                return _ArticleService["default"].getArticle(id);

              case 7:
                theArticle = _context4.sent;

                if (!theArticle) {
                  util.setError(400, "Could not find article with that Id: ".concat(id));
                } else {
                  util.setSuccess(200, 'Found Article', theArticle);
                }

                return _context4.abrupt("return", util.send(res));

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4["catch"](4);
                util.setError(400, _context4.t0.message);
                return _context4.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[4, 12]]);
      }));

      function getArticle(_x7, _x8) {
        return _getArticle.apply(this, arguments);
      }

      return getArticle;
    }()
  }, {
    key: "deleteArticle",
    value: function () {
      var _deleteArticle = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(req, res) {
        var id, articleToDelete;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                id = req.params.id;

                if (Number(id)) {
                  _context5.next = 4;
                  break;
                }

                util.setError(400, 'Please provide a numeric value');
                return _context5.abrupt("return", util.send(res));

              case 4:
                _context5.prev = 4;
                _context5.next = 7;
                return _ArticleService["default"].deleteArticle(id);

              case 7:
                articleToDelete = _context5.sent;

                if (articleToDelete) {
                  util.setSuccess(200, 'Article deleted');
                } else {
                  util.setError(404, "Article with the id ".concat(id, " cannot be found"));
                }

                return _context5.abrupt("return", util.send(res));

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](4);
                util.setError(400, _context5.t0);
                return _context5.abrupt("return", util.send(res));

              case 16:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[4, 12]]);
      }));

      function deleteArticle(_x9, _x10) {
        return _deleteArticle.apply(this, arguments);
      }

      return deleteArticle;
    }()
  }]);
  return ArticleController;
}();

var _default = ArticleController;
exports["default"] = _default;
//# sourceMappingURL=ArticleController.js.map