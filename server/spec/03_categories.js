/* globals describe it */
const app = require('../index');
const chalk = require('chalk');
const config = require('../config/');
const helpers = require('./helpers');
const request = require('supertest');
const expect = require('chai').expect;

describe('[CATEGORIES]   /api/categories/', function () {

  describe('Creates a category in the database', function () {
    it('should POST a new category', function (done) {
      request(app)
        .post('/api/categories')
        .set('Accept', 'application/json')
        .send(helpers.categories[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category.name).to.eql('Programming Languages');
          done();
        });
    });

    it('should POST a new categoy', function (done) {
      request(app)
        .post('/api/categories')
        .set('Accept', 'application/json')
        .send(helpers.categories[1])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category.name).to.eql('Web');
          done();
        });
    });

    it('should POST a new category', function (done) {
      request(app)
        .post('/api/categories')
        .set('Accept', 'application/json')
        .send(helpers.categories[2])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category.name).to.eql('Front-end Frameworks');
          done();
        });
    });

    it('should POST a new category', function (done) {
      request(app)
        .post('/api/categories')
        .set('Accept', 'application/json')
        .send(helpers.categories[3])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category.name).to.eql('Server-side Frameworks');
          done();
        });
    });

    it('should POST a new category', function (done) {
      request(app)
        .post('/api/categories')
        .set('Accept', 'application/json')
        .send(helpers.categories[4])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category.name).to.eql('Databases and ORMs');
          done();
        });
    });

    it('should POST a new category', function (done) {
      request(app)
        .post('/api/categories')
        .set('Accept', 'application/json')
        .send(helpers.categories[5])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category.name).to.eql('UX and Design');
          done();
        });
    });

    it('should POST a new category', function (done) {
      request(app)
        .post('/api/categories')
        .set('Accept', 'application/json')
        .send(helpers.categories[6])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category.name).to.eql('Project Management');
          done();
        });
    });

    it('should POST a new category', function (done) {
      request(app)
        .post('/api/categories')
        .set('Accept', 'application/json')
        .send(helpers.categories[7])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category.name).to.eql('Business Software');
          done();
        });
    });

    it('should POST a new category', function (done) {
      request(app)
        .post('/api/categories')
        .set('Accept', 'application/json')
        .send(helpers.categories[8])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category.name).to.eql('Other');
          done();
        });
    });

    it('should POST a new category', function (done) {
      request(app)
        .post('/api/categories')
        .set('Accept', 'application/json')
        .send(helpers.categories[9])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category.name).to.eql('Content Management Systems');
          done();
        });
    });

    it('should POST a new category', function (done) {
      request(app)
        .post('/api/categories')
        .set('Accept', 'application/json')
        .send(helpers.categories[10])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category.name).to.eql('Code');
          done();
        });
    });

    it('should POST a new category', function (done) {
      request(app)
        .post('/api/categories')
        .set('Accept', 'application/json')
        .send(helpers.categories[11])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category.name).to.eql('Content');
          done();
        });
    });

    it('should POST a new category', function (done) {
      request(app)
        .post('/api/categories')
        .set('Accept', 'application/json')
        .send(helpers.categories[12])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category.name).to.eql('Resources');
          done();
        });
    });
  });

  describe('Retrieves a category from the database', function () {
    it('should GET a category by ID', function (done) {
      request(app)
        .get('/api/categories/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category.name).to.eql('Programming Languages');
          done();
        });
    });
  });

  describe('Retrieves all categories from the database', function () {
    it('should GET all categories', function (done) {
      this.timeout(3500);
      request(app)
        .get('/api/categories')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var categories = resp.body;
          expect(categories).to.be.an('array');
          expect(categories.length).to.eql(13);
          done();
        });
    });2
  });

  describe('Deletes a category from the database', function () {
    it('should DELETE a category', function (done) {
      this.timeout(3500);
      request(app)
        .delete('/api/categories/10')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category.id).to.eql(10);
          done();
        });
    });
  });

  describe('Retrieves all categories from the database', function () {
    it('should GET all categories', function (done) {
      request(app)
        .get('/api/categories')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var categories = resp.body;
          expect(categories).to.be.an('array');
          expect(categories.length).to.eql(12);
          done();
        });
    });
  });

  describe('Updates a category in the database', function () {
    it('should PUT updates for a category into the database', function (done) {
      request(app)
        .put('/api/categories/2')
        .set('Accept', 'application/json')
        .send(helpers.categoryUpdates[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category.name).to.eql('Web Standards');
          done();
        });
    });
  });
});
