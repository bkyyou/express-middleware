const express = require('express');

const app = express();

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Header', 'X-Requested-with,Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  next();
})

app.get('/shopList', (req, res) => {
  var data = { shop: [  {name: '飞机', value: 1000}, {name: '电脑', value: 2000} ] };
  res.end(JSON.stringify(data));
})

app.get('/all', (req, res) => {
  var data = { all: 'suoyou', money: 3000 };
  res.end(JSON.stringify(data));
})

app.listen(1020);