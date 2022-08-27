const { append } = require('express/lib/response');
const res = require('express/lib/response');
const { Goods } = require('../models');

const datatable = require('sequelize-datatable');

function getData(req, res) {
    Goods.findAll({

    })
        .then(goodsList => {
            res.render('goods', {
                goodsList
            })
        });
}

function getDatav2(req, res) {
    Goods.findAll({

    })
        .then(goodsList => {
            res.render('goodsv2', {
                goodsList
            })
        });
}

function getGoodsData(req, res) {
    // Goods.findAll().then((data) => {
    //     res.json(data);
    // }
    // )
    datatable(Goods, req.query, {})
        .then((result) => {
            // result is response for datatables
            res.json(result);
        });
}
//Export Module to route.js
module.exports = {
    getData,
    getGoodsData,
    getDatav2
}
