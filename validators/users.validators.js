const { body, param, query } = require("express-validator");


const validateCreateUser = [
    body("name")
        .exists().withMessage("Name of users is required")
        .isString().withMessage("Name should be a string"),
    body("email")
        .exists().withMessage("User email is required")
        .isEmail().withMessage("Valid email is required"),
    body("phone")
        .exists().withMessage("phone number is required")
        .isString().withMessage("it should be a string"),
    body("password")
        .exists().withMessage("User password is required")
        .isString().withMessage("Password should be a string")
        .isLength({ min: 6 })
];


const validateGetUsersByEmail = [
    query('email')
        .notEmpty().withMessage("Email should exist to get by email")
        .isEmail().withMessage("Wrong email format")
];

const validateDeleteUser = [
    query('email')
        .notEmpty().withMessage("Email should exist to delete an user")
        .isEmail().withMessage("Valid email is required")
];

module.exports = {
    validateCreateUser,
    validateGetUsersByEmail,
    validateDeleteUser
};