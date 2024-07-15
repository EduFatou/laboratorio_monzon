const productsController = require('../controllers/products.controllers');
const router = require('express').Router();
const { validateCreateProduct, validateGetProductByName, validateDeleteProduct } = require("../validators/products.validators");

// POST http://localhost:3000/api/product
router.post("/", validateCreateProduct, productsController.createProductController);

// GET http://localhost:3000/api/product
//http://localhost:3000/api/product?product_name=prueba@gmail.com
router.get("/", validateGetProductByName, productsController.readProductsController);

// DELETE http://localhost:3000/api/product?product_name=prueba2@gmail.com
router.delete("/", validateDeleteProduct, productsController.deleteProductController);


module.exports = router;