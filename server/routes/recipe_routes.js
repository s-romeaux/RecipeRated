const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');
const recipeController = require('../controllers/recipe_controller');

// Route to get all recipes
router.get('/', recipeController.getAllRecipes);

// Route to get a recipe by ID
router.get('/:id', recipeController.getRecipeById);

// Route to add a new recipe
router.post('/submit_recipe', recipeController.addRecipe);

// Route to update a recipe by ID
router.put('/:id', recipeController.updateRecipeById);

// Route to delete a recipe by ID
router.delete('/:id', recipeController.deleteRecipeById);

module.exports = router;

