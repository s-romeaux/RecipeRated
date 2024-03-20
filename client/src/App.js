import React from 'react';
import { NavigationContext } from './context/NavigationContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  const navigationContextValue = {
    basename: '/your-base-path',
    // Other context values if any
  };

  return (
    <NavigationContext.Provider value={navigationContextValue}>
      <div className="App">
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div> 
    </NavigationContext.Provider>
  );
}

export default App; // Make sure to export App as default
