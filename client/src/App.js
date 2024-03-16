import React from 'react';
import Header from './Header';
import Footer from './Footer';
import RecipeForm from './RecipeForm';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <RecipeForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
