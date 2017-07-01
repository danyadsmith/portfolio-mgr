/* globals describe it */
const app = require('../index');
const chalk = require('chalk');
const config = require('../config/');
const helpers = require('./helpers');
const request = require('supertest');
const expect = require('chai').expect;

describe('[BLOG CATEGORIES]   /api/users/:id/blogcategories/', function () {
  describe('Creates a blog category in the database', function () {
    it('should POST a new blog category', function (done) {
      this.timeout(5000);
      request(app)
        .post('api/users/1/blogcategories')
        .set('Accept', 'application/json')
        .send(helpers.blogCategories[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var blogCategory = resp.body;
          //console.log(chalk.yellow(JSON.stringify(blogCategory)));
          expect(blogCategory).to.be.an('object');
          expect(blogCategory.BlogId).to.eql(1);
          expect(blogCategory.CategoryId).to.eql(5);
          done();
        });
    });

    it('should POST a new blog category', function (done) {
      request(app)
        .post('/api/users/1/blogcategories')
        .set('Accept', 'application/json')
        .send(helpers.blogCategories[1])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var blogCategory = resp.body;
          expect(blogCategory).to.be.an('object');
          expect(blogCategory.BlogId).to.eql(2);
          expect(blogCategory.CategoryId).to.eql(5);
          done();
        });
    });

    it('should POST a new blog category', function (done) {
      request(app)
        .post('/api/users/1/blogcategories')
        .set('Accept', 'application/json')
        .send(helpers.blogCategories[2])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var blogCategory = resp.body;
          expect(blogCategory).to.be.an('object');
          expect(blogCategory.BlogId).to.eql(3);
          expect(blogCategory.CategoryId).to.eql(6);
          done();
        });
    });

    it('should POST a new blog category', function (done) {
      request(app)
        .post('/api/users/1/blogcategories')
        .set('Accept', 'application/json')
        .send(helpers.blogCategories[3])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var blogCategory = resp.body;
          expect(blogCategory).to.be.an('object');
          expect(blogCategory.BlogId).to.eql(5);
          expect(blogCategory.CategoryId).to.eql(13);
          done();
        });
    });
  });

  describe('Retrieves a blog category from the database', function () {
    it('should GET a blog category by ID', function (done) {
      request(app)
        .get('api/users/1/blogcategories/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var blogCategory = resp.body;
          expect(blogCategory).to.be.an('object');
          expect(blogCategory.name).to.eql('Programming Languages');
          done();
        });
    });
  });

  describe('Retrieves all blog categories for posts created by a specific user', function () {
    it('should GET all blog categories', function (done) {
      this.timeout(3500);
      request(app)
        .get('api/users/1/blogcategories')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var blogCategories = resp.body;
          expect(blogCategories).to.be.an('array');
          expect(blogCategories.length).to.eql(5);
          done();
        });
    });

    it('should sort all blog categories by name', function (done) {
      this.timeout(3500);
      request(app)
        .get('api/users/1/blogcategories')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var blogCategories = resp.body;
          expect(blogCategories).to.be.an('array');
          expect(blogCategories[0].name).to.be.below(blogCategories[1].name);
          done();
        });
    });
  });

  describe('Deletes a blog category from the database', function () {
    it('should DELETE a blog category', function (done) {
      this.timeout(3500);
      request(app)
        .delete('api/users/1/blogcategories/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var blogCategory = resp.body;
          expect(blogCategory).to.be.an('object');
          expect(blogCategory.id).to.eql(4);
          done();
        });
    });
  });

  describe('Retrieves all blog categories for posts created by a specific user', function () {
    it('should GET all blog categories', function (done) {
      request(app)
        .get('api/users/1/blogcategories')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var blogCategories = resp.body;
          expect(blogCategories).to.be.an('array');
          expect(blogCategories.length).to.eql(3);
          done();
        });
    });
  });

  describe('Updates a blog category in the database', function () {
    it('should PUT updates for a blog category into the database', function (done) {
      request(app)
        .put('api/users/1/blogcategories/1')
        .set('Accept', 'application/json')
        .send(helpers.blogCategoryUpdates[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var blogCategory = resp.body;
          expect(blogCategory).to.be.an('object');
          expect(blogCategory.title).to.eql('From SQL to NoSQL: Getting Started with MongoDB and Mongoose');
          done();
        });
    });
  });
});
