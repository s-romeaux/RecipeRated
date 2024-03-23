import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

function Home() {
    const [recipes, setRecipes] = useState([]);

    const fetchRecipesByCategory = async (category) => {
        try {
            const response = await fetch(`http://localhost:5000/recipes/category/${category}`);
            if (response.ok) {
                const data = await response.json();
                setRecipes(data);
            } else {
                throw new Error('Failed to fetch recipes');
            }
        } catch (error) {
            console.error('Error fetching recipes by category:', error);
        }
    };

    return (
        <div className="main-content">
            {/* News */}
            <div className="news news-container">
                <h1>Cookin' Up Good Things</h1>
                {/* Display recent recipes here */}
                <div className="news-columns">
                    <div className="news-column">
                        <h3>News</h3>
                        <div className="content.A">
                        <ul>
                        <p>It's fun to cook.</p>
                        </ul>
                        </div>
                    </div>
                    <div className="news-column">
                        <h3>Éntré to Win!</h3>
                        <div className="content.B">
                        <ul>
                        <p>Enter This Contest</p>
                        </ul>
                        </div>
                        {/* Add more categories as needed */}
                    </div>
                    <div className="news-column">
                        <h3>Employee of the Month</h3>
                        <div className="content.C">
                        <ul>
                            <p>Vegetable of the Month</p>
                        </ul>
                        </div>
                    </div>
                </div>
    
                {/* Categories Section */}
                <h1>Recipe Categories</h1>
                {/* Display categories here */}
                <div className="category-columns">
                    <div className="category-column">
                        <h3>Meal Times</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Breakfast')}>Breakfast</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Brunch')}>Brunch</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Lunch')}>Lunch</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Dinter')}>Dinter</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="category-column">
                        <h3>Side Dishes</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Salads')}>Salads</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Vegetables')}>Vegetables</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Grain')}>Grain</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Other')}>Other</Link></li>                            </ul>
                        </div>
                        {/* Add more categories as needed */}
                    </div>
                    <div className="category-column">
                        <h3>Desserts</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Cookies')}>Cookies</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Cakes/Frosting')}>Cakes</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Pies')}>Pies</Link></li>
                            </ul>
                        </div>
                        <h3>Beverages</h3>
                        <ul>
                            <li><Link onClick={() => fetchRecipesByCategory('Minor Friendly 🧃')}>Minor Friendly 🧃</Link></li>
                            <li><Link onClick={() => fetchRecipesByCategory('Miner Friendly 🍹⛏️')}>Miner Friendly 🍹⛏️</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Display recipes */}
            <div className="recipes">
                {recipes.map(recipe => (
                    <div key={recipe._id}>
                        <Link to={`/recipes/${recipe._id}`}>{recipe.recipeName}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
