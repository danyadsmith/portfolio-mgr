const chalk     = require('chalk');
const config    = require('../config');
const Sequelize = require('sequelize');
const db        = new Sequelize(config.db.database, config.db.user, config.db.password, { host: config.db.host, dialect: config.db.dialect, logging: config.log.debug });

var Skill = db.define('Skill', {
  name: Sequelize.STRING,
  expertise: Sequelize.BOOLEAN
});

var Category = db.define('Category', {
  name: {type: Sequelize.STRING, unique: true}
});

var Credential = db.define('Credential', {
  organization: Sequelize.STRING,
  school: Sequelize.STRING,
  credential: Sequelize.STRING,
  major: Sequelize.STRING,
  minor: Sequelize.STRING,
  dateCompleted: Sequelize.DATE,
  visible: Sequelize.BOOLEAN
});

var Job = db.define('Job', {
  employer: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  jobTitle: Sequelize.STRING,
  startDate: Sequelize.DATE,
  endDate: Sequelize.DATE,
  logoImage: Sequelize.STRING
});

var Project = db.define('Project', {
  title: Sequelize.STRING,
  role: Sequelize.STRING,
  url: Sequelize.STRING,
  highlights: Sequelize.ARRAY(Sequelize.TEXT),
  startDate: Sequelize.DATE,
  endDate: Sequelize.DATE
});

var ProjectType = db.define('ProjectType', {
  name: Sequelize.STRING
});

var CommunityService = db.define('CommunityService', {
  organization: Sequelize.STRING,
  role: Sequelize.STRING
});

var SocialMediaAccount = db.define('SocialMediaAccount', {
  siteName: Sequelize.STRING,
  username: Sequelize.STRING,
  profileUrl: Sequelize.STRING,
  visible: Sequelize.BOOLEAN,
  showOnResume: Sequelize.BOOLEAN
});

var Portfolio = db.define('Portfolio', {
  title: Sequelize.STRING,
  image: Sequelize.STRING,
  url: Sequelize.STRING,
  abstract: Sequelize.STRING
});

var Blog = db.define('Blog', {
  title: Sequelize.STRING,
  body: Sequelize.TEXT,
  published: Sequelize.BOOLEAN,
  datePublished: Sequelize.DATE,
  mediumUrl: Sequelize.STRING
});

var BlogCategory = db.define('BlogCategory', {
  BlogId: Sequelize.INTEGER,
  CategoryId: Sequelize.INTEGER
});

var User = db.define('User', {
  firstName: Sequelize.STRING,
  middleName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  displayName: Sequelize.STRING,
  address1: Sequelize.STRING,
  address2: Sequelize.STRING,
  city: Sequelize.STRING,
  stateProvince: Sequelize.STRING,
  country: Sequelize.STRING,
  postalCode: Sequelize.STRING,
  location: Sequelize.STRING,
  phone: Sequelize.STRING,
  email: Sequelize.STRING,
  photoUrl: Sequelize.STRING,
  desiredJobTitle: Sequelize.STRING,
  acceptingFreelanceWork: Sequelize.BOOLEAN,
  seekingNewOpportunities: Sequelize.BOOLEAN,
  willingToRelocate: Sequelize.BOOLEAN,
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

var Setting = db.define('Setting', {
  hideEmail: Sequelize.BOOLEAN,
  hidePhone: Sequelize.BOOLEAN,
  hideAddress: Sequelize.BOOLEAN,
  hideLocation: Sequelize.BOOLEAN,
  enableContactForm: Sequelize.BOOLEAN,
  enableResumeModule: Sequelize.BOOLEAN,
  enablePortfolioModule: Sequelize.BOOLEAN,
  enableBlogModule: Sequelize.BOOLEAN,
  enableSignup: Sequelize.BOOLEAN
});

Category.belongsToMany(Blog, {through: BlogCategory, onDelete: 'CASCADE'});
Skill.belongsTo(Category, {as: 'category', foreignKey: 'CategoryId'});
Blog.belongsTo(User, {as: 'user', foreignKey: 'UserId'});
Skill.belongsTo(User, {as: 'user', foreignKey: 'UserId'});
Credential.belongsTo(User, {as: 'user', foreignKey: 'UserId'});
Job.belongsTo(User, {as: 'user', foreignKey: 'UserId'});
Project.belongsTo(User, {as: 'user', foreignKey: 'UserId'});
CommunityService.belongsTo(User, {as: 'user', foreignKey: 'UserId'});
SocialMediaAccount.belongsTo(User, {as: 'user', foreignKey: 'UserId'});
Portfolio.belongsTo(User, {as: 'user', foreignKey: 'UserId'});
Portfolio.belongsTo(Category, {as: 'category', foreignKey: 'CategoryId'});
Blog.belongsTo(User, {as: 'user', foreignKey: 'UserId'});
Project.belongsTo(ProjectType, {as: 'type', foreignKey: 'TypeId'});

db.sync({force: config.db.sync}).then(function () {
  if (config.log.info) {
    console.log(chalk.green('Connected to the ' + config.env + ' database: ' +
      config.db.database));
  }
  return null;
}).catch(function (error) {
  console.error(chalk.red(error.message));
});

module.exports = {
  db: db,
  Sequelize: Sequelize,
  User: User,
  Category: Category,
  Skill: Skill,
  Credential: Credential,
  Job: Job,
  Project: Project,
  ProjectType: ProjectType,
  CommunityService: CommunityService,
  SocialMediaAccount: SocialMediaAccount,
  Portfolio: Portfolio,
  Blog: Blog,
  BlogCategory: BlogCategory,
  Setting: Setting
};
