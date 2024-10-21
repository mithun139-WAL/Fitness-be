const express = require("express");
const bodyParser = require("body-parser");
const corsMiddleware = require("./corsMiddleware");
const dotenv = require("dotenv");
const connectMongo = require("./config/mongo");
const { connectPostgres } = require("./config/postgres");
const logRoutes = require("./routes/logRoutes");
const userRoutes = require("./routes/userRoutes");
const sampleRoute = require("./routes/sampleRoute");
const notificationRoute = require("./routes/notificationRoute");

dotenv.config();

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const app = express();

app.use(corsMiddleware);
app.use(bodyParser.json());
app.use(express.json()); 


app.use("/api", logRoutes);
app.use("/notification", notificationRoute);
app.use("/api/user", userRoutes);
app.use("/", sampleRoute);

const PORT = 8005;

const startServer = async () => {
  await connectPostgres();
  await connectMongo();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();

module.exports = app;
