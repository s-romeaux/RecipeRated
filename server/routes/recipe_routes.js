const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/recipeController');

// Define routes for recipe-related operations

// GET all recipes
router.get('/', RecipeController.getAllRecipes);

// GET recipe by ID
router.get('/:id', RecipeController.getRecipeById);

// POST create a new recipe
router.post('/', RecipeController.createRecipe);

// PUT update recipe by ID
router.put('/:id', RecipeController.updateRecipeById);

// DELETE recipe by ID
router.delete('/:id', RecipeController.deleteRecipeById);

module.exports = router;
