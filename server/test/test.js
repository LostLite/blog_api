import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../../app';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testing the articles endpoints:', () => {
  it('it should create an article', (done) => {
    const article = {
      title: 'First Article',
      description: 'Ddescription of article goes here',
      body: 'Article body goes here'
    };
    chai.request(app)
      .post('/api/v1/articles')
      .set('Accept', 'application/json')
      .send(article)
      .end((err, res) => {
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

  it('It should not create an article with incomplete details', (done) => {
    const article2 = {
      title: 'First Article',
      description: 'Ddescription of article goes here'
    };

    chai.request(app)
      .post('/api/v1/articles')
      .set('Accept', 'application/json')
      .send(article2)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });

  it('It should get all article', (done) => {
    chai.request(app)
      .get('/api/v1/articles')
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        res.body.data[0].should.have.property('id');
        res.body.data[0].should.have.property('title');
        res.body.data[0].should.have.property('description');
        res.body.data[0].should.have.property('body');
        done();
      });
  });

  it('It should get a particular article', (done) => {
    const articleId = 1;

    chai.request(app)
      .get(`/api/v1/articles/${articleId}`)
      .set('Accept', 'application/json')
      .end((error, res) => {
        expect(res.status).to.equal(200);
        res.body.data.should.have.property('id');
        res.body.data.should.have.property('title');
        res.body.data.should.have.property('description');
        res.body.data.should.have.property('body');
        done();
      });
  });

  it('It should not get an article with an invalid ID', (done) => {
    const invalidArticleId = 9999;

    chai.request(app)
      .get(`/api/v1/articles/${invalidArticleId}`)
      .set('Accept', 'application/json')
      .end((error, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
          .eql(`Could not find article with that Id: ${invalidArticleId}`);
        done();
      });
  });

  it('It should not get an article with a non-numeric ID', (done) => {
    const nonNumericId = 'Goats';
    chai.request(app)
      .get(`/api/v1/articles/${nonNumericId}`)
      .set('Accept', 'application/json')
      .end((error, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
          .eql('Please provide a valid ID');
        done();
      });
  });

  it('It should update an article', (done) => {
    const updateArticleId = 1;
    const updateArticle = {
      id: updateArticleId,
      title: 'Updated article',
      description: 'Updated description',
      body: 'Update body'
    };

    chai.request(app)
      .put(`/api/v1/articles/${updateArticleId}`)
      .set('Accept', 'application/json')
      .send(updateArticle)
      .end((error, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data.title).to.equal(updateArticle.title);
        expect(res.body.data.description).to.equal(updateArticle.description);
        expect(res.body.data.body).to.equal(updateArticle.body);
        done();
      });
  });

  it('It should not update an article with an invalid ID', (done) => {
    const invalidUpdateId = 99999;
    const updateArticle2 = {
      id: invalidUpdateId,
      title: 'Update Me',
      description: 'Update me too',
      body: 'Forget me not bruh'
    };

    chai.request(app)
      .put(`/api/v1/articles/${invalidUpdateId}`)
      .set('Accept', 'application/json')
      .send(updateArticle2)
      .end((error, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
          .eql(`Cannot find article with the provided Id ${invalidUpdateId}`);
        done();
      });
  });

  it('It should not update a article with non-numeric id value', (done) => {
    const articleId = 'ggg';
    const updatedArticle = {
      id: articleId,
      title: 'Updated Awesome article again',
      body: '$11.99',
      description: 'We have updated the body'
    };
    chai.request(app)
      .put(`/api/v1/articles/${articleId}`)
      .set('Accept', 'application/json')
      .send(updatedArticle)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message')
          .eql('Provide a valid numeric value');
        done();
      });
  });


  it('It should delete a article', (done) => {
    const articleId = 1;
    chai.request(app)
      .delete(`/api/v1/articles/${articleId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.include({});
        done();
      });
  });

  it('It should not delete a article with invalid id', (done) => {
    const articleId = 777;
    chai.request(app)
      .delete(`/api/v1/articles/${articleId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        res.body.should.have.property('message')
          .eql(`Article with the id ${articleId} cannot be found`);
        done();
      });
  });

  it('It should not delete a article with non-numeric id', (done) => {
    const articleId = 'bbb';
    chai.request(app)
      .delete(`/api/v1/articles/${articleId}`)
      .set('Accept', 'application/json')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        res.body.should.have.property('message').eql('Please provide a numeric value');
        done();
      });
  });
});
