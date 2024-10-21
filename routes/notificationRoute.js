const express = require('express');
const router = express.Router();
const {registerToken, sendPushNotifications} = require('../controllers/notificationController');

router.post('/register', registerToken);
router.post('/notify', async (req, res) => {
    try {
      await sendPushNotifications();
      res.status(200).send('Notifications sent successfully');
    } catch (error) {
      console.error('Failed to send notifications:', error);
      res.status(500).send('Error sending notifications');
    }
  });

module.exports = router;
