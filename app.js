const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Set up static directory
app.use(express.static(path.join(__dirname, "public")));

// Define main route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Route for Learning Tools page
app.get("/learning-tools", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "learning-tools.html"));
});

// Route for Career Tools page
app.get("/career-tools", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "career-tools.html"));
});

// Route for Prompt Library page
app.get("/prompt-library", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "prompt-library.html"));
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
