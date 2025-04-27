const serverless = require("serverless-http");
const { app } = require("../../dist/app");
const connectDB = require("../../dist/db/db").default;

// Initialize database connection
connectDB()
  .then(() => console.log("MongoDB connected from serverless function"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Export the serverless handler
exports.handler = serverless(app);