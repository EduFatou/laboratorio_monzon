const { body, param, query } = require("express-validator");

const validateCreateQuote_product = [
    body("quote_id")
        .exists().withMessage("quote id is required")
        .isNumeric().withMessage("quote id should be a number"),
    body("product_id")
        .exists().withMessage("product id is required")
        .isNumeric().withMessage("product id should be a number"),
    body("quantity")
        .exists().withMessage("user id is required")
        .isNumeric().withMessage("quote id should be a number")
];

const validateGetQuote_productByID = [
    query('quote_product_id')
        .notEmpty().withMessage("ID should exist to get the quote_product")
        .isNumeric().withMessage("ID should be a number")
]

const validateDeleteQuote_product = [
    query('quote_product_id')
        .notEmpty().withMessage("ID should exist to delete a quote_product")
        .isNumeric().withMessage("Valid quote_product_id is required")
];

module.exports = {
    validateCreateQuote_product,
    validateGetQuote_productByID,
    validateDeleteQuote_product
};