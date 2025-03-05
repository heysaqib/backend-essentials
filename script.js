const express = require('express');
const app = express();

app.use(function(req, res,next){
    console.log("Middleware is working fine...");
    next();
})
app.get('/', function (req, res) {
    res.send("Hello from landing page");
})

app.get('/profile', function(req,res){
    res.send("Hello from profile page");
})

app.get("/profile/:username", function(req,res){
    res.send(`Hello from ${req.params.username}`);
})

app.listen(3000);