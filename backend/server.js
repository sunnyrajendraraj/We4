const authRoutes = require('./routes/auth');
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use("/api/auth", authRoutes);
app.use(cors()); // Enable CORS for frontend access
app.use(express.json()); // Parse incoming JSON requests


// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch((err) => {
    console.error("DB Error:", err.message);
  });


// Test route
app.get("/", (req, res) => {
  res.send("We4 Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
