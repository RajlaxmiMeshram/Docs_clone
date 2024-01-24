const mongoose = require("mongoose");
const dbUrl = "mongodb://127.0.0.1/google-docs-clone";
const dbConnection = mongoose.createConnection(dbUrl);
dbConnection.on("connected", () => {
  console.log("Connected to MongoDB");
});

dbConnection.on("error", (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

dbConnection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});
process.on("SIGINT", () => {
  dbConnection.close(() => {
    console.log("MongoDB connection closed through app termination");
    process.exit(0);
  });
});
module.exports = dbConnection;
