module.exports = {
  url: 'http://localhost',
  log: {
    debug: false,
    info: false
  },
  db: {
    name: 'portfolio_mgr',
    url: process.env.DATABASE_URL,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PWD
  }
};
