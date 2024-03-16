const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user_controller');

// Define routes for user-related operations

// GET all users
router.get('/', UserController.getAllUsers);

// GET user by ID
router.get('/:id', UserController.getUserById);

// POST create a new user
router.post('/', UserController.createUser);


module.exports = router;
