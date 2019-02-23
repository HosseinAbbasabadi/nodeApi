const express = require('express');
const app = express();
const productController = require('./interface/controllers/productController');

app.get('/', (req, res, next) => {
    res.send('<h1>The first page!</h1>');
});


app.use(productController.getProducts);
app.use(productController.addProduct);

app.listen(3000);
console.log("listening on port 3000");