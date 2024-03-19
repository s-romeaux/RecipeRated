const express = require('express');
const app = express();
const mongoose = require('mongoose');

 

// Load environment variables from .env file
require('dotenv').config();

console.log(process.env.MONGO_URI); 

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// ROUTES

const userRoutes = require('./routes/user_routes');
const recipeRoutes = require('./routes/recipe_routes');
app.use('/users', userRoutes); // Mount user routes at /users
app.use('/recipes', recipeRoutes); // Mount recipe routes at /recipes


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
