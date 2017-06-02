/* globals describe it */
const app = require('../index');
const chalk = require('chalk');
const config = require('../config/');
const helpers = require('./helpers');
const request = require('supertest');
const expect = require('chai').expect;

describe('[USERS]   /api/users/', function () {

  describe('Creates a user in the database', function () {
    it('should POST a new user', function (done) {
      this.timeout(4500);
      request(app)
        .post('/api/users')
        .set('Accept', 'application/json')
        .send(helpers.users[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var user = resp.body;
          expect(user).to.be.an('object');
          expect(user.username).to.eql('danyadsmith');
          done();
        });
    });

    it('should POST a new user', function (done) {
      this.timeout(4500);
      request(app)
        .post('/api/users')
        .set('Accept', 'application/json')
        .send(helpers.users[1])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var user = resp.body;
          expect(user).to.be.an('object');
          expect(user.username).to.eql('administrator');
          done();
        });
    });

    it('should POST a new user', function (done) {
      this.timeout(4500);
      request(app)
        .post('/api/users')
        .set('Accept', 'application/json')
        .send(helpers.users[2])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var user = resp.body;
          expect(user).to.be.an('object');
          expect(user.username).to.eql('guest');
          done();
        });
    });
  });

  describe('Retrieves a user from the database', function () {
    it('should GET a user by ID', function (done) {
      this.timeout(4500);
      request(app)
        .get('/api/users/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var user = resp.body;
          expect(user).to.be.an('object');
          expect(user.username).to.eql('danyadsmith');
          done();
        });
    });
  });

  describe('Retrieves all users from the database', function () {
    it('should GET all users', function (done) {
      this.timeout(4500);
      request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var users = resp.body;
          expect(users).to.be.an('array');
          expect(users.length).to.eql(3);
          done();
        });
    });
  });

  describe('Deletes a user from the database', function () {
    it('should DELETE a user', function (done) {
      this.timeout(3500);
      request(app)
        .delete('/api/users/3')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var user = resp.body;
          expect(user).to.be.an('object');
          expect(user.username).to.eql('guest');
          done();
        });
    });
  });

  describe('Retrieves all users from the database', function () {
    it('should GET all users', function (done) {
      this.timeout(3500);
      request(app)
        .get('/api/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var users = resp.body;
          expect(users).to.be.an('array');
          expect(users.length).to.eql(2);
          done();
        });
    });
  });

  describe('Updates a user in the database', function () {
    it('should PUT updates for a user into the database', function (done) {
      this.timeout(3500);
      request(app)
        .put('/api/users/1')
        .set('Accept', 'application/json')
        .send(helpers.userUpdates[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var user = resp.body;
          expect(user).to.be.an('object');
          expect(user.middleName).to.be.null;
          done();
        });
    });
  });
});
