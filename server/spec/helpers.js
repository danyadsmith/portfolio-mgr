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
    {CategoryId: 1, name: 'C#', expertise: 1},
    {CategoryId: 1, name: 'Java', expertise: 1},
    {CategoryId: 1, name: 'Ruby', expertise: 0},
    {CategoryId: 2, name: 'HTML', expertise: 1},
    {CategoryId: 2, name: 'CSS', expertise: 1},
    {CategoryId: 2, name: 'SASS', expertise: 1},
    {CategoryId: 2, name: 'SCSS', expertise: 1},
    {CategoryId: 2, name: 'SVG', expertise: 0},
    {CategoryId: 2, name: 'XML', expertise: 1},
    {CategoryId: 2, name: 'XSLT', expertise: 1},
    {CategoryId: 3, name: 'Angular', expertise: 0},
    {CategoryId: 3, name: 'AngularJS', expertise: 1},
    {CategoryId: 3, name: 'Bootstrap', expertise: 1},
    {CategoryId: 3, name: 'jQuery', expertise: 1},
    {CategoryId: 3, name: 'KnockoutJS', expertise: 0},
    {CategoryId: 3, name: 'React', expertise: 0},
    {CategoryId: 3, name: 'Underscore', expertise: 1},
    {CategoryId: 4, name: 'ASP.net', expertise: 1},
    {CategoryId: 4, name: 'ASP.net MVC', expertise: 0},
    {CategoryId: 4, name: 'PHP', expertise: 0},
    {CategoryId: 4, name: 'Ruby on Rails', expertise: 1},
    {CategoryId: 5, name: 'NodeJS', expertise: 1},
    {CategoryId: 5, name: 'Express', expertise: 1},
    {CategoryId: 5, name: 'Unix/Bash', expertise: 1},
    {CategoryId: 5, name: 'IIS', expertise: 1},
    {CategoryId: 5, name: 'Powershell', expertise: 0},
    {CategoryId: 5, name: 'Microsoft SQL Server', expertise: 1},
    {CategoryId: 5, name: 'MySQL', expertise: 1},
    {CategoryId: 5, name: 'SQLite3', expertise: 1},
    {CategoryId: 5, name: 'PostgreSQL', expertise: 1},
    {CategoryId: 5, name: 'MongoDB', expertise: 0},
    {CategoryId: 5, name: 'Firebase', expertise: 0},
    {CategoryId: 5, name: 'Mongoose', expertise: 0},
    {CategoryId: 5, name: 'Sequelize', expertise: 1},
    {CategoryId: 6, name: 'Adobe Creative Cloud', expertise: 1},
    {CategoryId: 6, name: 'Balsamiq Mockups', expertise: 1},
    {CategoryId: 6, name: 'Sketch', expertise: 0},
    {CategoryId: 7, name: 'Git', expertise: 1},
    {CategoryId: 7, name: 'Microsoft Project', expertise: 1},
    {CategoryId: 7, name: 'Redmine', expertise: 1},
    {CategoryId: 7, name: 'TargetProcess', expertise: 0},
    {CategoryId: 7, name: 'Trello', expertise: 1},
    {CategoryId: 7, name: 'Waffle.io', expertise: 1},
    {CategoryId: 7, name: 'ZenHub', expertise: 0},
    {CategoryId: 8, name: 'Microsoft Office/Office365', expertise: 1},
    {CategoryId: 8, name: 'Visio', expertise: 1},
    {CategoryId: 8, name: 'SharePoint', expertise: 1},
    {CategoryId: 9, name: 'Agile/SCRUM', expertise: 0},
    {CategoryId: 9, name: 'BDD', expertise: 0},
    {CategoryId: 9, name: 'Meeting Facilitation', expertise: 1},
    {CategoryId: 9, name: 'Requirements Gathering', expertise: 1},
    {CategoryId: 9, name: 'TDD', expertise: 0},
    {CategoryId: 9, name: 'Technical Writing', expertise: 1}
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
  ]
};
