module.exports = {
  url: 'http://localhost',
  log: {
    debug    : false,
    info     : false
  },
  db: {
    dialect  : 'postgres',
    host     : process.env.DATABASE_URL,
    user     : process.env.DATABASE_USER,
    password : process.env.DATABASE_PWD,
    database : process.env.DATABASE_NAME,
    sync     : false
  }
};
