"use strict";

require('dotenv').config();

module.exports = {
  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },
  development: {
    username: 'ke-william',
    password: null,
    database: 'myblog',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'ke-william',
    password: null,
    database: 'myblog_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
//# sourceMappingURL=config.js.map