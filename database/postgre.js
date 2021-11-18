const { Sequelize } = require("sequelize");
// const sembarang = require("sequelize");
const env = require("../helper/env");

const db = new Sequelize(env.DB_NAME, env.DB_USERNAME, env.DB_PASSWORD, {
    dialect: 'postgres',
    host: env.DB_HOST,
});

module.exports = db;