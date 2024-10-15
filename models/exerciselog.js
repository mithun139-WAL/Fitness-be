const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/postgres");

const ExerciseLog = sequelize.define("ExerciseLog", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  muscle: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  exercise: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sets: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reps: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = ExerciseLog;
