const quotesController = require('../controllers/quotes.controllers');
const router = require('express').Router();
const { validateCreateQuote, validateGetQuoteByID, validateDeleteQuote } = require("../validators/quotes.validators");

// POST http://localhost:3000/api/quote
router.post("/", validateCreateQuote, quotesController.createQuoteController);

// GET http://localhost:3000/api/quote
//http://localhost:3000/api/quote?quote_name=prueba@gmail.com
router.get("/", validateGetQuoteByID, quotesController.readQuotesController);

// DELETE http://localhost:3000/api/quote?quote_name=prueba2@gmail.com
router.delete("/", validateDeleteQuote, quotesController.deleteQuoteController);


module.exports = router;