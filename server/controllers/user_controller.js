const User = require('../models/user');
const bcrypt = require('bcrypt');

// Controller functions for handling user-related operations

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error getting user by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(201).json(newUser);
    console.log("new login created")
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.authenticateUser = async (req, res) => {
  try {
    const user = await User.findOne({username: req.body.username});
    if(!user){
      return res.status(404).json({message: 'User not found'});
    }

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match){
      return res.status(401).json({message: 'Incorrect username or password'});
    }

    res.json(user);
  } catch (error){
    console.error('Error authenticating user:', error);
    res.status(500).json({message: 'Internal Server Error'});
  }
}