const queries = {
    createQuote: `INSERT INTO quotes(user_id, details)
    VALUES ($1, $2) RETURNING quote_id;`,
    readQuotes: `SELECT * 
    FROM quotes;`,
    readQuoteByID: `SELECT quote_id, user_id, details
    FROM quotes
    WHERE quote_id = $1`,
    deleteQuote: `DELETE FROM quotes
    WHERE quote_id = $1`
}
module.exports = queries;