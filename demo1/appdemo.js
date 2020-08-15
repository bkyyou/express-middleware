var express = require('express');
var proxy = require('http-proxy-middleware');

console.log('proxy', proxy);

var app = express();

// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
//   res.header('Access-Control-Allow-Headers', 'application/json, text/plain, */*');
//   res.header('Access-Control-Allow-Methods', '*');
//   res.header('Content-Type', 'application/json;charset=utf-8');
//   next();
// });

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

let options = { target: 'http://127.0.0.1:7001', changeOrigin: true }

app.use('/user', proxy.createProxyMiddleware(options));

// 匹配的路由（正则）
app.use(/\/[a-zA-Z]+/, proxy.createProxyMiddleware(options));

// app.get('/user', (req, res) => {
//   console.log('/user')
//   res.end('express user')
// })
app.listen(3000);