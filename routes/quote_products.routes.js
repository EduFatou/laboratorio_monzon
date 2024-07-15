const quote_productsController = require('../controllers/quote_products.controllers');
const router = require('express').Router();
const { validateCreateQuote_product, validateGetQuote_productByID, validateDeleteQuote_product } = require("../validators/quote_products.validators");

// POST http://localhost:3000/api/quote_product
router.post("/", validateCreateQuote_product, quote_productsController.createQuote_productController);

// GET http://localhost:3000/api/quote_product
//http://localhost:3000/api/quote_product?quote_product_name=prueba@gmail.com
router.get("/", validateGetQuote_productByID, quote_productsController.readQuote_productsController);

// DELETE http://localhost:3000/api/quote_product?quote_product_name=prueba2@gmail.com
router.delete("/", validateDeleteQuote_product, quote_productsController.deleteQuote_productController);


module.exports = router;