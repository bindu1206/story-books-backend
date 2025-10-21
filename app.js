const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

const app = express();

const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});

