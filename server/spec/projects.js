/* globals describe it */
const app = require('../../server');
const chalk = require('chalk');
const config = require('../config/');
const helpers = require('./helpers');
const request = require('supertest');
const expect = require('chai').expect;

describe('[PROJECTS]   /api/users/1/projects/', function () {

  describe('Creates a project in the database', function () {
    it('should POST a new project', function (done) {
      request(app)
        .post('/api/users/1/projects')
        .set('Accept', 'application/json')
        .send(helpers.projects[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var project = resp.body;
          expect(project).to.be.an('object');
          expect(project.title).to.eql('everyONE.lear.com');
          done();
        });
    });

    it('should POST a new project', function (done) {
      request(app)
        .post('/api/users/1/projects')
        .set('Accept', 'application/json')
        .send(helpers.projects[1])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var project = resp.body;
          expect(project).to.be.an('object');
          expect(project.title).to.eql('Global Audit Management System');
          done();
        });
    });

    it('should POST a new project', function (done) {
      request(app)
        .post('/api/users/1/projects')
        .set('Accept', 'application/json')
        .send(helpers.projects[2])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var project = resp.body;
          expect(project).to.be.an('object');
          expect(project.title).to.eql('ePAD Purchasing Authorization System');
          done();
        });
    });

    it('should POST a new project', function (done) {
      request(app)
        .post('/api/users/1/projects')
        .set('Accept', 'application/json')
        .send(helpers.projects[3])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var project = resp.body;
          expect(project).to.be.an('object');
          expect(project.title).to.eql('MyLear Portal');
          done();
        });
    });

    it('should POST a new project', function (done) {
      request(app)
        .post('/api/users/1/projects')
        .set('Accept', 'application/json')
        .send(helpers.projects[4])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var project = resp.body;
          expect(project).to.be.an('object');
          expect(project.title).to.eql('EconClub.org');
          done();
        });
    });
  });

  describe('Retrieves a project from the database', function () {
    it('should GET a project by ID', function (done) {
      request(app)
        .get('/api/users/1/projects/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var project = resp.body;
          expect(project).to.be.an('object');
          expect(project.title).to.eql('everyONE.lear.com');
          done();
        });
    });
  });

  describe('Retrieves all projects from the database', function () {
    it('should GET all projects', function (done) {
      this.timeout(3500);
      request(app)
        .get('/api/users/1/projects')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var projects = resp.body;
          expect(projects).to.be.an('array');
          expect(projects.length).to.eql(5);
          done();
        });
    });
  });

  describe('Deletes a project from the database', function () {
    it('should DELETE a project', function (done) {
      this.timeout(3500);
      request(app)
        .delete('/api/users/1/projects/4')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var project = resp.body;
          expect(project).to.be.an('object');
          expect(project.id).to.eql(4);
          done();
        });
    });
  });

  describe('Retrieves all projects from the database', function () {
    it('should GET all projects', function (done) {
      request(app)
        .get('/api/users/1/projects')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var projects = resp.body;
          expect(projects).to.be.an('array');
          expect(projects.length).to.eql(4);
          done();
        });
    });
  });

  describe('Updates a project in the database', function () {
    it('should PUT updates for a project into the database', function (done) {
      request(app)
        .put('/api/users/1/projects/1')
        .set('Accept', 'application/json')
        .send(helpers.projectUpdates[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var project = resp.body;
          expect(project).to.be.an('object');
          expect(project.endDate).to.eql(new Date('2017-09-01').toISOString());
          done();
        });
    });
  });
});
