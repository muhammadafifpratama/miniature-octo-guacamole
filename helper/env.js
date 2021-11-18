const dotenv = require("dotenv");

dotenv.config();

const env = {
    PORT: process.env.port,
    DB_NAME: process.env.db_name,
    DB_USERNAME: process.env.db_username,
    DB_PASSWORD: process.env.db_password,
    DB_HOST: process.env.host,
    tes: process.env,
    SECRETWORD: process.env.SECRETWORD,
    JWTSECRET: process.env.JWTSECRET,
    EXPIRES_TIME: process.env.EXPIRES_TIME
};
module.exports = env;