const express = require("express");
const path = require("path");

const paths = require("path/path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(paths.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
  console.log("Thanks for listening");
});
