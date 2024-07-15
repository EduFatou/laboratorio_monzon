const { body, param, query } = require("express-validator");

const validateCreateQuote = [
    body("user_id")
        .exists().withMessage("user id is required")
        .isNumeric().withMessage("quote id should be a number"),
    body("details")
        .optional()
        .isString().withMessage("description should be a string")
];

const validateGetQuoteByID = [
    query('quote_id')
        .notEmpty().withMessage("ID should exist to get the quote")
        .isNumeric().withMessage("ID should be a number")
]

const validateDeleteQuote = [
    query('quote_id')
        .notEmpty().withMessage("ID should exist to delete a quote")
        .isNumeric().withMessage("Valid quote_id is required")
];

module.exports = {
    validateCreateQuote,
    validateGetQuoteByID,
    validateDeleteQuote
};