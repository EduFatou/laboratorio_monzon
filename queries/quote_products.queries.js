const queries = {
    createQuote_product: `INSERT INTO quote_products(quote_id, product_id, quantity)
    VALUES ($1, $2, $3) RETURNING *;`,
    readQuote_products: `SELECT * 
    FROM quote_products;`,
    readQuote_productByID: `SELECT quote_product_id, quote_id, product_id, quantity
    FROM quote_products
    WHERE quote_product_id = $1`,
    deleteQuote_product: `DELETE FROM quote_products
    WHERE quote_product_id = $1`
}
module.exports = queries;