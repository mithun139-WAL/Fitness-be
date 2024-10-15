const cors = require('cors');

const corsOptions = {
  origin: 'localhost:8005',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

module.exports = cors(corsOptions);
