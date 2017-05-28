/* globals describe it */
const app = require('../../server');
const chalk = require('chalk');
const config = require('../config/');
const helpers = require('./helpers');
const request = require('supertest');
const expect = require('chai').expect;

describe('[PROFILES]   /api/profiles/', function () {

  describe('Creates a profile in the database', function () {
    it('should POST a new profile', function (done) {
      request(app)
        .post('/api/profiles')
        .set('Accept', 'application/json')
        .send(helpers.profiles[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var profile = resp.body;
          expect(profile).to.be.an('object');
          expect(profile.siteName).to.eql('Twitter');
          done();
        });
    });

    it('should POST a new profile', function (done) {
      request(app)
        .post('/api/profiles')
        .set('Accept', 'application/json')
        .send(helpers.profiles[1])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var profile = resp.body;
          expect(profile).to.be.an('object');
          expect(profile.siteName).to.eql('GitHub');
          done();
        });
    });

    it('should POST a new profile', function (done) {
      request(app)
        .post('/api/profiles')
        .set('Accept', 'application/json')
        .send(helpers.profiles[2])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var profile = resp.body;
          expect(profile).to.be.an('object');
          expect(profile.siteName).to.eql('CodePen');
          done();
        });
    });

    it('should POST a new profile', function (done) {
      request(app)
        .post('/api/profiles')
        .set('Accept', 'application/json')
        .send(helpers.profiles[3])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var profile = resp.body;
          expect(profile).to.be.an('object');
          expect(profile.siteName).to.eql('LinkedIn');
          done();
        });
    });
  });

  describe('Retrieves a profile from the database', function () {
    it('should GET a profile by ID', function (done) {
      request(app)
        .get('/api/profiles/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var profile = resp.body;
          expect(profile).to.be.an('object');
          expect(profile.siteName).to.eql('Twitter');
          done();
        });
    });
  });

  describe('Retrieves all profiles from the database', function () {
    it('should GET all profiles', function (done) {
      this.timeout(3500);
      request(app)
        .get('/api/profiles')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var profiles = resp.body;
          expect(profiles).to.be.an('array');
          expect(profiles.length).to.eql(4);
          done();
        });
    });
  });

  describe('Deletes a profile from the database', function () {
    it('should DELETE a profile', function (done) {
      this.timeout(3500);
      request(app)
        .delete('/api/profiles/3')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var profile = resp.body;
          expect(profile).to.be.an('object');
          expect(profile.id).to.eql(3);
          done();
        });
    });
  });

  describe('Retrieves all profiles from the database', function () {
    it('should GET all profiles', function (done) {
      request(app)
        .get('/api/profiles')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var profiles = resp.body;
          expect(profiles).to.be.an('array');
          expect(profiles.length).to.eql(3);
          done();
        });
    });
  });

  describe('Updates a profile in the database', function () {
    it('should PUT updates for a profile into the database', function (done) {
      request(app)
        .put('/api/profiles/4')
        .set('Accept', 'application/json')
        .send(helpers.profileUpdates[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var profile = resp.body;
          expect(profile).to.be.an('object');
          expect(profile.visible).to.be.false;
          done();
        });
    });
  });
});
