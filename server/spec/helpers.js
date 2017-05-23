module.exports = {
  categories: [
    'Programming Languages',
    'Web',
    'Front-end Frameworks',
    'Server-side Frameworks',
    'Databases and ORMs',
    'UX and Design',
    'Project Management',
    'Business Software',
    'Other'
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
    'Web Standards'
  ],
  skillUpdates: [
    'JavaScript'
  ]
}
