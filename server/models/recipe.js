const mongoose = require('mongoose');

// Define the schema for the Recipe entity
const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // Reference to the User who added the recipe
});

// Create the Recipe model using the schema
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
