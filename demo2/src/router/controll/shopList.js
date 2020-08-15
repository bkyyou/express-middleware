module.exports = function(req, res, next) {
  var model = require('../../model/shopList.js');

  model(function(result) {
    res.render('./shopList.art', result);
    // next()
  })
  // next()
}