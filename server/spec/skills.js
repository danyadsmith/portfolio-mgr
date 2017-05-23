/* globals describe it */
const app = require('../server');
const chalk = require('chalk');
const config = require('../config/');
const helpers = require('./helpers');
const request = require('supertest');
const expect = require('chai').expect;

describe('[SKILLS]   /api/skills/', function () {

  describe('Creates a skill in the database', function () {
    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('C#');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[1])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Java');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[2])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Ruby');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[3])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('HTML');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[4])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('CSS');
          done();
        });
    });
  });

  describe('Retrieves a skill from the database', function () {
    it('should get a skill by ID via a GET request', function (done) {
      request(app)
        .get('/api/skills/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('C#');
          done();
        });
    });
  });

  describe('Retrieves all skills from the database', function () {
    it('should get all skills via a GET request', function (done) {
      request(app)
        .get('/api/skills')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skills = resp.body;
          expect(skills).to.be.an('array');
          expect(skills.length).to.eql(5);
          done();
        });
    });
  });

  describe('Deletes a skill from the database', function () {
    it('should delete a skill via a DELETE request', function (done) {
      request(app)
        .delete('/api/skills/5')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill).to.have.property('name');
          done();
        });
    });
  });

  describe('Retrieves all skills from the database', function () {
    it('should get all skills via a GET request', function (done) {
      request(app)
        .get('/api/skills')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skills = resp.body;
          expect(skills).to.be.an('array');
          expect(skills.length).to.eql(4);
          done();
        });
    });
  });

  describe('Updates a skill in the database', function () {
    it('should update a skill via a PUT request', function (done) {
      request(app)
        .put('/api/skills/2')
        .set('Accept', 'application/json')
        .send(helpers.skillUpdates[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql(helpers.skillUpdates[0]);
          done();
        });
    });
  });

});
