const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  action: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Log = mongoose.model('Log', logSchema);

module.exports = Log;
