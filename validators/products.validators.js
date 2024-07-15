const { body, param, query } = require("express-validator");

const validateCreateProduct = [
    body("product_name")
        .exists().withMessage("product name is required")
        .isString().withMessage("product name should be a string"),
    body("price")
        .exists().withMessage("price is required")
        .isNumeric().withMessage("price should be a number"),
    body("description")
        .exists().withMessage("description is required")
        .isString().withMessage("description should be a string"),
    body("url_photo")
        .exists().withMessage("picture url is required")
        .isString().withMessage("url should be a string"),
    body("type")
        .exists().withMessage("type is required")
        .isString().withMessage("type should be a string")
  
];

const validateGetProductByName = [
    query('product_name')
        .notEmpty().withMessage("Name should exist to get product")
        .isString().withMessage("Name should be a string")
]

const validateDeleteProduct = [
    query('product_name')
        .notEmpty().withMessage("Name should exist to delete a product")
        .isString().withMessage("Valid product_name is required")
];

module.exports = {
    validateCreateProduct,
    validateGetProductByName,
    validateDeleteProduct
};