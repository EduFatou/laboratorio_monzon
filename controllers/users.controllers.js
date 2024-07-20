const user = require('../models/users.models');
const { validationResult } = require("express-validator");


const createUserController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const newUser = req.body;
    if (
        "name" in newUser &&
        "email" in newUser &&
        "phone" in newUser &&
        "password" in newUser

    ) {
        try {
            const response = await user.createUser(newUser.name, newUser.email, newUser.phone, newUser.password);
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
// POST http://localhost:3000/api/user
// {
//     "name": "PruebaUser",
//     "email": "pruebauser@gmail.com",
//      "phone": "+34 600 000 003",
//     "password": "123456"
// }

const readUsersController = async (req, res) => {
    let users;
    try {
        if (req.query.email || req.query.email == "") {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            users = await user.readUsersByEmail(req.query.email);
            res.status(200).json(users);
        } else {
            users = await user.readUsers();
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// Prueba Postman
// GET ALL http://localhost:3000/api/user
// GET ONE http://localhost:3000/api/user?email=pruebauser@gmail.com

//DELETE
const deleteUserController = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const response = await user.deleteUser(req.query.email);
        res.status(200).json({
            items_deleted: response
        });
    } catch (error) {
        res.status(500).json({ error: 'Error in database' });
    }
}
// Prueba Postman
// DELETE http://localhost:3000/api/user?email=pruebauser@gmail.com


module.exports = {
    createUserController,
    readUsersController,
    deleteUserController
}