require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    host_mysql: process.env.HOST_MYSQL,
    user_mysql: process.env.USER_MYSQ,
    password_mysql: process.env.PASSWORD_MYSQ,
    database_mysql: process.env.DATABASE_MYSQ
}

module.exports = { config } 