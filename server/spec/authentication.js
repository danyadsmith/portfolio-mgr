/* globals describe it */
const app = require('../server');
//const chalk = require('chalk');
//const config = require('../config/');
const helpers = require('./helpers');
const request = require('supertest');
const expect = require('chai').expect;

describe('[SERVER AUTHENTICATION]   /signup', function () {
  describe('Creates a user account and authenticates the user when the username is unique', function (){
    it('returns a 201 status code and stores the user in the database', function (done) {
      this.timeout(1000);
      request(app)
        .post('/signup')
        .set('Accept', 'application/json')
        .send(helpers.users[0])
        .expect('Content-Type', /json/)
        .expect(201)
        .end(function(err, res) {
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('token');
          done();
        });
    });

  });

  describe('Does not create a user account when the username is already in use', function () {
    it('returns a 409 status code', function (done) {
      request(app)
        .post('/signup')
        .set('Accept', 'application/json')
        .send(helpers.users[0])
        .expect('Content-Type', /json/)
        .expect(409)
        .end(function(err, res) {
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });
});

describe('[SERVER AUTHENTICATION]   /signin', function () {
  describe('Authenticates the visitor when matching credentials are supplied', function () {
    it('receives a valid user token from the client', function (done) {
      request(app)
        .post('/signin')
        .set('Authorization', helpers.authorization)
        .set('Accept', 'application/json')
        .send(helpers.users[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          expect(res.body).to.be.an('object');
          done();
        });
    });

    it('returns a 200 status code', function (done) {
      request(app)
        .post('/signin')
        .set('Authorization', helpers.authorization)
        .set('Accept', 'application/json')
        .send(helpers.users[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });

  describe('Does not authenticate the visitor when invalid credentials are supplied', function () {
    it('returns a 401 status code when a visitor submits an incorrect username', function (done) {
      request(app)
        .post('/signin')
        .set('Accept', 'application/json')
        .send(helpers.badUsers[0])
        .expect('Content-Type', /json/)
        .expect(401)
        .end(function(err, res) {
          expect(res.body).to.be.an('object');
          done();
        });
    });

    it('returns a 401 status code when a visitor submits an incorrect password', function (done) {
      request(app)
        .post('/signin')
        .set('Accept', 'application/json')
        .send(helpers.badUsers[1])
        .expect('Content-Type', /json/)
        .expect(401)
        .end(function(err, res) {
          expect(res.body).to.be.an('object');
          done();
        });
    });

    it('returns a 400 status code and when a the visitor does not supply a username or password', function (done) {
      request(app)
        .post('/signin')
        .set('Accept', 'application/json')
        .send(helpers.badUsers[2])
        .expect('Content-Type', /json/)
        .expect(400)
        .end(function(err, res) {
          expect(res.body).to.be.an('object');
          done();
        });
    });
  });
});


