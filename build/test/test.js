"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

require("chai/register-should");

var _app = _interopRequireDefault(require("../../app"));

_chai["default"].use(_chaiHttp["default"]);

var expect = _chai["default"].expect;
describe('Testing the articles endpoints:', function () {
  it('it should create an article', function (done) {
    var article = {
      title: 'First Article',
      description: 'Ddescription of article goes here',
      body: 'Article body goes here'
    };

    _chai["default"].request(_app["default"]).post('/api/v1/articles').set('Accept', 'application/json').send(article).end(function (err, res) {
      expect(res.status).to.equal(201);
      expect(res.body.data).to.include({
        id: 1,
        title: article.title,
        description: article.description,
        body: article.body
      });
      done();
    });
  });
  it('It should not create an article with incomplete details', function (done) {
    var article2 = {
      title: 'First Article',
      description: 'Ddescription of article goes here'
    };

    _chai["default"].request(_app["default"]).post('/api/v1/articles').set('Accept', 'application/json').send(article2).end(function (err, res) {
      expect(res.status).to.equal(400);
      done();
    });
  });
  it('It should get all article', function (done) {
    _chai["default"].request(_app["default"]).get('/api/v1/articles').set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      res.body.data[0].should.have.property('id');
      res.body.data[0].should.have.property('title');
      res.body.data[0].should.have.property('description');
      res.body.data[0].should.have.property('body');
      done();
    });
  });
  it('It should get a particular article', function (done) {
    var articleId = 1;

    _chai["default"].request(_app["default"]).get("/api/v1/articles/".concat(articleId)).set('Accept', 'application/json').end(function (error, res) {
      expect(res.status).to.equal(200);
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('title');
      res.body.data.should.have.property('description');
      res.body.data.should.have.property('body');
      done();
    });
  });
  it('It should not get an article with an invalid ID', function (done) {
    var invalidArticleId = 9999;

    _chai["default"].request(_app["default"]).get("/api/v1/articles/".concat(invalidArticleId)).set('Accept', 'application/json').end(function (error, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql("Could not find article with that Id: ".concat(invalidArticleId));
      done();
    });
  });
  it('It should not get an article with a non-numeric ID', function (done) {
    var nonNumericId = 'Goats';

    _chai["default"].request(_app["default"]).get("/api/v1/articles/".concat(nonNumericId)).set('Accept', 'application/json').end(function (error, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please provide a valid ID');
      done();
    });
  });
  it('It should update an article', function (done) {
    var updateArticleId = 1;
    var updateArticle = {
      id: updateArticleId,
      title: 'Updated article',
      description: 'Updated description',
      body: 'Update body'
    };

    _chai["default"].request(_app["default"]).put("/api/v1/articles/".concat(updateArticleId)).set('Accept', 'application/json').send(updateArticle).end(function (error, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data.title).to.equal(updateArticle.title);
      expect(res.body.data.description).to.equal(updateArticle.description);
      expect(res.body.data.body).to.equal(updateArticle.body);
      done();
    });
  });
  it('It should not update an article with an invalid ID', function (done) {
    var invalidUpdateId = 99999;
    var updateArticle2 = {
      id: invalidUpdateId,
      title: 'Update Me',
      description: 'Update me too',
      body: 'Forget me not bruh'
    };

    _chai["default"].request(_app["default"]).put("/api/v1/articles/".concat(invalidUpdateId)).set('Accept', 'application/json').send(updateArticle2).end(function (error, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Cannot find article with the provided Id ".concat(invalidUpdateId));
      done();
    });
  });
  it('It should not update a article with non-numeric id value', function (done) {
    var articleId = 'ggg';
    var updatedArticle = {
      id: articleId,
      title: 'Updated Awesome article again',
      body: '$11.99',
      description: 'We have updated the body'
    };

    _chai["default"].request(_app["default"]).put("/api/v1/articles/".concat(articleId)).set('Accept', 'application/json').send(updatedArticle).end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Provide a valid numeric value');
      done();
    });
  });
  it('It should delete a article', function (done) {
    var articleId = 1;

    _chai["default"].request(_app["default"])["delete"]("/api/v1/articles/".concat(articleId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(200);
      expect(res.body.data).to.include({});
      done();
    });
  });
  it('It should not delete a article with invalid id', function (done) {
    var articleId = 777;

    _chai["default"].request(_app["default"])["delete"]("/api/v1/articles/".concat(articleId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(404);
      res.body.should.have.property('message').eql("Article with the id ".concat(articleId, " cannot be found"));
      done();
    });
  });
  it('It should not delete a article with non-numeric id', function (done) {
    var articleId = 'bbb';

    _chai["default"].request(_app["default"])["delete"]("/api/v1/articles/".concat(articleId)).set('Accept', 'application/json').end(function (err, res) {
      expect(res.status).to.equal(400);
      res.body.should.have.property('message').eql('Please provide a numeric value');
      done();
    });
  });
});
//# sourceMappingURL=test.js.map