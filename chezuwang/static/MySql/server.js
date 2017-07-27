var app = require("express")();
var fs = require("fs");
var mysql = require("commonmysql.js");
app.get("#/",function (req,res) {
    var result = mysql.query("SELECT * FROM user",function(result){
    res.write(result);
})
app.listen(8080);   
