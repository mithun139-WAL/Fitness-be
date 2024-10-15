const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize({
  database: process.env.POSTGRES_DB, 
  username: process.env.POSTGRES_USER, 
  password: process.env.POSTGRES_PASSWORD, 
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: console.log,
});

const connectPostgres = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to PostgreSQL has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, connectPostgres };
