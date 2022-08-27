//IMPORT ROUTER EXPRESS
const { request } = require('express');
const express = require('express');
const router = express.Router();

//CONTROLLER
const goodsController = require('../controller/goods');

//ROUTE
router.get('/', goodsController.getData);
router.get('/data', goodsController.getGoodsData);
router.get('/show', goodsController.getDatav2);


//EXPORT MODULE ROUTER
module.exports = router;