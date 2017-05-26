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
    {name: 'Other'}
  ],
  skills: [
    {category: {id: 1}, name: 'C#', expertise: 1},
    {category: {id: 1}, name: 'Java', expertise: 1},
    {category: {id: 1}, name: 'Ruby', expertise: 0},
    {category: {id: 2}, name: 'HTML', expertise: 1},
    {category: {id: 2}, name: 'CSS', expertise: 1},
    {category: {id: 2}, name: 'SASS', expertise: 1},
    {category: {id: 2}, name: 'SCSS', expertise: 1},
    {category: {id: 2}, name: 'SVG', expertise: 0},
    {category: {id: 2}, name: 'XML', expertise: 1},
    {category: {id: 2}, name: 'XSLT', expertise: 1},
    {category: {id: 3}, name: 'Angular', expertise: 0},
    {category: {id: 3}, name: 'AngularJS', expertise: 1},
    {category: {id: 3}, name: 'Bootstrap', expertise: 1},
    {category: {id: 3}, name: 'jQuery', expertise: 1},
    {category: {id: 3}, name: 'KnockoutJS', expertise: 0},
    {category: {id: 3}, name: 'React', expertise: 0},
    {category: {id: 3}, name: 'Underscore', expertise: 1},
    {category: {id: 4}, name: 'ASP.net', expertise: 1},
    {category: {id: 4}, name: 'ASP.net MVC', expertise: 0},
    {category: {id: 4}, name: 'PHP', expertise: 0},
    {category: {id: 4}, name: 'Ruby on Rails', expertise: 1},
    {category: {id: 5}, name: 'NodeJS', expertise: 1},
    {category: {id: 5}, name: 'Express', expertise: 1},
    {category: {id: 5}, name: 'Unix/Bash', expertise: 1},
    {category: {id: 5}, name: 'IIS', expertise: 1},
    {category: {id: 5}, name: 'Powershell', expertise: 0},
    {category: {id: 5}, name: 'Microsoft SQL Server', expertise: 1},
    {category: {id: 5}, name: 'MySQL', expertise: 1},
    {category: {id: 5}, name: 'SQLite3', expertise: 1},
    {category: {id: 5}, name: 'PostgreSQL', expertise: 1},
    {category: {id: 5}, name: 'MongoDB', expertise: 0},
    {category: {id: 5}, name: 'Firebase', expertise: 0},
    {category: {id: 5}, name: 'Mongoose', expertise: 0},
    {category: {id: 5}, name: 'Sequelize', expertise: 1},
    {category: {id: 6}, name: 'Adobe Creative Cloud', expertise: 1},
    {category: {id: 6}, name: 'Balsamiq Mockups', expertise: 1},
    {category: {id: 6}, name: 'Sketch', expertise: 0},
    {category: {id: 7}, name: 'Git', expertise: 1},
    {category: {id: 7}, name: 'Microsoft Project', expertise: 1},
    {category: {id: 7}, name: 'Redmine', expertise: 1},
    {category: {id: 7}, name: 'TargetProcess', expertise: 0},
    {category: {id: 7}, name: 'Trello', expertise: 1},
    {category: {id: 7}, name: 'Waffle.io', expertise: 1},
    {category: {id: 7}, name: 'ZenHub', expertise: 0},
    {category: {id: 8}, name: 'Microsoft Office/Office365', expertise: 1},
    {category: {id: 8}, name: 'Visio', expertise: 1},
    {category: {id: 8}, name: 'SharePoint', expertise: 1},
    {category: {id: 9}, name: 'Agile/SCRUM', expertise: 0},
    {category: {id: 9}, name: 'BDD', expertise: 0},
    {category: {id: 9}, name: 'Meeting Facilitation', expertise: 1},
    {category: {id: 9}, name: 'Requirements Gathering', expertise: 1},
    {category: {id: 9}, name: 'TDD', expertise: 0},
    {category: {id: 9}, name: 'Technical Writing', expertise: 1}
  ],
  blogs: [
    {title: 'From SQL to NoSQL: Getting Started with MongoDB', published: false, user: {id: 1}},
    {title: 'Implementing CRUD Operations with Sequelize', published: false, user: {id: 1}},
    {title: 'Grid-Based Web Design: A History', published: false, user: {id: 1}},
    {title: 'Color Management Strategies in Sass', published: true, datePublished:'2017-05-21', user: {id: 1}},
    {title: 'Managing Environment Variables in Node.js', published: true, datePublished:'2017-04-21', user: {id: 1}}
  ],
  credentials: [
    {organization: 'Oakland University', school: 'School of Business Administration',credential: 'Bachelor of Arts', major: 'Management Information Systems', minor: 'Applied Technology in Business', dateCompleted: '2003-04-26'},
    {organization: 'Hack Reactor', school: 'Remote', credential: 'Advanced Software Engineering Immersive Program', dateCompleted: '2017-05-06'},
    {organization: 'Bloc', school: 'Remote', credential: 'Full Stack Developer Track', dateCompleted: '2017-07-06'}
  ],
  jobs: [
    { employer: 'Lear Corporation', city: 'Southfield', state: 'MI', jobTitle: 'Enterprise Portal Developer, Administrator and UX Designer', startDate: '2003-06-02', logoImage: '' },
    { employer: 'Metaldyne', city: 'Plymouth', state: 'MI', jobTitle: 'Web Development Intern', startDate: '2002-05-01', endDate: '2003-03-01', logoImage: '' },
    { employer: 'Oakland University', city: 'Rochester Hills', state: 'MI', jobTitle: 'Entrepreneurship Institute Assistant', startDate: '2001-02-01', endDate: '2001-09-01', logoImage: '' },
    { employer: 'Management Systems, Inc.', city: 'Detroit', state: 'MI', jobTitle: 'Director, Computer Learning Center', startDate: '1997-06-01', endDate: '2000-08-01', logoImage: '' },
    { employer: 'Management Systems, Inc.', city: 'Detroit', state: 'MI', jobTitle: 'Director, Computer Learning Center', startDate: '1997-06-01', endDate: '2000-08-01', logoImage: '' }
  ],
  users: [
    {
      firstName: 'Danya',
      middleName: 'D.',
      lastName: 'Smith',
      username: 'danyadsmith',
      password: 'password'
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
  blogUpdates: [
    {title: 'From SQL to NoSQL: Getting Started with MongoDB and Mongoose'}
  ],
  credentialUpdates: [
    { credential: 'Bachelor of Science'}
  ],
  jobUpdates: [
    { employer: 'American Axle & Manufacturing (AAM)'}
  ]
};
