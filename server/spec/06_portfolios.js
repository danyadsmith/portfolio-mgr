/* globals describe it */
const app = require('../../server');
const chalk = require('chalk');
const config = require('../config/');
const helpers = require('./helpers');
const request = require('supertest');
const expect = require('chai').expect;

describe('[PORTFOLIOS]   /api/users/1/portfolios/', function () {

  describe('Creates a portfolio in the database', function () {
    it('should POST a new portfolio', function (done) {
      request(app)
        .post('/api/users/1/portfolios')
        .set('Accept', 'application/json')
        .send(helpers.portfolios[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var portfolio = resp.body;
          expect(portfolio).to.be.an('object');
          expect(portfolio.image).to.eql('photo01.png');
          done();
        });
    });

    it('should POST a new portfolio', function (done) {
      request(app)
        .post('/api/users/1/portfolios')
        .set('Accept', 'application/json')
        .send(helpers.portfolios[1])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var portfolio = resp.body;
          expect(portfolio).to.be.an('object');
          expect(portfolio.image).to.eql('photo02.png');
          done();
        });
    });

    it('should POST a new portfolio', function (done) {
      request(app)
        .post('/api/users/1/portfolios')
        .set('Accept', 'application/json')
        .send(helpers.portfolios[2])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var portfolio = resp.body;
          expect(portfolio).to.be.an('object');
          expect(portfolio.image).to.eql('photo03.png');
          done();
        });
    });

    it('should POST a new portfolio', function (done) {
      request(app)
        .post('/api/users/1/portfolios')
        .set('Accept', 'application/json')
        .send(helpers.portfolios[3])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var portfolio = resp.body;
          expect(portfolio).to.be.an('object');
          expect(portfolio.image).to.eql('photo04.png');
          done();
        });
    });
  });

  describe('Retrieves a portfolio from the database', function () {
    it('should GET a portfolio by ID', function (done) {
      request(app)
        .get('/api/users/1/portfolios/4')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var portfolio = resp.body;
          expect(portfolio).to.be.an('object');
          expect(portfolio.image).to.eql('photo04.png');
          done();
        });
    });
  });

  describe('Retrieves all portfolios from the database', function () {
    it('should GET all portfolios', function (done) {
      this.timeout(3500);
      request(app)
        .get('/api/users/1/portfolios')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var portfolios = resp.body;
          expect(portfolios).to.be.an('array');
          expect(portfolios.length).to.eql(4);
          done();
        });
    });
  });

  describe('Deletes a portfolio from the database', function () {
    it('should DELETE a portfolio', function (done) {
      this.timeout(3500);
      request(app)
        .delete('/api/users/1/portfolios/4')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var portfolio = resp.body;
          expect(portfolio).to.be.an('object');
          expect(portfolio.id).to.eql(4);
          done();
        });
    });
  });

  describe('Retrieves all portfolios from the database', function () {
    it('should GET all portfolios', function (done) {
      request(app)
        .get('/api/users/1/portfolios')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var portfolios = resp.body;
          expect(portfolios).to.be.an('array');
          expect(portfolios.length).to.eql(3);
          done();
        });
    });
  });

  describe('Updates a portfolio in the database', function () {
    it('should PUT updates for a portfolio into the database', function (done) {
      request(app)
        .put('/api/users/1/portfolios/1')
        .set('Accept', 'application/json')
        .send(helpers.portfolioUpdates[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, resp) {
          var portfolio = resp.body;
          expect(portfolio).to.be.an('object');
          expect(portfolio.image).to.eql('portfolio01.jpg');
          done();
        });
    });
  });
});
