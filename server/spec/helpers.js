module.exports = {
  authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE0NDAwLCJkYXRhIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImRhbnlhZHNtaXRoIiwicGFzc3dvcmQiOiIkMmEkMTAkemkzUFhJVFRHdlp6aU82NHRzS3VidTg0QzZ5ZGpGLkZMbUlMdXczTHhYa2M5OFdmejdJenEiLCJ1cGRhdGVkQXQiOiIyMDE3LTA1LTI0VDE2OjIzOjM0LjY5MVoiLCJjcmVhdGVkQXQiOiIyMDE3LTA1LTI0VDE2OjIzOjM0LjY5MVoiLCJmaXJzdE5hbWUiOm51bGwsIm1pZGRsZU5hbWUiOm51bGwsImxhc3ROYW1lIjpudWxsLCJhZGRyZXNzMSI6bnVsbCwiYWRkcmVzczIiOm51bGwsImNpdHkiOm51bGwsInN0YXRlUHJvdmluY2UiOm51bGwsImNvdW50cnkiOm51bGwsInBvc3RhbENvZGUiOm51bGwsImxvY2F0aW9uIjpudWxsLCJwaG9uZSI6bnVsbCwiZW1haWwiOm51bGwsInBob3RvVXJsIjpudWxsfSwiaWF0IjoxNDk1NjQzMDE0fQ.LVVxqpos4ICYh7-PV4Y1S8HVb4R9QNT6FzaDiUFCQrQ',
  categories: [
    {name: 'Programming Languages'},
    {name: 'Web'},
    {name: 'Front-end Frameworks'},
    {name: 'Server-side Frameworks'},
    {name: 'Databases and ORMs'},
    {name: 'UX and Design'},
    {name: 'Project Management'},
    {name: 'Business Software'},
    {name: 'Other'},
    {name: 'Content Management Systems'},
    {name: 'Code'},
    {name: 'Content'},
    {name: 'Resources'}
  ],
  skills: [
    {UserId: 1, CategoryId: 1, name: 'C#', expertise: 1},
    {UserId: 1, CategoryId: 1, name: 'Java', expertise: 1},
    {UserId: 1, CategoryId: 2, name: 'HTML', expertise: 1},
    {UserId: 1, CategoryId: 2, name: 'CSS', expertise: 1},
    {UserId: 1, CategoryId: 3, name: 'Angular', expertise: 0},
    {UserId: 1, CategoryId: 3, name: 'React', expertise: 0},
    {UserId: 1, CategoryId: 4, name: 'ASP.net', expertise: 1},
    {UserId: 1, CategoryId: 4, name: 'Ruby on Rails', expertise: 1},
    {UserId: 1, CategoryId: 5, name: 'PostgreSQL', expertise: 1},
    {UserId: 1, CategoryId: 5, name: 'MongoDB', expertise: 0},
    {UserId: 1, CategoryId: 6, name: 'Balsamiq Mockups', expertise: 1},
    {UserId: 1, CategoryId: 6, name: 'Sketch', expertise: 0},
    {UserId: 1, CategoryId: 7, name: 'Git', expertise: 1},
    {UserId: 1, CategoryId: 7, name: 'Microsoft Project', expertise: 1},
    {UserId: 1, CategoryId: 8, name: 'Microsoft Office/Office365', expertise: 1},
    {UserId: 1, CategoryId: 8, name: 'Visio', expertise: 1},
    {UserId: 1, CategoryId: 9, name: 'Agile/SCRUM', expertise: 0},
    {UserId: 1, CategoryId: 9, name: 'BDD', expertise: 0}
  ],
  blogs: [
    {title: 'From SQL to NoSQL: Getting Started with MongoDB', published: true, UserId: 1},
    {title: 'Implementing CRUD Operations with Sequelize', published: true, UserId: 1},
    {title: 'Grid-Based Web Design: A History', published: true, UserId: 1},
    {title: 'Color Management Strategies in Sass', published: false, datePublished:'2017-05-21', UserId: 1},
    {title: 'Managing Environment Variables in Node.js', published: true, datePublished:'2017-04-21', UserId: 1}
  ],
  blogCategories: [
    { BlogId: 2, CategoryId: 5 },
    { BlogId: 3, CategoryId: 6 },
    { BlogId: 5, CategoryId: 13 }
  ],
  credentials: [
    {organization: 'Oakland University', school: 'School of Business Administration',credential: 'Bachelor of Arts', major: 'Management Information Systems', minor: 'Applied Technology in Business', dateCompleted: '2003-04-26', UserId: 1, visible: true},
    {organization: 'Hack Reactor', school: 'Remote', credential: 'Advanced Software Engineering Immersive Program', dateCompleted: '2017-05-06', UserId: 1, visible: true},
    {organization: 'Bloc', school: 'Remote', credential: 'Full Stack Developer Track', dateCompleted: '2017-07-06', UserId: 1, visible: true}
  ],
  jobs: [
    { employer: 'Lear Corporation', city: 'Southfield', state: 'MI', jobTitle: 'Enterprise Portal Developer, Administrator and UX Designer', startDate: '2003-06-02', logoImage: '', UserId: 1 },
    { employer: 'Metaldyne', city: 'Plymouth', state: 'MI', jobTitle: 'Web Development Intern', startDate: '2002-05-01', endDate: '2003-03-01', logoImage: '', UserId: 1 },
    { employer: 'Oakland University', city: 'Rochester Hills', state: 'MI', jobTitle: 'Entrepreneurship Institute Assistant', startDate: '2001-02-01', endDate: '2001-09-01', logoImage: '', UserId: 1 },
    { employer: 'Management Systems, Inc.', city: 'Detroit', state: 'MI', jobTitle: 'Director, Computer Learning Center', startDate: '1997-06-01', endDate: '2000-08-01', logoImage: '', UserId: 1 }
  ],
  projectTypes: [
    { name: 'Work'},
    { name: 'Open Source'},
    { name: 'Community Service'}
  ],
  projects: [
    {title: 'everyONE.lear.com', role: 'Developer, Administrator', url: '', TypeId: 1, UserId: 1, highlights: [
      'Implemented custom branding including an optional responsive web design feature for intranet sites',
      'Developed custom web parts and application pages',
      'Supported site owners with content migrations from legacy enterprise portal'
    ], startDate: '2012-03-01'},
    {title: 'Global Audit Management System', role: 'Developer', url: '', TypeId: 1, UserId: 1, highlights: [
      'Discovered, documented and corrected data migration issues in inherited codebase',
      'Reworked front-end web forms and masterpages to enhance UI and UX'
    ], startDate: '2015-05-28'},
    {title: 'ePAD Purchasing Authorization System', role: 'Developer', url: '', TypeId: 1, UserId: 1, highlights: [
      'Documented requirements using flowcharts, entity-relationship diagrams, state transition diagrams, swim-lane diagrams, business rules and RASCI charts to facilitate communication and solidify MVP',
      'Designed user interface wireframes and implemented design using CSS grid-based layouts',
      'Created C# business classes and Microsoft SQL Server stored procedures, functions and views',
      'Developed ASP.net masterpages, web forms, dashboards and search features'
    ], startDate: '2011-04-06', endDate: '2011-07-27'},
    {title: 'MyLear Portal', role: 'Developer, Administrator and Architect', url: '', TypeId: 1, UserId: 1, highlights: [
      'Managed codebase, feature upgrades and deployment process for over 50 custom ASP.net web parts',
      'Created and deployed portal migration packages and code revisions from DEV to QA and Production',
      'Administered portal security, implemented taxonomy and monitored portal servers and services',
      'Completed two major version upgrades and applied periodic patches and hotfixes'
    ], startDate: '2004-09-01', endDate: '2016-10-20'},
    {title: 'EconClub.org', role: 'Business Analyst', url: 'http://www.econclub.org', TypeId: 1, UserId: 1, highlights: [
      'Worked with a team to customize and deploy the iMIS e-Series e-commerce application',
      'Migrated DOS-based membership database to iMIS Membership Management Software'
    ], startDate: '2003-06-02', endDate: '2004-09-01'},
    {title: 'Siren', role: 'Developer', TypeId: 2, UserId: 1, highlights: [
      'Designed database schema and implemented server-side controllers',
      'Created and refactored API Routes to use modular functions to manage complex Promise chains',
      'Wrote integration tests for API routes using Mocha, Chai and supertest'
    ], startDate: '2017-04-04', endDate: '2017-04-28'},
    {title: 'Hydra Travel', role: 'Developer', url: 'http://hydra-travel.herokuapp.com/', TypeId: 2, UserId: 1, highlights: [
      'Converted MongoDB schema from an embedded structure to a relational structure using references',
      'Refactored server controllers and API routes to support enhancements and improve code organization',
      'Added server-side configuration for database seeding, debugging and API key organization'
    ], startDate: '2017-03-29', endDate: '2017-04-03'},
    {title: 'Stackets', role: 'Developer', url: 'http://stackets.herokuapp.com/', TypeId: 2, UserId: 1, highlights: [
      'Worked with a team to customize and deploy the iMIS e-Series e-commerce application',
      'Migrated DOS-based membership database to iMIS Membership Management Software'
    ], startDate: '2017-03-15', endDate: '2017-03-27'}
  ],
  services: [
    {organization: 'Metro Detroit Free Code Camp', role: 'Founder, Meetup Organizer', UserId: 1},
    {organization: 'Tutormate', role: 'Tutor', UserId: 1},
    {organization: 'Forgotten Harvest', role: 'Warehouse Crew Volunteer', UserId: 1},
  ],
  profiles: [
    { siteName: 'Twitter', username: 'danyadsmith', profileUrl: 'https://twitter.com/danyadsmith', visible: true, UserId: 1},
    { siteName: 'GitHub', username: 'danyadsmith', profileUrl: 'https://github.com/danyadsmith', visible: true, UserId: 1},
    { siteName: 'CodePen', username: 'danyadsmith', profileUrl: 'https://codepen.io/danyadsmith/', visible: true, UserId: 1},
    { siteName: 'LinkedIn', username: 'danyadsmith', profileUrl: 'https://www.linkedin.com/in/danyadsmith/', visible: true, UserId: 1}
  ],
  portfolios: [
    { image: 'photo01.png', url: 'http://localhost:3000/portfolios/1', UserId: 1 },
    { image: 'photo02.png', url: 'http://localhost:3000/portfolios/2', UserId: 1 },
    { image: 'photo03.png', url: 'http://localhost:3000/portfolios/3', UserId: 1 },
    { image: 'photo04.png', url: 'http://localhost:3000/portfolios/4', UserId: 1 }
  ],
  messages: [
    { name: 'John Doe', email: 'jdoe@mail.com', subject: 'Seeking Developer for XYZ Team', message: 'Noticed your profile on LinkedIn and checked out your portfolio. Looking to hire a developer for xyz team. It would be a contract to hire position. Would love to schedule a time to talk. Can you send me an e-mail to let me know if you are interested in communicating further about this position?'}
  ],
  users: [
    {
      firstName: 'Danya',
      middleName: 'B.',
      lastName: 'Smith',
      username: 'danyadsmith',
      password: 'password'
    },
    {
      firstName: 'The',
      middleName: 'Good',
      lastName: 'Developer',
      username: 'administrator',
      password: 'supersecret'
    },
    {
      firstName: 'A.',
      middleName: 'Guest',
      lastName: 'User',
      username: 'guest',
      password: 'sortasecret'
    }
  ],
  badUsers: [
    {
      username: 'baduser',
      password: 'password'
    },
    {
      username: 'danyadsmith',
      password: 'badpassword'
    },
    {
      username: '',
      password: ''
    },
  ],
  categoryUpdates: [
    {name: 'Web Standards'}
  ],
  skillUpdates: [
    {name: 'JavaScript'}
  ],
  typeUpdates: [
    {name: 'Work Project'}
  ],
  blogUpdates: [
    {title: 'From SQL to NoSQL: Getting Started with MongoDB and Mongoose'}
  ],
  credentialUpdates: [
    { credential: 'Bachelor of Science'}
  ],
  jobUpdates: [
    { employer: 'American Axle & Manufacturing (AAM)'}
  ],
  profileUpdates: [
    { visible: false }
  ],
  portfolioUpdates: [
    {image: 'portfolio01.jpg'}
  ],
  projectUpdates: [
    {endDate: '2017-09-01'}
  ],
  serviceUpdates: [
    {organization: 'DevStudy.group'}
  ],
  userUpdates: [
    {middleName: 'D.'}
  ]
};
