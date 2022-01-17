//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function (req, res){
  //console.log(request);
  res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", function(req,res){
  res.send("Contact me: angels@gmail.com");
});

app.get("/about", function(req, res){
  res.send("My name is Veronika, and I Love chips");
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Coffee</li><li>Code</li><li>Beer</li></ul>");
})

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
