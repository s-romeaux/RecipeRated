const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the recipe schema
const recipeSchema = new Schema({
    username: String,
    recipeName: String,
    inspiration: String,
    specialtyDiets: String,
    categories: String,
    serves: Number,
    recipeImage: String, // You can store the URL of the image
    prepTime: {
        hours: Number,
        minutes: Number
    },
    cookTime: {
        hours: Number,
        minutes: Number
    },
    totalTime: {
        hours: Number,
        minutes: Number
    },
    ingredients: [
        {
            quantity: String,
            unit: String,
            name: String
        }
    ],
    instructions: String
});

// Create a model for the recipe schema
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;