const mongoose = require('mongoose');

require('dotenv').config();

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB successfully.');
  } catch (error) {
    console.error('Unable to connect to MongoDB:', error);
  }
};

module.exports = connectMongo;
