const express = require('express');
const router = require('./src/router/index.js');

// 可以做 TCP 连接
/**
 * TCPClient - api服务端开 tcp 服务
 * 数据库改变 服务端发消息 告诉 TCPClient ，清除 Cache 缓存  cache={}
 */

global.Cache = {

}

const app = express();

// 定义模版类型  npm i express-art-template  art-template  
app.engine('art', require('express-art-template')); // 后缀 ， 解析工具

// 指定模版位置
app.set('views', './src/views');

// app.use('/', router);
app.use(router);

app.listen(5000, () => {
  console.log('running');
})

// 负载均衡  现有 a b c d 四台服务器，将请求分发到这四个服务器上

// 中间层，工程化(自动化，自动部署，前端灰度发布，ci/cd); 
// 具体项目组件库的设计，项目通用库的设计