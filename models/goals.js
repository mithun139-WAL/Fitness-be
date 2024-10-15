const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgres');

const Goals = sequelize.define('Goals', {  
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
  target: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  progress: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
});

module.exports = Goals;
