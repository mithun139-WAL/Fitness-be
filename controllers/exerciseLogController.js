const ExerciseLog = require('../models/exerciselog');
const Log = require('../models/log');

exports.getLogs = async (req, res) => {
  try {
    const logs = await ExerciseLog.findAll();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.createLog = async (req, res) => {
  try {
    const exerciseLog = await ExerciseLog.create(req.body);
    await Log.create({ action: 'Exercise Created' });
    console.log("Exercise created");
    res.status(201).json(exerciseLog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteLog = async (req, res) => {
  try {
    const exerciseId = await ExerciseLog.findByPk(req.params.id);
    if (exerciseId) {
      await exerciseId.destroy();
      await Log.create({ action: 'Exercise Deleted' });
      res.json({ message: 'Exercise deleted successfully' });
    } else {
      res.status(404).json({ error: 'Exercise not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
