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
}, 500);

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
  .then(() => console.log(chalk.magenta('Seeding Project Types')))
  .then(() => ProjectType.bulkCreate([
    { name: 'Work'},
    { name: 'Open Source'}
  ]));
};
