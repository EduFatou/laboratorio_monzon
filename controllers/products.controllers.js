const product = require('../models/products.models');
const { validationResult } = require("express-validator");

const createProductController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const newProduct = req.body;
    if (
        "product_name" in newProduct &&
        "price" in newProduct &&
        "description" in newProduct &&
        "url_photo" in newProduct &&
        "type" in newProduct
    ) {
        try {
            const response = await product.createProduct(newProduct);
            res.status(201).json({
                items_created: response
            });
        } catch (error) {
            res.status(500).json({ error: "Error in database" });
        }
    } else {
        res.status(400).json({ error: "Something is missing" });
    }
}

// Prueba Postman
// POST http://localhost:3000/api/products
// {
//     "product_name": "Prueba",
//     "price": "100",
//     "description": "pieza de prueba",
//     "url_photo": "foto",
//     "type": "producto"
// }


const readProductsController = async (req, res) => {
    let products;
    try {
        if (req.query.product_name || req.query.product_name == "") {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            products = await product.readProductByName(req.query.product_name);
            res.status(200).json(products);
        } else {
            products = await product.readProducts();
            res.status(200).json(products);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Prueba Postman
// GET ALL http://localhost:3000/api/products
// GET ONE http://localhost:3000/api/products?product_name=corona zirconio


const deleteProductController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let products;
    try {
        products = await product.deleteProduct(req.query.product_name);
        res.status(200).json(products); // [] con los productos encontrados
    } catch (error) {
        res.status(500).json({ error: 'Error in database' });
    }
}
// Prueba Postman
// DELETE http://localhost:3000/api/product?product_name=corona zirconio


module.exports = {
    createProductController,
    readProductsController,
    deleteProductController
}