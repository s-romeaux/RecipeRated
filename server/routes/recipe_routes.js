const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/recipe_controller');
const Recipe = require('../models/recipe');

// Define routes for recipe-related operations

// GET all recipes
router.get('/', RecipeController.getAllRecipes);

// GET recipe by ID
router.get('/:id', RecipeController.getRecipeById);

// Handle POST request to submit a new recipe
router.post('/submit_recipe', async (req, res) => {
    try {
        // Create a new recipe instance
        const newRecipe = new Recipe({
            username: req.body.username,
            recipeName: req.body.recipeName,
            inspiration: req.body.inspiration,
            specialtyDiets: req.body.specialtyDiets,
            categories: req.body.categories,
            serves: req.body.serves,
            recipeImage: req.body.recipeImage,
            prepTime: {
                hours: req.body.prepHours,
                minutes: req.body.prepMinutes
            },
            cookTime: {
                hours: req.body.cookHours,
                minutes: req.body.cookMinutes
            },
            totalTime: {
                hours: req.body.totalHours,
                minutes: req.body.totalMinutes
            },
            ingredients: req.body.ingredients,
            instructions: req.body.instructions
        });

        // Save the recipe to the database
        await newRecipe.save();

        res.status(201).json({ message: 'Recipe added successfully' });
    } catch (err) {
        console.error('Error adding recipe:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT update recipe by ID
router.put('/:id', RecipeController.updateRecipeById);

// DELETE recipe by ID
router.delete('/:id', RecipeController.deleteRecipeById);

module.exports = router;
