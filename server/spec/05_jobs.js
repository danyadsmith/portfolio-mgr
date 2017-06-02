/* globals describe it */
const app = require('../index');
const chalk = require('chalk');
const config = require('../config/');
const helpers = require('./helpers');
const request = require('supertest');
const expect = require('chai').expect;

describe('[JOBS]   /api/users/1/jobs/', function () {

  describe('Creates a job in the database', function () {
    it('should POST a new job', function (done) {
      request(app)
        .post('/api/users/1/jobs')
        .set('Accept', 'application/json')
        .send(helpers.jobs[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var job = resp.body;
          expect(job).to.be.an('object');
          expect(job.employer).to.eql('Lear Corporation');
          done();
        });
    });

    it('should POST a new job', function (done) {
      request(app)
        .post('/api/users/1/jobs')
        .set('Accept', 'application/json')
        .send(helpers.jobs[1])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var job = resp.body;
          expect(job).to.be.an('object');
          expect(job.employer).to.eql('Metaldyne');
          done();
        });
    });

    it('should POST a new job', function (done) {
      request(app)
        .post('/api/users/1/jobs')
        .set('Accept', 'application/json')
        .send(helpers.jobs[2])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var job = resp.body;
          expect(job).to.be.an('object');
          expect(job.employer).to.eql('Oakland University');
          done();
        });
    });;

    it('should POST a new job', function (done) {
      request(app)
        .post('/api/users/1/jobs')
        .set('Accept', 'application/json')
        .send(helpers.jobs[3])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var job = resp.body;
          expect(job).to.be.an('object');
          expect(job.employer).to.eql('Management Systems, Inc.');
          done();
        });
    });
  });

  describe('Retrieves a job from the database', function () {
    it('should GET a job by ID', function (done) {
      request(app)
        .get('/api/users/1/jobs/1')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var job = resp.body;
          expect(job).to.be.an('object');
          expect(job.employer).to.eql('Lear Corporation');
          done();
        });
    });
  });

  describe('Retrieves job history from the database', function () {
    it('should GET all jobs', function (done) {
      this.timeout(3500);
      request(app)
        .get('/api/users/1/jobs')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var jobs = resp.body;
          expect(jobs).to.be.an('array');
          expect(jobs.length).to.eql(4);
          done();
        });
    });
  });

  describe('Deletes a job from the database', function () {
    it('should DELETE a job', function (done) {
      this.timeout(3500);
      request(app)
        .delete('/api/users/1/jobs/3')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var job = resp.body;
          expect(job).to.be.an('object');
          expect(job.id).to.eql(3);
          done();
        });
    });
  });

  describe('Retrieves job history from the database', function () {
    it('should GET all jobs', function (done) {
      request(app)
        .get('/api/users/1/jobs')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var jobs = resp.body;
          expect(jobs).to.be.an('array');
          expect(jobs.length).to.eql(3);
          done();
        });
    });
  });

  describe('Updates a job in the database', function () {
    it('should PUT updates for a job into the database', function (done) {
      request(app)
        .put('/api/users/1/jobs/2')
        .set('Accept', 'application/json')
        .send(helpers.jobUpdates[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var job = resp.body;
          expect(job).to.be.an('object');
          expect(job.employer).to.eql('American Axle & Manufacturing (AAM)');
          done();
        });
    });
  });
});
