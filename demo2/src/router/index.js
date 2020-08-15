const express = require('express');

let router = express.Router();

let index = require('./controll/index.js');

router.get('/', index);
router.get('/shopList', require('./controll/shopList.js'));

module.exports = router;