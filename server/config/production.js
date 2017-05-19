module.exports = {
  url: '',
  log: {
    debug: false,
    info: false
  },
  db: {
    dialect  : 'pg',
    host     : process.env.DATABASE_URL,
    user     : process.env.POSTGRES_USER,
    password : process.env.POSTGRES_PWD,
    database : process.env.DATABASE_NAME,
    sync     : true
  }
};
