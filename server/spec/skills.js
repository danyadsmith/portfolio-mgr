/* globals describe it */
const app = require('../index');
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
        .end(function (err, resp) {
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
        .end(function (err, resp) {
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
        .end(function (err, resp) {
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
        .send(helpers.skills[3])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('CSS');
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
          expect(skill.name).to.eql('Angular');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[5])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('React');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[6])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('ASP.net');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[7])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Ruby on Rails');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[8])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('PostgreSQL');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[9])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('MongoDB');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[10])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Balsamiq Mockups');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[11])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Sketch');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[12])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Git');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[13])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Microsoft Project');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[14])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Microsoft Office/Office365');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[15])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Visio');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[16])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Agile/SCRUM');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[17])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('BDD');
          done();
        });
    });
  });

  describe('Retrieves a skill from the database', function () {
    it('should GET a skill by ID', function (done) {
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
    it('should GET all skills', function (done) {
      this.timeout(3500);
      request(app)
        .get('/api/skills')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skills = resp.body;
          expect(skills).to.be.an('array');
          expect(skills.length).to.eql(18);
          done();
        });
    });
  });

  describe('Deletes a skill from the database', function () {
    it('should DELETE a skill', function (done) {
      this.timeout(3500);
      request(app)
        .delete('/api/skills/15')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.id).to.eql(15);
          done();
        });
    });
  });

  describe('Retrieves all skills from the database', function () {
    it('should GET all skills', function (done) {
      request(app)
        .get('/api/skills')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skills = resp.body;
          expect(skills).to.be.an('array');
          expect(skills.length).to.eql(17);
          done();
        });
    });
  });

  describe('Updates a skill in the database', function () {
    it('should PUT updates for a skill into the database', function (done) {
      request(app)
        .put('/api/skills/2')
        .set('Accept', 'application/json')
        .send(helpers.skillUpdates[0])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('JavaScript');
          done();
        });
    });
  });
});
