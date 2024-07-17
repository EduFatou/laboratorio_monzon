const queries = {
    createUser: `INSERT INTO users(name, email, phone, password, role)
    VALUES ($1, $2, $3, $4, 'user');`,
    readUsers: `SELECT * 
    FROM users
    WHERE role = 'user';`,
    readUsersByEmail: `SELECT user_id, name, email, phone, password, role
    FROM users
    WHERE email = $1`,
    deleteUser: `DELETE FROM users
    WHERE email = $1`
}
module.exports = queries;
