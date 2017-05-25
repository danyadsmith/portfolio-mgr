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
    {CategoryId: 2, name: 'CSS', expertise: 1}
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
