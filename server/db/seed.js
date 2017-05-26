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
};
