const express = require("express");
const bodyParser = require("body-parser");

const app =express();
app.use(bodyParser.urlencoded({extended: true}));

// Simple Calculator
app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/" , function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;

  res.send("The result of the calculation is: " + result);
});

// BMI Calculator
app.get("/bmicalculator", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator" , function(req, res){

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var BMI = weight/(height**2);

  res.send("The calculated BMI is: " + BMI);

});

app.listen(3000, function(){
  console.log("server is running at port 3000");
});
