// Import Express
const express = require("express");

// Initialize app
const app = express();

// Define a test route
app.get("/", (req, res) => {
  res.send("We4 Backend is running");
});

// Start server on PORT 5000
app.listen(5000, () => console.log("Server started on port 5000"));
