'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgres');

const Users = sequelize.define('Users', {  
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    defaultValue: 0,
    allowNull: false,
  },
});

module.exports = Users;
