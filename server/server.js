const express = require('express');
const app = express();
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipe_routes');
const userRoutes = require('./routes/user_routes');

// require model schema
const Recipe = require('./models/recipe')


app.use('/users', userRoutes); // Mount user routes at /users
app.use('/recipes', recipeRoutes); // Mount recipe routes at /recipes


 

// Load environment variables from .env file
require('dotenv').config();

console.log(process.env.MONGO_URI); 

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


  // Get the default connection
const db = mongoose.connection;


// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

  // Define sample recipe data
const sampleRecipeData = {
    username: 'john_doe',
    recipeName: 'Spaghetti Carbonara',
    inspiration: 'Italian cuisine',
    specialtyDiets: 'None',
    categories: 'Pasta',
    serves: 4,
    recipeImage: 'https://example.com/spaghetti-carbonara.jpg',
    prepTime: { hours: 0, minutes: 15 },
    cookTime: { hours: 0, minutes: 20 },
    totalTime: { hours: 0, minutes: 35 },
    ingredients: [
        { quantity: '200', unit: 'g', name: 'spaghetti' },
        { quantity: '150', unit: 'g', name: 'guanciale or pancetta' },
        // Add more ingredients as needed
    ],
    instructions: '...'
};

// Insert sample data into MongoDB
async function insertSampleData() {
    try {
        const newRecipe = new Recipe(sampleRecipeData);
        await newRecipe.save();
        console.log('Sample data inserted successfully');
    } catch (error) {
        console.error('Error inserting sample data:', error);
    } 
}

// Call the function to insert sample data
insertSampleData();



// Error handling middleware for undefined routes
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Error handler middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message
        }
    });
});

// Use /recipes as the main endpoint
app.use('/recipes', recipeRoutes);




// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
