const queries = require('../queries/products.queries')
const pool = require('../config/db_pgsql');


const createProduct = async (product) => {
    const { product_name, price, description, url_photo, type } = product;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createProduct,[product_name, price, description, url_photo, type])
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
// let newProduct = {
//     product_name: "Prueba",
//     price: 100,
//     description: "corona monolítica",
//     url_photo: "https://imgs.search.brave.com/o6QxuA4hK5K9-M6zY8dBZXMbomyd3g9ziJSPkRG3tBw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly96aXJj/b25pYS5lYy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wOC9C/TE9HLVBPUlRBREEt/WklSQ09OSUEtMy5q/cGc",
//     type: "producto"
// }
// createProduct(newProduct)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const readProducts = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.readProducts)
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
// readProducts()
//     .then(data=>console.log(data))
//     .catch(error => console.log(error))

const readProductByName = async (product_name) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.readProductByName, [product_name])
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
// readProductByName('corona zirconio')
//     .then(data=>console.log(data))
//     .catch(error => console.log(error))


const deleteProduct = async (product_name) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteProduct, [product_name])
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
// deleteProduct()
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const products = {
    createProduct,
    readProducts,
    readProductByName,
    deleteProduct
}

module.exports = products;