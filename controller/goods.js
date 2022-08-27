const {
    append
} = require('express/lib/response');
const res = require('express/lib/response');
const {
    Goods
} = require('../models');

function getData(request, response) {
    Goods.findAll({

    })
        .then(goodsList => {
            response.render('goods', {
                goodsList
            })
        });
}

//Export Module to route.js
module.exports = {
    getData
}
