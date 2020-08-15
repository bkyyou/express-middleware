const express = require('express');
const path = require('path');
const proxyMiddleware = require('http-proxy-middleware').createProxyMiddleware;


// default port where dev server listens for incoming traffic
const port = 3335;

const app = express();

//设置cookie
let cookie;
function relayRequestHeaders(proxyReq, req) {
  if (cookie) {
    proxyReq.setHeader('cookie', cookie);
  }
};

function relayResponseHeaders(proxyRes, req, res) {
  let proxyCookie = proxyRes.headers["set-cookie"];
  if (proxyCookie) {
    cookie = proxyCookie;
  }
};


let options = {
  target: 'http://192.168.1.2:8081', // target host
  changeOrigin: true, // needed for virtual hosted sites
  pathRewrite: {
    '^/': '/Edit-WS/', // rewrite path
  },
  // onProxyReq: relayRequestHeaders,
  // onProxyRes: relayResponseHeaders,
};

// 静态资源 处理
app.use(express.static(path.join(__dirname + '/WebRoot')));

// 访问登录页（/）
app.get('/', function(req, res, next) {
  console.log('test=============');
  let options = {
    root: __dirname + '/WebRoot/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  let fileName = 'index_2x.html';
  res.sendFile(fileName, options, function(err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log('Sent:', fileName);
    }
  });
});

// 匹配的路由（正则）
app.use('/**/*.do', proxyMiddleware(options));

const server = app.listen(port);