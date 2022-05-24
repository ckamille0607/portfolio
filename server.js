const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/about", function (req, res) {
    res.render("about");
});
app.get("/portfolio", function (req, res) {
    res.render("portfolio");
});
app.get("/project2", function (req, res) {
    res.render("project2");
});
app.get("/project3", function (req, res) {
    res.render("project3");
});
app.get("/sunnies", function (req, res) {
    res.render("sunnies");
});
app.get("/lexi", function (req, res) {
    res.render("lexi");
});

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
