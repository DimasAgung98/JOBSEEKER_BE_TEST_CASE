//IMPORT ROUTER EXPRESS
const { request } = require('express');
const express = require('express');
const router = express.Router();

//CONTROLLER
const goodsController = require('../controller/goods');

//ROUTE
router.get('/', goodsController.getData);

//EXPORT MODULE ROUTER
module.exports = router;