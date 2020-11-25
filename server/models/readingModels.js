const { Pool } = require("pg");

const pool = new Pool({
  host: 'postgres',
  port: 5432,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
