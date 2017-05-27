var db    = require('./index');
var chalk = require('chalk');

var User = db.User;
var Category = db.Category;
var Skill = db.Skill;
var Credential = db.Credential;
var Job = db.Job;
var Project = db.Project;
var ProjectType = db.ProjectType;
var CommunityService = db.CommunityService;
var SocialMediaAccount = db.SocialMediaAccount;
var Portfolio = db.Portfolio;
var Blog = db.Blog;
var BlogCategory = db.BlogCategory;
var Setting = db.Setting;

console.log(chalk.white.bold('Seeding the Database........'));

setTimeout(function () {
  seedData();
}, 2000);

var seedData = function () {
  console.log(chalk.white('Dropping and re-creating tables'));
  User.sync({force: true})
  .then(() => Category.sync({force: true}))
  .then(() => Skill.sync({force: true}))
  .then(() => Credential.sync({force: true}))
  .then(() => Job.sync({force: true}))
  .then(() => Project.sync({force: true}))
  .then(() => ProjectType.sync({force: true}))
  .then(() => CommunityService.sync({force: true}))
  .then(() => SocialMediaAccount.sync({force: true}))
  .then(() => Portfolio.sync({force: true}))
  .then(() => Blog.sync({force: true}))
  .then(() => BlogCategory.sync({force: true}))
  .then(() => Setting.sync({force: true}))
  .then(() => console.log(chalk.magenta('Seeding Users')))
  .then(() => User.create({
    firstName: 'Danya',
    middleName: 'D.',
    lastName: 'Smith',
    username: 'danyadsmith',
    email: 'danyadsmith@email.com',
    photoUrl: 'http://portfolio.pspu.ru/uploads/avatars/noimage.png',
    password: '$2a$10$17kLnuJc/J/KEvKCro6NVOPcOCld6/jD2zwX.SOwJZ4GNbzYnIOx6',
    createdAt: new Date(),
    updatedAt: new Date()
  }))
  .then(() => console.log(chalk.magenta('Seeding Categories')))
  .then(() => Category.bulkCreate([
    {name: 'Programming Languages'},
    {name: 'Web'},
    {name: 'Front-end Frameworks'},
    {name: 'Server-side Frameworks'},
    {name: 'Databases and ORMs'},
    {name: 'UX and Design'},
    {name: 'Project Management'},
    {name: 'Business Software'},
    {name: 'Other'}
  ]))
  .then(() => console.log(chalk.magenta('Seeding Skills')))
  .then(() => Skill.bulkCreate([
    {userId: 1, categoryId: 1, name: 'C#', expertise: 1},
    {userId: 1, categoryId: 1, name: 'Java', expertise: 1},
    {userId: 1, categoryId: 1, name: 'Ruby', expertise: 0},
    {userId: 1, categoryId: 2, name: 'HTML', expertise: 1},
    {userId: 1, categoryId: 2, name: 'CSS', expertise: 1},
    {userId: 1, categoryId: 2, name: 'SASS', expertise: 1},
    {userId: 1, categoryId: 2, name: 'SCSS', expertise: 1},
    {userId: 1, categoryId: 2, name: 'SVG', expertise: 0},
    {userId: 1, categoryId: 2, name: 'XML', expertise: 1},
    {userId: 1, categoryId: 2, name: 'XSLT', expertise: 1},
    {userId: 1, categoryId: 3, name: 'Angular', expertise: 0},
    {userId: 1, categoryId: 3, name: 'AngularJS', expertise: 1},
    {userId: 1, categoryId: 3, name: 'Bootstrap', expertise: 1},
    {userId: 1, categoryId: 3, name: 'jQuery', expertise: 1},
    {userId: 1, categoryId: 3, name: 'KnockoutJS', expertise: 0},
    {userId: 1, categoryId: 3, name: 'React', expertise: 0},
    {userId: 1, categoryId: 3, name: 'Underscore', expertise: 1},
    {userId: 1, categoryId: 4, name: 'ASP.net', expertise: 1},
    {userId: 1, categoryId: 4, name: 'ASP.net MVC', expertise: 0},
    {userId: 1, categoryId: 4, name: 'PHP', expertise: 0},
    {userId: 1, categoryId: 4, name: 'Ruby on Rails', expertise: 1},
    {userId: 1, categoryId: 5, name: 'NodeJS', expertise: 1},
    {userId: 1, categoryId: 5, name: 'Express', expertise: 1},
    {userId: 1, categoryId: 5, name: 'Unix/Bash', expertise: 1},
    {userId: 1, categoryId: 5, name: 'IIS', expertise: 1},
    {userId: 1, categoryId: 5, name: 'Powershell', expertise: 0},
    {userId: 1, categoryId: 5, name: 'Microsoft SQL Server', expertise: 1},
    {userId: 1, categoryId: 5, name: 'MySQL', expertise: 1},
    {userId: 1, categoryId: 5, name: 'SQLite3', expertise: 1},
    {userId: 1, categoryId: 5, name: 'PostgreSQL', expertise: 1},
    {userId: 1, categoryId: 5, name: 'MongoDB', expertise: 0},
    {userId: 1, categoryId: 5, name: 'Firebase', expertise: 0},
    {userId: 1, categoryId: 5, name: 'Mongoose', expertise: 0},
    {userId: 1, categoryId: 5, name: 'Sequelize', expertise: 1},
    {userId: 1, categoryId: 6, name: 'Adobe Creative Cloud', expertise: 1},
    {userId: 1, categoryId: 6, name: 'Balsamiq Mockups', expertise: 1},
    {userId: 1, categoryId: 6, name: 'Sketch', expertise: 0},
    {userId: 1, categoryId: 7, name: 'Git', expertise: 1},
    {userId: 1, categoryId: 7, name: 'Microsoft Project', expertise: 1},
    {userId: 1, categoryId: 7, name: 'Redmine', expertise: 1},
    {userId: 1, categoryId: 7, name: 'TargetProcess', expertise: 0},
    {userId: 1, categoryId: 7, name: 'Trello', expertise: 1},
    {userId: 1, categoryId: 7, name: 'Waffle.io', expertise: 1},
    {userId: 1, categoryId: 7, name: 'ZenHub', expertise: 0},
    {userId: 1, categoryId: 8, name: 'Microsoft Office/Office365', expertise: 1},
    {userId: 1, categoryId: 8, name: 'Visio', expertise: 1},
    {userId: 1, categoryId: 8, name: 'SharePoint', expertise: 1},
    {userId: 1, categoryId: 9, name: 'Agile/SCRUM', expertise: 0},
    {userId: 1, categoryId: 9, name: 'BDD', expertise: 0},
    {userId: 1, categoryId: 9, name: 'Meeting Facilitation', expertise: 1},
    {userId: 1, categoryId: 9, name: 'Requirements Gathering', expertise: 1},
    {userId: 1, categoryId: 9, name: 'TDD', expertise: 0},
    {userId: 1, categoryId: 9, name: 'Technical Writing', expertise: 1}
  ]));
  .then(() => console.log(chalk.magenta('Seeding Project Types')))
  .then(() => Skill.bulkCreate([
    { name: 'Work'},
    { name: 'Open Source'}
  ]));
  .then(() => console.log(chalk.magenta('Seeding Projects')))
  .then(() => Skill.bulkCreate([
      'Implemented custom branding including an optional responsive web design feature for intranet sites',
      'Developed custom web parts and application pages',
      'Supported site owners with content migrations from legacy enterprise portal'
    ], startDate: '2012-03-01'},
    {title: 'Global Audit Management System', role: 'Developer', url: '', type: {id: 1}, highlights: [
      'Discovered, documented and corrected data migration issues in inherited codebase',
      'Reworked front-end web forms and masterpages to enhance UI and UX'
    ], startDate: '2015-05-28'},
    {title: 'ePAD Purchasing Authorization System', role: 'Developer', url: '', type: {id: 1}, highlights: [
      'Documented requirements using flowcharts, entity-relationship diagrams, state transition diagrams, swim-lane diagrams, business rules and RASCI charts to facilitate communication and solidify MVP',
      'Designed user interface wireframes and implemented design using CSS grid-based layouts',
      'Created C# business classes and Microsoft SQL Server stored procedures, functions and views',
      'Developed ASP.net masterpages, web forms, dashboards and search features'
    ], startDate: '2011-04-06', endDate: '2011-07-27'},
    {title: 'MyLear Portal', role: 'Developer, Administrator and Architect', url: '', type: {id: 1}, highlights: [
      'Managed codebase, feature upgrades and deployment process for over 50 custom ASP.net web parts',
      'Created and deployed portal migration packages and code revisions from DEV to QA and Production',
      'Administered portal security, implemented taxonomy and monitored portal servers and services',
      'Completed two major version upgrades and applied periodic patches and hotfixes'
    ], startDate: '2004-09-01', endDate: '2016-10-20'},
    {title: 'EconClub.org', role: 'Business Analyst', url: 'http://www.econclub.org', type: {id: 1}, highlights: [
      'Worked with a team to customize and deploy the iMIS e-Series e-commerce application',
      'Migrated DOS-based membership database to iMIS Membership Management Software'
    ], startDate: '2003-06-02', endDate: '2004-09-01'},
    {title: 'Siren', role: 'Developer', type: {id: 2}, highlights: [
      'Designed database schema and implemented server-side controllers',
      'Created and refactored API Routes to use modular functions to manage complex Promise chains',
      'Wrote integration tests for API routes using Mocha, Chai and supertest'
    ], startDate: '2017-04-04', endDate: '2017-04-28'},
    {title: 'Hydra Travel', role: 'Developer', url: 'http://hydra-travel.herokuapp.com/', type: {id: 2}, highlights: [
      'Converted MongoDB schema from an embedded structure to a relational structure using references',
      'Refactored server controllers and API routes to support enhancements and improve code organization',
      'Added server-side configuration for database seeding, debugging and API key organization'
    ], startDate: '2017-03-29', endDate: '2017-04-03'},
    {title: 'Stackets', role: 'Developer', url: 'http://stackets.herokuapp.com/', type: {id: 2}, highlights: [
      'Worked with a team to customize and deploy the iMIS e-Series e-commerce application',
      'Migrated DOS-based membership database to iMIS Membership Management Software'
    ], startDate: '2017-03-15', endDate: '2017-03-27'}
  ]));
};