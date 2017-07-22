/* globals describe it */
const app = require('../index');
const chalk = require('chalk');
const config = require('../config/');
const helpers = require('./helpers');
const request = require('supertest');
const expect = require('chai').expect;

describe('[MESSAGES]   /api/messages/', function () {
  describe('Archives a message in the database', function () {

    it('should POST a new message', function (done) {
      this.timeout(5000);
      request(app)
        .post('/api/messages')
        .set('Accept', 'application/json')
        .send(helpers.messages[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var message = resp.body;
          expect(message).to.be.an('object');
          expect(message.name).to.eql('John Doe');
          done();
        });
    });
  });
});
