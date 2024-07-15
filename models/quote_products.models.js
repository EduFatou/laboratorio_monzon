const queries = require('../queries/quote_products.queries')
const pool = require('../config/db_pgsql');


const createQuote_product = async (quote_product) => {
    const { quote_id, product_id, quantity} = quote_product;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createQuote_product,[quote_id, product_id, quantity])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

//Pruebas PostgreSQL
// let newQuote_product = {
//     quote_id: 1,
//     product_id: 1,
//     quantity: 2
// }
// createQuote_product(newQuote_product)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const readQuote_products = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.readQuote_products)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// Pruebas PostgreSQL
// readQuote_products()
//     .then(data=>console.log(data))
//     .catch(error => console.log(error))

const readQuote_productByID = async (quote_product_id) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.readQuote_productByID, [quote_product_id])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
// Pruebas PostgreSQL
// readQuote_productByID(1)
//     .then(data=>console.log(data))
//     .catch(error => console.log(error))


const deleteQuote_product = async (quote_product_id) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteQuote_product, [quote_product_id])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// Pruebas PostgreSQL
// deleteQuote_product(5)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const quote_products = {
    createQuote_product,
    readQuote_products,
    readQuote_productByID,
    deleteQuote_product
}

module.exports = quote_products;