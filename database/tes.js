const sembarang = require("sequelize");
const env = require("../helper/env");

const db = new sembarang(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
    dialect: 'postgres',
    host: env.DB_HOST,
});

module.exports = db;