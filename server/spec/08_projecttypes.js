/* globals describe it */
const app = require('../../server');
const chalk = require('chalk');
const config = require('../config/');
const helpers = require('./helpers');
const request = require('supertest');
const expect = require('chai').expect;

describe('[PROJECT TYPES]   /api/types', function () {

  describe('Creates a type in the database', function () {
    it('should POST a new type', function (done) {
      request(app)
        .post('/api/types')
        .set('Accept', 'application/json')
        .send(helpers.projectTypes[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var type = resp.body;
          expect(type).to.be.an('object');
          expect(type.name).to.eql('Work');
          done();
        });
    });

    it('should POST a new type', function (done) {
      request(app)
        .post('/api/types')
        .set('Accept', 'application/json')
        .send(helpers.projectTypes[1])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var type = resp.body;
          expect(type).to.be.an('object');
          expect(type.name).to.eql('Open Source');
          done();
        });
    });

    it('should POST a new type', function (done) {
      request(app)
        .post('/api/types')
        .set('Accept', 'application/json')
        .send(helpers.projectTypes[2])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var type = resp.body;
          expect(type).to.be.an('object');
          expect(type.name).to.eql('Community Service');
          done();
        });
    });
  });

  describe('Retrieves a type from the database', function () {
    it('should GET a type by ID', function (done) {
      request(app)
        .get('/api/types/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var type = resp.body;
          expect(type).to.be.an('object');
          expect(type.name).to.eql('Work');
          done();
        });
    });
  });

  describe('Retrieves all types from the database', function () {
    it('should GET all types', function (done) {
      this.timeout(3500);
      request(app)
        .get('/api/types')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var types = resp.body;
          expect(types).to.be.an('array');
          expect(types.length).to.eql(3);
          done();
        });
    });
  });

  describe('Deletes a type from the database', function () {
    it('should DELETE a type', function (done) {
      this.timeout(3500);
      request(app)
        .delete('/api/types/3')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var type = resp.body;
          expect(type).to.be.an('object');
          expect(type.id).to.eql(3);
          done();
        });
    });
  });

  describe('Retrieves all types from the database', function () {
    it('should GET all types', function (done) {
      request(app)
        .get('/api/types')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var types = resp.body;
          expect(types).to.be.an('array');
          expect(types.length).to.eql(2);
          done();
        });
    });
  });

  describe('Updates a type in the database', function () {
    it('should PUT updates for a type into the database', function (done) {
      request(app)
        .put('/api/types/1')
        .set('Accept', 'application/json')
        .send(helpers.typeUpdates[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var type = resp.body;
          expect(type).to.be.an('object');
          expect(type.name).to.eql('Work Project');
          done();
        });
    });
  });
});
