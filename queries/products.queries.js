const queries = {
    createProduct: `INSERT INTO products(product_name, price, description, url_photo, type)
    VALUES ($1, $2, $3, $4, $5);`,
    readProducts: `SELECT * 
    FROM products;`,
    readProductByName: `SELECT product_name, price, description, url_photo, type
    FROM products
    WHERE product_name = $1`,
    deleteProduct: `DELETE FROM products
    WHERE product_name = $1`
}
module.exports = queries;