const { Sequelize, DataTypes } = require('sequelize');
const { sequelize } = require('../config/postgres');
const ExerciseLog = require('./exerciselog');

const Progress = sequelize.define('Progress', {  
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  totalWeight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalReps: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  exerciseLogId: {
    type: DataTypes.INTEGER,
    references: {
      model: ExerciseLog,
      key: 'id',
    },
    onDelete: 'CASCADE',
  },
});

Progress.belongsTo(ExerciseLog, { foreignKey: 'exerciseLogId' });
ExerciseLog.hasMany(Progress, { foreignKey: 'exerciseLogId' });

module.exports = Progress;
