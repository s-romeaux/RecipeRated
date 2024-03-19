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
                    Testing.12
                </div>
                {/* Categories Section */}
                <h2>Recipe Categories</h2>
                {/* Display categories here */}
                <div className="category-columns">
                    <div className="category-column">
                        <h3>Specialty</h3>
                        <ul>
                            <li>Vegan</li>
                            <li>Gluten-Free</li>
                            <li>Dairy-Free</li>
                            <li>Grain-Free</li>
                            <li>Egg-Free</li>
                        </ul>
                        <h3>Meal Times</h3>
                        <ul>
                            <li>Breakfast</li>
                            <li>Brunch</li>
                            <li>Lunch</li>
                        </ul>
                    </div>
                    <div className="category-column">
                    <h3>Main dishes</h3>
                        <ul>
                            <li>Beef</li>
                            <li>Poultry</li>
                            <li>Pork</li>
                            <li>Seafood</li>
                            <li>Vegetarian</li>
                        </ul>
                        <h3>Side Dishes</h3>
                        <ul>
                            <li>Vegetables</li>
                            <li>Grain</li>
                            <li>Other</li>
                        </ul>
                        {/* Add more categories as needed */}
                    </div>
                    <div className="category-column">
                        <h3>Desserts</h3>
                        <ul>
                            <li>Cookies</li>
                            <li>Bars</li>
                            <li>Cakes/Frosting</li>
                            <li>Pies</li>
                            <li>Candy</li>
                            <li>Bread</li>
                        </ul>
                        <h3>Beverages</h3>
                        {/* Add more categories as needed */}
                    </div>
                </div>
            </div>
            {/* Render the Login component */}
            <Login />
        </div>
    );
}

export default Home;