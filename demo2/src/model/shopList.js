const request = require('request');

module.exports = function(cb) {
  request({
    url: 'http://localhost:1020/shopList',
    method: 'GET',
    headers: {
      'Context-Type': 'application/json'
    }
  }, function(err, response, body) {
    // 数据结构  { money: xxx, name: xxx }
    console.log('body', body);
    cb(JSON.parse(body));
  })
}