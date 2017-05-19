module.exports = {
  url: '',
  log: {
    debug: false,
    info: false
  },
  db: {
    name: process.env.DATABASE_NAME,
    url: process.env.DATABASE_URL,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PWD
  }
};
