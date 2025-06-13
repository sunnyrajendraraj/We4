const express = require("express");
const dotenv = require("dotenv");

dotenv.config(); // Load variables from .env

const app = express();

app.get("/", (req, res) => {
  res.send("StoryHub Backend is running");
});

const PORT = process.env.PORT || 5000; // use .env PORT if available
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
