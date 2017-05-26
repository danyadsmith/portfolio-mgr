/* globals describe it */
const app = require('../../server');
const chalk = require('chalk');
const config = require('../config/');
const helpers = require('./helpers');
const request = require('supertest');
const expect = require('chai').expect;

describe('[CREDENTIALS]   /api/credentials/', function () {

  describe('Creates a credential in the database', function () {
    it('should POST a new credential', function (done) {
      request(app)
        .post('/api/credentials')
        .set('Accept', 'application/json')
        .send(helpers.credentials[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var credential = resp.body;
          expect(credential).to.be.an('object');
          expect(credential.organization).to.eql('Oakland University');
          done();
        });
    });

    it('should POST a new credential', function (done) {
      request(app)
        .post('/api/credentials')
        .set('Accept', 'application/json')
        .send(helpers.credentials[1])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var credential = resp.body;
          expect(credential).to.be.an('object');
          expect(credential.organization).to.eql('Hack Reactor');
          done();
        });
    });

    it('should POST a new credential', function (done) {
      request(app)
        .post('/api/credentials')
        .set('Accept', 'application/json')
        .send(helpers.credentials[2])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var credential = resp.body;
          expect(credential).to.be.an('object');
          expect(credential.organization).to.eql('Bloc');
          done();
        });
    });
  });

  describe('Retrieves a credential from the database', function () {
    it('should GET a credential by ID', function (done) {
      request(app)
        .get('/api/credentials/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var credential = resp.body;
          expect(credential).to.be.an('object');
          expect(credential.credential).to.eql('Bachelor of Arts');
          done();
        });
    });
  });

  describe('Retrieves all credentials from the database', function () {
    it('should GET all credentials', function (done) {
      this.timeout(3500);
      request(app)
        .get('/api/credentials')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var credentials = resp.body;
          expect(credentials).to.be.an('array');
          expect(credentials.length).to.eql(3);
          done();
        });
    });
  });

  describe('Deletes a credential from the database', function () {
    it('should DELETE a credential', function (done) {
      this.timeout(3500);
      request(app)
        .delete('/api/credentials/3')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var credential = resp.body;
          expect(credential).to.be.an('object');
          expect(credential.id).to.eql(3);
          done();
        });
    });
  });

  describe('Retrieves all credentials from the database', function () {
    it('should GET all credentials', function (done) {
      request(app)
        .get('/api/credentials')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var credentials = resp.body;
          expect(credentials).to.be.an('array');
          expect(credentials.length).to.eql(2);
          done();
        });
    });
  });

  describe('Updates a credential in the database', function () {
    it('should PUT updates for a credential into the database', function (done) {
      request(app)
        .put('/api/credentials/1')
        .set('Accept', 'application/json')
        .send(helpers.credentialUpdates[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var credential = resp.body;
          expect(credential).to.be.an('object');
          expect(credential.credential).to.eql('Bachelor of Science');
          done();
        });
    });
  });
});
