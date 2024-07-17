const productsController = require('../controllers/products.controllers');
const router = require('express').Router();
const { validateCreateProduct, validateGetProductByName, validateDeleteProduct } = require("../validators/products.validators");

// POST http://localhost:3000/api/products
router.post("/", validateCreateProduct, productsController.createProductController);

// GET http://localhost:3000/api/products
//http://localhost:3000/api/products
router.get("/", validateGetProductByName, productsController.readProductsController);

// DELETE http://localhost:3000/api/products
router.delete("/", validateDeleteProduct, productsController.deleteProductController);


module.exports = router;