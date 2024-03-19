const Recipe = require('../models/recipe');



// Controller functions for handling recipe-related operations

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error('Error getting recipes:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(recipe);
  } catch (error) {
    console.error('Error getting recipe by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new recipe
exports.createRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    console.error('Error creating recipe:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update recipe by ID
exports.updateRecipeById = async (req, res) => {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json(updatedRecipe);
  } catch (error) {
    console.error('Error updating recipe by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete recipe by ID
exports.deleteRecipeById = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!deletedRecipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.json({ message: 'Recipe deleted successfully' });
  } catch (error) {
    console.error('Error deleting recipe by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

