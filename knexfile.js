const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.APP_DB_HOST,
      user: process.env.APP_DB_USERNAME,
      password: process.env.APP_DB_PASSWORD,
      database: process.env.APP_DB_NAME,
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
