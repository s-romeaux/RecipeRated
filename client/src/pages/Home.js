import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
                        <h3>Meal Times</h3>
                        <div className="content">
                            <ul>
                                <li><Link to="/recipedisplay">Breakfast</Link></li>
                                <li>Brunch</li>
                                <li>Lunch</li>
                                <li>Dinter</li>
                            </ul>
                        </div>
                    </div>
                    <div className="category-column">
                        <h3>Side Dishes</h3>
                        <div className="content">
                            <ul>
                                <li>Salads</li>
                                <li>Vegetables</li>
                                <li>Grain</li>
                                <li>Other</li>
                            </ul>
                        </div>
                        {/* Add more categories as needed */}
                    </div>
                    <div className="category-column">
                        <h3>Desserts</h3>
                        <div className="content">
                            <ul>
                                <li>Cookies</li>
                                <li>Cakes</li>
                                <li>Pies</li>

                            </ul>
                        </div>
                        <h3>Beverages</h3>
                        <ul>
                        <li>For Minors 🧃</li>
                        <li>For Miners 🍹⛏️</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;