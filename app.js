const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.render(__dirname + "/views/home.ejs");
});

app.get("/login", (req, res) => {
    res.render(__dirname + "/views/login.ejs");
});

app.get("/registration", (req, res) => {
    res.render(__dirname + "/views/registration.ejs");
});


module.exports = app;