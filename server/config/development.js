module.exports = {
  url: 'http://localhost',
  log: {
    debug    : false,
    info     : true
  },
  db: {
    dialect  : 'pg',
    host     : process.env.DATABASE_URL,
    user     : process.env.POSTGRES_USER,
    password : process.env.POSTGRES_PWD,
    database : 'portfolio_mgr'
    sync     : true;
};
