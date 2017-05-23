/* globals describe it */
const app = require('../server');
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
          expect(category).to.be.a('string');
          expect(category).to.eql('Programming Languages');
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
          expect(category).to.be.a('string');
          expect(category).to.eql('Web');
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
          expect(category).to.be.a('string');
          expect(category).to.eql('Front-end Frameworks');
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
          expect(category).to.be.a('string');
          expect(category).to.eql('Server-side Frameworks');
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
          expect(category).to.be.a('string');
          expect(category).to.eql('Databases and ORMs');
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
          expect(category).to.be.a('string');
          expect(category).to.eql('UX and Design');
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
          expect(category).to.be.a('string');
          expect(category).to.eql('Project Management');
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
          expect(category).to.be.a('string');
          expect(category).to.eql('Business Software');
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
          expect(category).to.be.a('string');
          expect(category).to.eql('Other');
          done();
        });
    });
  });

  describe('Retrieves a category from the database', function () {
    it('should get a category by ID via a GET request', function (done) {
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
    it('should get all categories via a GET request', function (done) {
      request(app)
        .get('/api/categories')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var categories = resp.body;
          expect(categories).to.be.an('array');
          expect(categories.length).to.eql(5);
          done();
        });
    });
  });

  describe('Deletes a category from the database', function () {
    it('should delete a category via a DELETE request', function (done) {
      request(app)
        .delete('/api/categories/5')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var category = resp.body;
          expect(category).to.be.an('object');
          expect(category).to.have.property('name');
          done();
        });
    });
  });

  describe('Retrieves all categories from the database', function () {
    it('should get all categories via a GET request', function (done) {
      request(app)
        .get('/api/categories')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var categories = resp.body;
          expect(categories).to.be.an('array');
          expect(categories.length).to.eql(4);
          done();
        });
    });
  });

  describe('Updates a category in the database', function () {
    it('should update a category via a PUT request', function (done) {
      request(app)
        .put('/api/categories/2')
        .set('Accept', 'application/json')
        .send(helpers.categoryUpdates[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var category = resp.body;
          expect(category).to.be.a('string');
          expect(category).to.eql('Web Standards');
          done();
        });
    });
  });
});
