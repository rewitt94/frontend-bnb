var express = require('express')
var app = express();

app.use(express.static(__dirname + '/public/html'));
app.use(express.static(__dirname + '/public/styles'));
app.use(express.static(__dirname + '/public/script'));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/public/html/index.html')
})

app.get('/search',function(req,res){
  res.sendFile(__dirname + '/public/html/search.html')
})

app.get('/list',function(req,res){
  res.sendFile(__dirname + '/public/html/list.html')
})

app.listen('4000');
console.log('Running on port 4000')
