const queries = require('../queries/users.queries')
const pool = require('../config/db_pgsql');

// CREATE
const createUser = async (user) => {
    const { name, email, phone, password } = user;
    let client, result;
    try {
        client = await pool.connect(); 
        const data = await client.query(queries.createUser, [name, email, phone, password]);
        result = data.rowCount;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
// Pruebas PostgreSQL
// let newUser = {
//     name: "PruebaUser",
//     email: "pruebauser@gmail.com",
//     phone: "+34 600 000 003"
//     password: "123456"
// }
// createUser(newUser)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))


// READ ALL
const readUsers = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.readUsers);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
// Pruebas PostgreSQL
// readUsers()
//     .then(data=>console.log(data))
//     .catch(error => console.log(error))


// READ ONE
const readUsersByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.readUsersByEmail, [email])
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
// readUsersByEmail('pruebauser@gmail.com')
//     .then(data=>console.log(data))
//     .catch(error => console.log(error))


// DELETE
const deleteUser = async (email) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.deleteUser, [email])
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
// deleteUser('pruebauser@gmail.com')
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

const users = {
    createUser,
    readUsers,
    readUsersByEmail,
    deleteUser
}

module.exports = users;