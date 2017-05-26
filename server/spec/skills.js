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
          expect(skill.name).to.eql('SASS');
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
          expect(skill.name).to.eql('SCSS');
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
          expect(skill.name).to.eql('SVG');
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
          expect(skill.name).to.eql('XML');
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
          expect(skill.name).to.eql('XSLT');
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
          expect(skill.name).to.eql('Angular');
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
          expect(skill.name).to.eql('AngularJS');
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
          expect(skill.name).to.eql('Bootstrap');
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
          expect(skill.name).to.eql('jQuery');
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
          expect(skill.name).to.eql('KnockoutJS');
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
          expect(skill.name).to.eql('React');
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
          expect(skill.name).to.eql('Underscore');
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
          expect(skill.name).to.eql('ASP.net');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[18])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('ASP.net MVC');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[19])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('PHP');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[20])
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
        .send(helpers.skills[21])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('NodeJS');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[22])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Express');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[23])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Unix/Bash');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[24])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('IIS');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[25])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Powershell');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[26])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Microsoft SQL Server');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[27])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('MySQL');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[28])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('SQLite3');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[29])
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
        .send(helpers.skills[30])
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
        .send(helpers.skills[31])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Firebase');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[32])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Mongoose');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[33])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Sequelize');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[34])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Adobe Creative Cloud');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[35])
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
        .send(helpers.skills[36])
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
        .send(helpers.skills[37])
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
        .send(helpers.skills[38])
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
        .send(helpers.skills[39])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Redmine');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[40])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('TargetProcess');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[41])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Trello');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[42])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Waffle.io');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[43])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('ZenHub');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[44])
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
        .send(helpers.skills[45])
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
        .send(helpers.skills[46])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('SharePoint');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[47])
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
        .send(helpers.skills[48])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('BDD');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[49])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Meeting Facilitation');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[50])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Requirements Gathering');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[51])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('TDD');
          done();
        });
    });

    it('should POST a new skill', function (done) {
      request(app)
        .post('/api/skills')
        .set('Accept', 'application/json')
        .send(helpers.skills[52])
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.name).to.eql('Technical Writing');
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
          expect(skills.length).to.eql(53);
          done();
        });
    });
  });

  describe('Deletes a skill from the database', function () {
    it('should DELETE a skill', function (done) {
      this.timeout(3500);
      request(app)
        .delete('/api/skills/53')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, resp) {
          var skill = resp.body;
          expect(skill).to.be.an('object');
          expect(skill.id).to.eql(53);
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
          expect(skills.length).to.eql(52);
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
