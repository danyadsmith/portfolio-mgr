/* globals describe it */
const app = require('../server');
const chalk = require('chalk');
const config = require('../config/');
const helpers = require('./helpers');
const request = require('supertest');
const expect = require('chai').expect;

describe('[BLOGS]   /api/blogs/', function () {

  describe('Creates a blog in the database', function () {
    it('should POST a new blog', function (done) {
      request(app)
        .post('/api/blogs')
        .set('Accept', 'application/json')
        .send(helpers.blogs[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var blog = resp.body;
          expect(blog).to.be.an('object');
          expect(blog.title).to.eql('From SQL to NoSQL: Getting Started with MongoDB');
          done();
        });
    });

    it('should POST a new blog', function (done) {
      request(app)
        .post('/api/blogs')
        .set('Accept', 'application/json')
        .send(helpers.blogs[1])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var blog = resp.body;
          expect(blog).to.be.an('object');
          expect(blog.title).to.eql('Implementing CRUD Operations with Sequelize');
          done();
        });
    });

    it('should POST a new blog', function (done) {
      request(app)
        .post('/api/blogs')
        .set('Accept', 'application/json')
        .send(helpers.blogs[2])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var blog = resp.body;
          expect(blog).to.be.an('object');
          expect(blog.title).to.eql('Grid-Based Web Design: A History');
          done();
        });
    });

    it('should POST a new blog', function (done) {
      request(app)
        .post('/api/blogs')
        .set('Accept', 'application/json')
        .send(helpers.blogs[3])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var blog = resp.body;
          expect(blog).to.be.an('object');
          expect(blog.title).to.eql('Color Management Strategies in Sass');
          done();
        });
    });

    it('should POST a new blog', function (done) {
      request(app)
        .post('/api/blogs')
        .set('Accept', 'application/json')
        .send(helpers.blogs[4])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var blog = resp.body;
          expect(blog).to.be.an('object');
          expect(blog.title).to.eql('Managing Environment Variables in Node.js');
          done();
        });
    });
  });

  describe('Retrieves a blog from the database', function () {
    it('should GET a blog by ID', function (done) {
      request(app)
        .get('/api/blogs/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var blog = resp.body;
          expect(blog).to.be.an('object');
          expect(blog.title).to.eql('From SQL to NoSQL: Getting Started with MongoDB');
          done();
        });
    });
  });

  describe('Retrieves all blogs from the database', function () {
    it('should GET all blogs', function (done) {
      this.timeout(3500);
      request(app)
        .get('/api/blogs')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var blogs = resp.body;
          expect(blogs).to.be.an('array');
          expect(blogs.length).to.eql(5);
          done();
        });
    });
  });

  describe('Deletes a blog from the database', function () {
    it('should DELETE a blog', function (done) {
      this.timeout(3500);
      request(app)
        .delete('/api/blogs/4')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var blog = resp.body;
          expect(blog).to.be.an('object');
          expect(blog.id).to.eql(4);
          done();
        });
    });
  });

  describe('Retrieves all blogs from the database', function () {
    it('should GET all blogs', function (done) {
      request(app)
        .get('/api/blogs')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var blogs = resp.body;
          expect(blogs).to.be.an('array');
          expect(blogs.length).to.eql(4);
          done();
        });
    });
  });

  describe('Updates a blog in the database', function () {
    it('should PUT updates for a blog into the database', function (done) {
      request(app)
        .put('/api/blogs/1')
        .set('Accept', 'application/json')
        .send(helpers.blogUpdates[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var blog = resp.body;
          expect(blog).to.be.an('object');
          expect(blog.title).to.eql('From SQL to NoSQL: Getting Started with MongoDB and Mongoose');
          done();
        });
    });
  });
});
