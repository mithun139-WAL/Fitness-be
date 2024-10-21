const { Expo } = require('expo-server-sdk');

let pushTokens = [];

const registerToken = (req, res) => {
  const { token } = req.body;
  if (Expo.isExpoPushToken(token)) {
    pushTokens.push(token);
    console.log(`Token registered: ${token}`);
    return res.sendStatus(200);
  } else {
    console.error(`Invalid Expo push token: ${token}`);
    return res.sendStatus(400);
  }
};

const sendPushNotifications = async () => {
  const messages = pushTokens.map(token => ({
    to: token,
    sound: 'default',
    title: 'Reminder!',
    body: 'Don’t forget to check your workouts!',
    data: { someData: 'goes here' },
  }));

  const expo = new Expo();
  const chunks = expo.chunkPushNotifications(messages);
  for (const chunk of chunks) {
    try {
      let receipts = await expo.sendPushNotificationsAsync(chunk);
      console.log(receipts);
    } catch (error) {
      console.error("Error sending notification:", error);
    }
  }
};

module.exports = {
  registerToken,
  sendPushNotifications,
};
