import React from 'react';
import Header from './components/Header'; // Adjusted import path
import Footer from './components/Footer'; // Adjusted import path
import Home from './components/Home'; // Adjusted import path
import RecipeForm from './components/RecipeForm'; // Adjusted import path

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <RecipeForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
