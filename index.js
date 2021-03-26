var express = require("express");
const cors = require("cors");
const { colors } = require("./colors.js");
const routes = require("./routes.js");
var app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.json(routes)
});

app.get("/all", (req, res, next) => {
    res.json(colors.all);
});

app.get("/red", (req, res) => {
    res.json(colors.red);
});

app.get("/orange", (req, res) => {
    res.json(colors.orange);
});

app.get("/yellow", (req, res) => {
    res.json(colors.yellow);
});

app.get("/green", (req, res) => {
    res.json(colors.green);
});

app.get("/blue", (req, res) => {
    res.json(colors.blue);
});

app.get("/purple", (req, res) => {
    res.json(colors.purple);
});

app.get("/brown", (req, res) => {
    res.json(colors.brown);
});

app.get("/gray", (req, res) => {
    res.json(colors.gray);
});

app.get("*", (req, res) => {
    res.json("Invalid route");
});

app.listen(process.env.port || 3000, () => {
    console.log("Server @ 3000");
});