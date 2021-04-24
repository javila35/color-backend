var express = require("express");
const cors = require("cors");
const { colors } = require("./colors.js");
const routes = require("./routes.js");
var app = express();
const PORT = process.env.PORT || 3000;

const colorOptions = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "brown",
  "gray",
];

app.use(cors());

app.get("/", (req, res) => {
  res.json(routes);
});

app.get("/all", (req, res, next) => {
  res.json(colors.all);
});

app.get("/colors/:color", (req, res) => {
  const colorParam = req.params.color;
  if (colorOptions.includes(colorParam)) {
    res.json(colors[colorParam]);
  } else {
    res.json("Invalid color route");
  }
});

app.get("*", (req, res) => {
  res.json("Invalid route");
});

app.listen(PORT, () => {
  console.log(`Server @ ${PORT}`);
});
