const add = require("./add");
const sum = add(1, 2);
console.log(sum);


const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static('./public'));

app.use(function (req, res, next) {
    console.log("Middleware is working fine...");
    next();
})

app.get('/', function (req, res) {
    res.render("index", { titlename: "Games page" });
})

app.get('/error', function (req, res) {
    throw Error("Something went wrong!");
})

app.get('/profile', function (req, res) {
    res.render("profile");
})

app.get("/profile/:username", function (req, res) {
    res.send(`Hello from ${req.params.username}`);
})

app.use(function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
})

app.listen(3000);