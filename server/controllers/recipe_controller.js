const express = require('express');
const Recipe = require('../models/recipe');
const router = express.Router();


// Controller function to render the home page
exports.renderHomePage = async (req, res) => {
  try {
      // You can fetch any data needed for your home page here
      // For example, you can fetch recent recipes, featured recipes, etc.
      
      // Render the home page view with any data you want to pass
      res.render('home', { title: 'Home Page', message: 'Welcome to our recipe app!' });
  } catch (error) {
      console.error('Error rendering home page:', error);
      res.status(500).send('Internal server error');
  }
};

// Controller function to get a recipe by ID
exports.getRecipeById = async (req, res) => {
  try {
      const recipe = await Recipe.findById(req.params.id);
      if (!recipe) {
          return res.status(404).json({ error: 'Recipe not found' });
      }
      res.status(200).json(recipe);
  } catch (error) {
      console.error('Error fetching recipe by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
};


// Controller function to add a new recipe
exports.addRecipe = async (req, res) => {
  try {
    // Log the received form data
    console.log('Received form data:', req.body);

    // Create a new recipe object using the request body
    const newRecipe = new Recipe(req.body);

    // Save the new recipe to the database
    await newRecipe.save();

    // Log success message and send response
    console.log('Recipe added successfullyyy:', newRecipe);
    res.redirect('/'); // Assuming the homepage route is '/'
  } catch (error) {
    // Log any errors that occur during the process
    console.error('Error adding recipe:', error);

    // Send an error response
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to update a recipe by ID
exports.updateRecipeById = async (req, res) => {
  try {
      const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!recipe) {
          return res.status(404).json({ error: 'Recipe not found' });
      }
      res.status(200).json({ message: 'Recipe updated successfully', recipe });
  } catch (error) {
      console.error('Error updating recipe by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to delete a recipe by ID
exports.deleteRecipeById = async (req, res) => {
  try {
      const recipe = await Recipe.findByIdAndDelete(req.params.id);
      if (!recipe) {
          return res.status(404).json({ error: 'Recipe not found' });
      }
      res.status(200).json({ message: 'Recipe deleted successfully', recipe });
  } catch (error) {
      console.error('Error deleting recipe by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
};