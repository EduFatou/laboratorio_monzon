const queries = require('../queries/quotes.queries')
const pool = require('../config/db_pgsql');


const createQuote = async (quote) => {
    const { user_id, details } = quote;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createQuote,[user_id, details])
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
// let newQuote = {
//     user_id: 2,
//     details: "detalles prueba"
// }
// createQuote(newQuote)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const readQuotes = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.readQuotes)
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
// readQuotes()
//     .then(data=>console.log(data))
//     .catch(error => console.log(error))

const readQuoteByID = async (quote_id) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.readQuoteByID, [quote_id])
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
// readQuoteByID(1)
//     .then(data=>console.log(data))
//     .catch(error => console.log(error))


const deleteQuote = async (quote_id) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteQuote, [quote_id])
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
// deleteQuote(5)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const quotes = {
    createQuote,
    readQuotes,
    readQuoteByID,
    deleteQuote
}

module.exports = quotes;