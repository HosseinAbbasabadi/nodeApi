const express = require('express');
const router = express.Router();
const parser = require('body-parser');

router.use(parser.urlencoded({ extended: true }));
router.use(parser.json());
const getProducts = router.get('/products', (req, res, next) => {
    res.json(
        [
            { name: 'iphone', price: '45552685', category: 'mobile'},
            { name: 'imac', price: '18566', category: 'pc'},
            { name: 'iwatch', price: '789631', category: 'gadget'}
        ]
    );
});

const addProduct = router.post('/product', (req, res, next) => {
    console.log('i am in post method');
    console.log(req.body);
    res.json(req.body.name);
});

module.exports.getProducts = getProducts;
module.exports.addProduct = addProduct;