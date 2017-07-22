module.exports = {
  url: '',
  log: {
    debug: false,
    info: false
  },
  db: {
    dialect  : 'postgres',
    host     : process.env.DATABASE_URL,
    user     : process.env.DATABASE_USER,
    password : process.env.DATABASE_PWD,
    database : process.env.DATABASE_NAME,
    sync     : true
  },
  twilio: {
    account_sid: process.env.TWILIO_SID,
    auth_token: process.env.TWILIO_AUTH,
    account_phone: process.env.TWILIO_PHONE,
    user_phone: process.env.USER_PHONE
  }
};
