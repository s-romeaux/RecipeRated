const mongoose = require('mongoose');

// Define the schema for the User entity
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  // Add more fields as needed
});

// Create the User model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
