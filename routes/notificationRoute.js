const express = require("express");
const router = express.Router();
const {
  registerToken,
  sendPushNotifications,
} = require("../controllers/notificationController");

router.post("/register", registerToken);
router.post("/notify", async (req, res) => {
  try {
    const response = await sendPushNotifications();
    res
      .status(200)
      .json({ message: "Notifications sent successfully", response });
  } catch (error) {
    console.error("Failed to send notifications:", error);
    res.status(500).send("Error sending notifications");
  }
});

module.exports = router;
