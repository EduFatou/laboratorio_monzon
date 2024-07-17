const quote = require('../models/quotes.models');
const { validationResult } = require("express-validator");

const createQuoteController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const newQuote = req.body;
    if (
        "user_id" in newQuote &&
        "details" in newQuote
    ) {
        try {
            console.log('Attempting to create quote:', newQuote);
            const response = await quote.createQuote(req.body.user_id, req.body.details);
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
// POST http://localhost:3000/api/quotes
// {
//     "user_id": 2,
//     "details": "detalles prueba"
// }


const readQuotesController = async (req, res) => {
    let quotes;
    try {
        if (req.query.quote_id || req.query.quote_id == "") {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            quotes = await quote.readQuoteByID(req.query.quote_id);
            res.status(200).json(quotes);
        } else {
            quotes = await quote.readQuotes();
            res.status(200).json(quotes);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Prueba Postman
// GET ALL http://localhost:3000/api/quotes
// GET ONE http://localhost:3000/api/quotes?quote_id=2


const deleteQuoteController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let quotes;
    try {
        quotes = await quote.deleteQuote(req.query.quote_id);
        res.status(200).json(quotes);
    } catch (error) {
        res.status(500).json({ error: 'Error in database' });
    }
}
// Prueba Postman
// DELETE http://localhost:3000/api/quote?quote_id=2


module.exports = {
    createQuoteController,
    readQuotesController,
    deleteQuoteController
}