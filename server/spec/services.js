/* globals describe it */
const app = require('../../server');
const chalk = require('chalk');
const config = require('../config/');
const helpers = require('./helpers');
const request = require('supertest');
const expect = require('chai').expect;

describe('[SERVICE]   /api/services/', function () {

  describe('Creates a service in the database', function () {
    it('should POST a new service', function (done) {
      request(app)
        .post('/api/services')
        .set('Accept', 'application/json')
        .send(helpers.services[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var service = resp.body;
          expect(service).to.be.an('object');
          expect(service.organization).to.eql('Metro Detroit Free Code Camp');
          done();
        });
    });

    it('should POST a new service', function (done) {
      request(app)
        .post('/api/services')
        .set('Accept', 'application/json')
        .send(helpers.services[1])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var service = resp.body;
          expect(service).to.be.an('object');
          expect(service.organization).to.eql('Tutormate');
          done();
        });
    });

    it('should POST a new service', function (done) {
      request(app)
        .post('/api/services')
        .set('Accept', 'application/json')
        .send(helpers.services[2])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var service = resp.body;
          expect(service).to.be.an('object');
          expect(service.organization).to.eql('Forgotten Harvest');
          done();
        });
    });
  });

  describe('Retrieves a service from the database', function () {
    it('should GET a service by ID', function (done) {
      request(app)
        .get('/api/services/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var service = resp.body;
          expect(service).to.be.an('object');
          expect(service.organization).to.eql('Metro Detroit Free Code Camp');
          done();
        });
    });
  });

  describe('Retrieves all services from the database', function () {
    it('should GET all services', function (done) {
      this.timeout(3500);
      request(app)
        .get('/api/services')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var services = resp.body;
          expect(services).to.be.an('array');
          expect(services.length).to.eql(3);
          done();
        });
    });
  });

  describe('Deletes a service from the database', function () {
    it('should DELETE a service', function (done) {
      this.timeout(3500);
      request(app)
        .delete('/api/services/3')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var service = resp.body;
          expect(service).to.be.an('object');
          expect(service.id).to.eql(3);
          done();
        });
    });
  });

  describe('Retrieves all services from the database', function () {
    it('should GET all services', function (done) {
      request(app)
        .get('/api/services')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var services = resp.body;
          expect(services).to.be.an('array');
          expect(services.length).to.eql(2);
          done();
        });
    });
  });

  describe('Updates a service in the database', function () {
    it('should PUT updates for a service into the database', function (done) {
      request(app)
        .put('/api/services/1')
        .set('Accept', 'application/json')
        .send(helpers.serviceUpdates[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var service = resp.body;
          expect(service).to.be.an('object');
          expect(service.organization).to.eql('DevStudy.group');
          done();
        });
    });
  });
});
