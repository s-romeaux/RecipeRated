const express = require('express');
const Recipe = require('../models/recipe');

// Controller function to get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
      const recipes = await Recipe.find();
      res.status(200).json(recipes);
  } catch (error) {
      console.error('Error fetching recipes:', error);
      res.status(500).json({ error: 'Internal server error' });
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
      const newRecipe = new Recipe(req.body);
      await newRecipe.save();
      res.status(201).json({ message: 'Recipe added successfully', recipe: newRecipe });
  } catch (error) {
      console.error('Error adding recipe:', error);
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