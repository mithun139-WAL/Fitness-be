const Progress = require('../models/progress');
const Log = require('../models/log');

exports.getprogress = async (req, res) => {
  try {
    const progressData = await Progress.findAll();
    res.json(progressData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.setProgress = async (req, res) => {
  try {
    const progress = await Progress.create(req.body);
    await Log.create({ action: 'Progress Created' });
    console.log("Progress created");
    res.status(201).json(progress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};