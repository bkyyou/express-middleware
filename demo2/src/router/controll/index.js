module.exports = function(req, res) {
  // 取这个页面数据，结合视图模版
  var model = require('../../model/indexModel.js');

  model(function(result) {
    //var html = vue-server-render;
    // res.send(html)
    res.render('./index.art', result);  // 渲染的字符串也可以缓存
  })
}