const quote_product = require('../models/quote_products.models');
const { validationResult } = require("express-validator");

const createQuote_productController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const newQuote_product = req.body;
    if (
        "quote_id" in newQuote_product &&
        "product_id" in newQuote_product &&
        "quantity" in newQuote_product
    ) {
        try {
            const response = await quote_product.createQuote_product(req.body.quote_id, req.body.product_id, req.body.quantity);
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
// POST http://localhost:3000/api/quote_products
// {
//     "quote_id": 2,
//     "product_id": 1,
//      "quantity": 2
// }


const readQuote_productsController = async (req, res) => {
    let quote_products;
    try {
        if (req.query.quote_product_id || req.query.quote_product_id == "") {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            quote_products = await quote_product.readQuote_productByID(req.query.quote_product_id);
            res.status(200).json(quote_products);
        } else {
            quote_products = await quote_product.readQuote_products();
            res.status(200).json(quote_products);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Prueba Postman
// GET ALL http://localhost:3000/api/quote_products
// GET ONE http://localhost:3000/api/quote_products?quote_product_id=2


const deleteQuote_productController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let quote_products;
    try {
        quote_products = await quote_product.deleteQuote_product(req.query.quote_product_id);
        res.status(200).json(quote_products);
    } catch (error) {
        res.status(500).json({ error: 'Error in database' });
    }
}
// Prueba Postman
// DELETE http://localhost:3000/api/quote_product?quote_product_id=2


module.exports = {
    createQuote_productController,
    readQuote_productsController,
    deleteQuote_productController
}