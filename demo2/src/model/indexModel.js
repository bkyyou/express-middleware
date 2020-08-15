const request = require('request');

module.exports = function(cb) {
  request({
    url: 'http://localhost:1020/all',
    method: 'GET',
    headers: {
      'Context-Type': 'application/json'
    }
  }, function(err, response, body) {
    var body = JSON.parse(body);
    cb(body);
  })

  // 判断缓存
  // if (cache.index) {
  //   cb(Cache.index)
  // } else {
  //   request({
  //     url: 'http://localhost:1020/all',
  //     method: 'GET',
  //     headers: {
  //       'Context-Type': 'application/json'
  //     }
  //   }, function(err, response, body) {
  //     var body = JSON.parse(body);
  //     // cache.index = body;
  //     cache.index;
  //     cb(body);
  //   })
  // }
}