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
}, 3000);

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
    displayName: 'Danya D. Smith',
    username: 'danyadsmith',
    email: 'danyadsmith@email.com',
    photoUrl: 'http://portfolio.pspu.ru/uploads/avatars/noimage.png',
    password: '$2a$10$17kLnuJc/J/KEvKCro6NVOPcOCld6/jD2zwX.SOwJZ4GNbzYnIOx6',
    location: 'Metro Detroit',
    desiredJobTitle: 'Full Stack Software Engineer',
    seekingNewOpportunities: true,
    willingToRelocate: false,
    acceptingFreelanceWork: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }))
  .then(() => console.log(chalk.magenta('Seeding Categories')))
  .then(() => Category.bulkCreate([
    {name: 'Programming Languages'},
    {name: 'Web Standards'},
    {name: 'Front-end Frameworks'},
    {name: 'Server-side Frameworks'},
    {name: 'Databases and ORMs'},
    {name: 'UX and Design'},
    {name: 'Project Management'},
    {name: 'Business Software'},
    {name: 'Other'},
    {name: 'Project'},
    {name: 'Process'}
  ]))
  .then(() => console.log(chalk.magenta('Seeding Skills')))
  .then(() => Skill.bulkCreate([
    {UserId: 1, CategoryId: 1, name: 'C#', expertise: 1},
    {UserId: 1, CategoryId: 1, name: 'JavaScript', expertise: 1},
    {UserId: 1, CategoryId: 1, name: 'Ruby', expertise: 0},
    {UserId: 1, CategoryId: 2, name: 'HTML', expertise: 1},
    {UserId: 1, CategoryId: 2, name: 'CSS', expertise: 1},
    {UserId: 1, CategoryId: 2, name: 'SASS', expertise: 1},
    {UserId: 1, CategoryId: 2, name: 'SCSS', expertise: 1},
    {UserId: 1, CategoryId: 2, name: 'SVG', expertise: 0},
    {UserId: 1, CategoryId: 2, name: 'XML', expertise: 1},
    {UserId: 1, CategoryId: 2, name: 'XSLT', expertise: 1},
    {UserId: 1, CategoryId: 3, name: 'Angular', expertise: 0},
    {UserId: 1, CategoryId: 3, name: 'AngularJS', expertise: 1},
    {UserId: 1, CategoryId: 3, name: 'Bootstrap', expertise: 1},
    {UserId: 1, CategoryId: 3, name: 'jQuery', expertise: 1},
    {UserId: 1, CategoryId: 3, name: 'KnockoutJS', expertise: 0},
    {UserId: 1, CategoryId: 3, name: 'React', expertise: 0},
    {UserId: 1, CategoryId: 3, name: 'Underscore', expertise: 1},
    {UserId: 1, CategoryId: 4, name: 'ASP.net', expertise: 1},
    {UserId: 1, CategoryId: 4, name: 'ASP.net MVC', expertise: 0},
    {UserId: 1, CategoryId: 4, name: 'PHP', expertise: 0},
    {UserId: 1, CategoryId: 4, name: 'Ruby on Rails', expertise: 1},
    {UserId: 1, CategoryId: 5, name: 'NodeJS', expertise: 1},
    {UserId: 1, CategoryId: 5, name: 'Express', expertise: 1},
    {UserId: 1, CategoryId: 5, name: 'Unix/Bash', expertise: 1},
    {UserId: 1, CategoryId: 5, name: 'IIS', expertise: 1},
    {UserId: 1, CategoryId: 5, name: 'Powershell', expertise: 0},
    {UserId: 1, CategoryId: 5, name: 'Microsoft SQL Server', expertise: 1},
    {UserId: 1, CategoryId: 5, name: 'MySQL', expertise: 1},
    {UserId: 1, CategoryId: 5, name: 'SQLite3', expertise: 1},
    {UserId: 1, CategoryId: 5, name: 'PostgreSQL', expertise: 1},
    {UserId: 1, CategoryId: 5, name: 'MongoDB', expertise: 0},
    {UserId: 1, CategoryId: 5, name: 'Firebase', expertise: 0},
    {UserId: 1, CategoryId: 5, name: 'Mongoose', expertise: 0},
    {UserId: 1, CategoryId: 5, name: 'Sequelize', expertise: 1},
    {UserId: 1, CategoryId: 6, name: 'Adobe Creative Cloud', expertise: 1},
    {UserId: 1, CategoryId: 6, name: 'Balsamiq Mockups', expertise: 1},
    {UserId: 1, CategoryId: 6, name: 'Sketch', expertise: 0},
    {UserId: 1, CategoryId: 7, name: 'Git', expertise: 1},
    {UserId: 1, CategoryId: 7, name: 'Microsoft Project', expertise: 1},
    {UserId: 1, CategoryId: 7, name: 'Redmine', expertise: 1},
    {UserId: 1, CategoryId: 7, name: 'TargetProcess', expertise: 0},
    {UserId: 1, CategoryId: 7, name: 'Trello', expertise: 1},
    {UserId: 1, CategoryId: 7, name: 'Waffle.io', expertise: 1},
    {UserId: 1, CategoryId: 7, name: 'ZenHub', expertise: 0},
    {UserId: 1, CategoryId: 8, name: 'Microsoft Office/Office365', expertise: 1},
    {UserId: 1, CategoryId: 8, name: 'Visio', expertise: 1},
    {UserId: 1, CategoryId: 8, name: 'SharePoint', expertise: 1},
    {UserId: 1, CategoryId: 9, name: 'Agile/SCRUM', expertise: 0},
    {UserId: 1, CategoryId: 9, name: 'BDD', expertise: 0},
    {UserId: 1, CategoryId: 9, name: 'Meeting Facilitation', expertise: 1},
    {UserId: 1, CategoryId: 9, name: 'Requirements Gathering', expertise: 1},
    {UserId: 1, CategoryId: 9, name: 'TDD', expertise: 0},
    {UserId: 1, CategoryId: 9, name: 'Technical Writing', expertise: 1}
  ]))
  .then(() => console.log(chalk.magenta('Seeding Work History')))
  .then(() => Job.bulkCreate([
    { employer: 'Lear Corporation', city: 'Southfield', state: 'MI', jobTitle: 'Enterprise Portal Developer, Administrator and UX Designer', startDate: '2003-06-02', logoImage: '', UserId: 1 },
    { employer: 'Metaldyne', city: 'Plymouth', state: 'MI', jobTitle: 'Web Development Intern', startDate: '2002-05-01', endDate: '2003-03-01', logoImage: '', UserId: 1},
    { employer: 'Oakland University', city: 'Rochester Hills', state: 'MI', jobTitle: 'Entrepreneurship Institute Assistant', startDate: '2001-02-01', endDate: '2001-09-01', logoImage: '', UserId: 1 },
    { employer: 'Management Systems, Inc.', city: 'Detroit', state: 'MI', jobTitle: 'Director, Computer Learning Center', startDate: '1997-06-01', endDate: '2000-08-01', logoImage: '', UserId: 1}
  ]))
  .then(() => console.log(chalk.magenta('Seeding Credentials')))
  .then(() => Credential.bulkCreate([
    {organization: 'Oakland University', school: 'School of Business Administration',credential: 'Bachelor of Arts', major: 'Management Information Systems', minor: 'Applied Technology in Business', dateCompleted: '2003-04-26', UserId: 1, visible: true},
    {organization: 'Hack Reactor', school: 'Remote', credential: 'Advanced Software Engineering Immersive Program', dateCompleted: '2017-05-06', UserId: 1, visible: true},
    {organization: 'Bloc', school: 'Remote', credential: 'Full Stack Developer Track', dateCompleted: '2017-07-06', UserId: 1, visible: false}
  ]))
  .then(() => console.log(chalk.magenta('Seeding Community Service')))
  .then(() => CommunityService.bulkCreate([
    {organization: 'Metro Detroit Free Code Camp', role: 'Founder, Meetup Organizer', UserId: 1},
    {organization: 'Tutormate', role: 'Tutor', UserId: 1},
    {organization: 'Forgotten Harvest', role: 'Warehouse Crew Volunteer', UserId: 1},
  ]))
  .then(() => console.log(chalk.magenta('Seeding Social Media Accounts')))
  .then(() => SocialMediaAccount.bulkCreate([
    { siteName: 'Twitter', username: 'danyadsmith', profileUrl: 'https://twitter.com/danyadsmith', visible: true, showOnResume: false, UserId: 1},
    { siteName: 'GitHub', username: 'danyadsmith', profileUrl: 'https://github.com/danyadsmith', visible: true, showOnResume: true, UserId: 1},
    { siteName: 'CodePen', username: 'danyadsmith', profileUrl: 'https://codepen.io/danyadsmith/', visible: true, showOnResume: false, UserId: 1},
    { siteName: 'LinkedIn', username: 'danyadsmith', profileUrl: 'https://www.linkedin.com/in/danyadsmith/', visible: true, showOnResume: true, UserId: 1}
  ]))
  .then(() => console.log(chalk.magenta('Seeding Project Types')))
  .then(() => ProjectType.bulkCreate([
    { name: 'Work'},
    { name: 'Open Source'}
  ]))
  .then(() => console.log(chalk.magenta('Seeding Projects')))
  .then(() => Project.bulkCreate([
    {title: 'everyONE.lear.com', role: 'Developer, Administrator', url: '', TypeId: 1, highlights: [
      'Implemented custom branding including an optional responsive web design feature for intranet sites',
      'Developed custom web parts and application pages',
      'Supported site owners with content migrations from legacy enterprise portal'
    ], startDate: '2012-03-01', UserId: 1},
    {title: 'Global Audit Management System', role: 'Developer', url: '', TypeId: 1, highlights: [
      'Discovered, documented and corrected data migration issues in inherited codebase',
      'Reworked front-end web forms and masterpages to enhance UI and UX'
    ], startDate: '2015-05-28', UserId: 1},
    {title: 'ePAD Purchasing Authorization System', role: 'Developer', url: '', TypeId: 1, highlights: [
      'Documented requirements using flowcharts, entity-relationship diagrams, state transition diagrams, swim-lane diagrams, business rules and RASCI charts to facilitate communication and solidify MVP',
      'Designed user interface wireframes and implemented design using CSS grid-based layouts',
      'Created C# business classes and Microsoft SQL Server stored procedures, functions and views',
      'Developed ASP.net masterpages, web forms, dashboards and search features'
    ], startDate: '2011-04-06', endDate: '2011-07-27', UserId: 1},
    {title: 'MyLear Portal', role: 'Developer, Administrator and Architect', url: '', TypeId: 1, highlights: [
      'Managed codebase, feature upgrades and deployment process for over 50 custom ASP.net web parts',
      'Created and deployed portal migration packages and code revisions from DEV to QA and Production',
      'Administered portal security, implemented taxonomy and monitored portal servers and services',
      'Completed two major version upgrades and applied periodic patches and hotfixes'
    ], startDate: '2004-09-01', endDate: '2016-10-20', UserId: 1},
    {title: 'EconClub.org', role: 'Business Analyst', url: 'http://www.econclub.org', TypeId: 1, highlights: [
      'Worked with a team to customize and deploy the iMIS e-Series e-commerce application',
      'Migrated DOS-based membership database to iMIS Membership Management Software'
    ], startDate: '2003-06-02', endDate: '2004-09-01', UserId: 1},
    {title: 'Siren', role: 'Developer', url: '', TypeId: 2, highlights: [
      'Designed database schema and implemented server-side controllers',
      'Created and refactored API Routes to use modular functions to manage complex Promise chains',
      'Wrote integration tests for API routes using Mocha, Chai and supertest'
    ], startDate: '2017-04-04', endDate: '2017-04-28', UserId: 1},
    {title: 'Hydra Travel', role: 'Developer', url: 'http://hydra-travel.herokuapp.com/', TypeId: 2, highlights: [
      'Converted MongoDB schema from an embedded structure to a relational structure using references',
      'Refactored server controllers and API routes to support enhancements and improve code organization',
      'Added server-side configuration for database seeding, debugging and API key organization'
    ], startDate: '2017-03-29', endDate: '2017-04-03', UserId: 1},
    {title: 'Stackets', role: 'Developer', url: 'http://stackets.herokuapp.com/', TypeId: 2, highlights: [
      'Worked with a team to customize and deploy the iMIS e-Series e-commerce application',
      'Migrated DOS-based membership database to iMIS Membership Management Software'
    ], startDate: '2017-03-15', endDate: '2017-03-27', UserId: 1}
  ]))
  .then(() => console.log(chalk.magenta('Seeding Portfolio')))
  .then(() => Portfolio.bulkCreate([
    { title: 'This Cool Thing I Did', image: 'http://via.placeholder.com/450X300', url: 'users/1/blog/1', abstract: 'A brief paragraph that describes the project or process. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat urna a turpis tincidunt consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed enim eu ligula efficitur egestas nec et arcu. Nam ut laoreet eros, nec elementum eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eu erat lobortis, faucibus lacus a, pharetra purus.', UserId: 1, CategoryId: 10},
    { title: 'Another Cool Thing I Did', image: 'http://via.placeholder.com/450X300', url: 'users/1/blog/2', abstract: 'A brief paragraph that describes the project or process. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat urna a turpis tincidunt consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed enim eu ligula efficitur egestas nec et arcu. Nam ut laoreet eros, nec elementum eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eu erat lobortis, faucibus lacus a, pharetra purus.', UserId: 1, CategoryId: 11},
    { title: 'A Really Cool Thing I Did', image: 'http://via.placeholder.com/450X300', url: 'users/1/blog/3', abstract: 'A brief paragraph that describes the project or process. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat urna a turpis tincidunt consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed enim eu ligula efficitur egestas nec et arcu. Nam ut laoreet eros, nec elementum eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eu erat lobortis, faucibus lacus a, pharetra purus.', UserId: 1, CategoryId: 10},
    { title: 'Yet Another Early Project I’m Proud Of', image: 'http://via.placeholder.com/450X300', url: 'users/1/blog/4', abstract: 'A brief paragraph that describes the project or process. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat urna a turpis tincidunt consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed enim eu ligula efficitur egestas nec et arcu. Nam ut laoreet eros, nec elementum eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eu erat lobortis, faucibus lacus a, pharetra purus.', UserId: 1, CategoryId: 11},
    { title: 'Another Early Project I’m Proud Of', image: 'http://via.placeholder.com/450X300', url: 'users/1/blog/5', abstract: 'A brief paragraph that describes the project or process. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat urna a turpis tincidunt consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed enim eu ligula efficitur egestas nec et arcu. Nam ut laoreet eros, nec elementum eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eu erat lobortis, faucibus lacus a, pharetra purus.', UserId: 1, CategoryId: 10},
    { title: 'An Early Project I’m Proud Of', image: 'http://via.placeholder.com/450X300', url: 'users/1/blog/6', abstract: 'A brief paragraph that describes the project or process. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat urna a turpis tincidunt consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed enim eu ligula efficitur egestas nec et arcu. Nam ut laoreet eros, nec elementum eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eu erat lobortis, faucibus lacus a, pharetra purus.', UserId: 1, CategoryId: 9 }
  ]));
};
