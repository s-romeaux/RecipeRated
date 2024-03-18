import React from 'react';
import Login from './Login'; // Import the Login component
import '../styles/main.css'; // Import the CSS file

function Home() {
    return (
        <div className="main-content">
            {/* Recipe Preview Section */}
            <div className="recipe-preview">
                <h2>Recently Submitted Recipes</h2>
                {/* Display recent recipes here */}
                <div>
                    Testing.
                </div>
                {/* Categories Section */}
                <h2>Recipe Categories</h2>
                {/* Display categories here */}
                <div>
                    Testing.
                </div>
            </div>
            {/* Render the Login component */}
            <Login />
        </div>
    );
}

export default Home;
