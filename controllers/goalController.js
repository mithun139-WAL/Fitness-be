const Goal = require('../models/goals');
const Log = require('../models/log');

exports.getGoals = async (req, res) => {
  try {
    const goals = await Goal.findAll();
    res.json(goals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.createGoal = async (req, res) => {
  try {
    const goal = await Goal.create(req.body);
    await Log.create({ action: 'Goal Created' });
    console.log("Goal created");
    res.status(201).json(goal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteGoal = async (req, res) => {
  try {
    const goalId = await Goal.findByPk(req.params.id);
    if (goalId) {
      await goalId.destroy();
      await Log.create({ action: 'Goal Deleted' });
      res.json({ message: 'Goal deleted successfully' });
    } else {
      res.status(404).json({ error: 'Goal not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
