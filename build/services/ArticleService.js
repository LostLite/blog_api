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

var _models = _interopRequireDefault(require("../models"));

var ArticleService =
/*#__PURE__*/
function () {
  function ArticleService() {
    (0, _classCallCheck2["default"])(this, ArticleService);
  }

  (0, _createClass2["default"])(ArticleService, null, [{
    key: "getAllArticles",
    value: function () {
      var _getAllArticles = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _models["default"].Article.findAll();

              case 3:
                return _context.abrupt("return", _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                throw _context.t0;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 6]]);
      }));

      function getAllArticles() {
        return _getAllArticles.apply(this, arguments);
      }

      return getAllArticles;
    }()
  }, {
    key: "addArticle",
    value: function () {
      var _addArticle = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(newArticle) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _models["default"].Article.create(newArticle);

              case 3:
                return _context2.abrupt("return", _context2.sent);

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);
                throw _context2.t0;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6]]);
      }));

      function addArticle(_x) {
        return _addArticle.apply(this, arguments);
      }

      return addArticle;
    }()
  }, {
    key: "updateArticle",
    value: function () {
      var _updateArticle2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(id, _updateArticle) {
        var articleToUpdate;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _models["default"].Article.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                articleToUpdate = _context3.sent;

                if (!articleToUpdate) {
                  _context3.next = 8;
                  break;
                }

                _context3.next = 7;
                return _models["default"].Article.update(_updateArticle, {
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                return _context3.abrupt("return", _updateArticle);

              case 8:
                return _context3.abrupt("return", null);

              case 11:
                _context3.prev = 11;
                _context3.t0 = _context3["catch"](0);
                throw _context3.t0;

              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 11]]);
      }));

      function updateArticle(_x2, _x3) {
        return _updateArticle2.apply(this, arguments);
      }

      return updateArticle;
    }()
  }, {
    key: "getArticle",
    value: function () {
      var _getArticle = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(id) {
        var theArticle;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _models["default"].Article.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                theArticle = _context4.sent;
                return _context4.abrupt("return", theArticle);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                throw _context4.t0;

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[0, 7]]);
      }));

      function getArticle(_x4) {
        return _getArticle.apply(this, arguments);
      }

      return getArticle;
    }()
  }, {
    key: "deleteArticle",
    value: function () {
      var _deleteArticle = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(id) {
        var articleToDelete;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _models["default"].Article.findOne({
                  where: {
                    id: Number(id)
                  }
                });

              case 3:
                articleToDelete = _context5.sent;

                if (!articleToDelete) {
                  _context5.next = 8;
                  break;
                }

                _context5.next = 7;
                return _models["default"].Article.destroy({
                  where: {
                    id: Number(id)
                  }
                });

              case 7:
                return _context5.abrupt("return", _context5.sent);

              case 8:
                return _context5.abrupt("return", null);

              case 11:
                _context5.prev = 11;
                _context5.t0 = _context5["catch"](0);
                throw _context5.t0;

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[0, 11]]);
      }));

      function deleteArticle(_x5) {
        return _deleteArticle.apply(this, arguments);
      }

      return deleteArticle;
    }()
  }]);
  return ArticleService;
}();

var _default = ArticleService;
exports["default"] = _default;
//# sourceMappingURL=ArticleService.js.map