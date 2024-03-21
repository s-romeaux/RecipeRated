import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import RecipeForm from './pages/RecipeForm';
import Signup from './pages/Signup.js';
import RecipeDisplay from './pages/RecipeDisplay.js';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-recipe" element={<RecipeForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recipedisplay" element={<RecipeDisplay />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
