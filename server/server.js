const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const recipeRoutes = require('./routes/recipe_routes');
const userRoutes = require('./routes/user_routes');

// Middleware for parsing JSON bodies
app.use(express.json());

// Use CORS middleware
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the backend server');
});


require('dotenv').config();

console.log(process.env.MONGO_URI);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// require model schema
const Recipe = require('./models/recipe')


app.use('/users', userRoutes); // Mount user routes at /users
app.use('/recipes', recipeRoutes); // Mount recipe routes at /recipes


  
   
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





// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
