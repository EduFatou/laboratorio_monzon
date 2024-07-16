const usersController = require('../controllers/users.controllers');
const router = require('express').Router();
const { validateCreateUser, validateGetUsersByEmail, validateDeleteUser } = require("../validators/users.validators");

// POST http://localhost:3000/api/users
router.post("/", validateCreateUser, usersController.createUserController);
// GET http://localhost:3000/api/users
//http://localhost:3000/api/users?email=pruebauser@gmail.com
router.get("/", validateGetUsersByEmail, usersController.readUsersController);
// DELETE http://localhost:3000/api/users?email=pruebauser@gmail.com
router.delete("/", validateDeleteUser, usersController.deleteUserController);


module.exports = router;