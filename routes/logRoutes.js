const express = require("express");

const router = express.Router();
const {
  getLogs,
  createLog,
  deleteLog,
} = require("../controllers/exerciseLogController");

const {getGoals, createGoal, deleteGoal} = require("../controllers/goalController");
const {getprogress, setProgress} = require("../controllers/progressController");

router.get("/exerciseLogs", getLogs);
router.post("/exerciseLogs", createLog);
router.delete("/exerciseLogs/:id", deleteLog);

router.get("/goals", getGoals);
router.post("/goals", createGoal);
router.delete("/goals/:id", deleteGoal);

router.get("/progress", getprogress);
router.post("/progress", setProgress);

module.exports = router;
