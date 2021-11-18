const Pool = require('pg').Pool
const env = require("../helper/env");
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
})