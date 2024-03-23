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
            {/* Recipe Preview Sectionnnn */}
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
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Vegan')}>Vegan</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Gluten-Free')}>Gluten-Free</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Dairy-Free')}>Dairy-Free</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Grain-Free')}>Grain-Free</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Egg-Free')}>Egg-Free</Link></li>
                            </ul>
                        </div>
                        <h3>Meal Times</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Breakfast')}>Breakfast</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Brunch')}>Brunch</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Lunch')}>Lunch</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="category-column">
                        <h3>Main dishes</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Beef')}>Beef</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Poultry')}>Poultry</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Pork')}>Pork</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Seafood')}>Seafood</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Vegetarian')}>Vegetarian</Link></li>
                            </ul>
                        </div>
                        <h3>Side Dishes</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Vegetables')}>Vegetables</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Grain')}>Grain</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Other')}>Other</Link></li>
                            </ul>
                        </div>
                        {/* Add more categories as needed */}
                    </div>
                    <div className="category-column">
                        <h3>Desserts</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Cookies')}>Cookies</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Bars')}>Bars</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Cakes/Frosting')}>Cakes/Frosting</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Pies')}>Pies</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Candy')}>Candy</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Bread')}>Bread</Link></li>
                            </ul>
                        </div>
                        <h3>Beverages</h3>
                        {/* Add more categories as needed */}
                    </div>
                </div>

                {/* Categories Section */}
                <h1>Recipe Categories</h1>
                {/* Display categories here */}
                <div className="category-columns">
                    <div className="category-column">
                        <h3>Specialty</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Vegan')}>Vegan</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Gluten-Free')}>Gluten-Free</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Dairy-Free')}>Dairy-Free</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Grain-Free')}>Grain-Free</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Egg-Free')}>Egg-Free</Link></li>
                            </ul>
                        </div>
                        <h3>Meal Times</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Breakfast')}>Breakfast</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Brunch')}>Brunch</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Lunch')}>Lunch</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="category-column">
                        <h3>Main dishes</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Beef')}>Beef</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Poultry')}>Poultry</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Pork')}>Pork</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Seafood')}>Seafood</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Vegetarian')}>Vegetarian</Link></li>
                            </ul>
                        </div>
                        <h3>Side Dishes</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Vegetables')}>Vegetables</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Grain')}>Grain</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Other')}>Other</Link></li>
                            </ul>
                        </div>
                        {/* Add more categories as needed */}
                    </div>
                    <div className="category-column">
                        <h3>Desserts</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Cookies')}>Cookies</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Bars')}>Bars</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Cakes/Frosting')}>Cakes/Frosting</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Pies')}>Pies</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Candy')}>Candy</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Bread')}>Bread</Link></li>
                            </ul>
                        </div>
                        <h3>Beverages</h3>
                        {/* Add more categories as needed */}
                    </div>
                </div>

                {/* Categories Section */}
                <h1>Recipe Categories</h1>
                {/* Display categories here */}
                <div className="category-columns">
                    <div className="category-column">
                        <h3>Specialty</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Vegan')}>Vegan</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Gluten-Free')}>Gluten-Free</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Dairy-Free')}>Dairy-Free</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Grain-Free')}>Grain-Free</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Egg-Free')}>Egg-Free</Link></li>
                            </ul>
                        </div>
                        <h3>Meal Times</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Breakfast')}>Breakfast</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Brunch')}>Brunch</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Lunch')}>Lunch</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="category-column">
                        <h3>Main dishes</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Beef')}>Beef</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Poultry')}>Poultry</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Pork')}>Pork</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Seafood')}>Seafood</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Vegetarian')}>Vegetarian</Link></li>
                            </ul>
                        </div>
                        <h3>Side Dishes</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Vegetables')}>Vegetables</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Grain')}>Grain</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Other')}>Other</Link></li>
                            </ul>
                        </div>
                        {/* Add more categories as needed */}
                    </div>
                    <div className="category-column">
                        <h3>Desserts</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Cookies')}>Cookies</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Bars')}>Bars</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Cakes/Frosting')}>Cakes/Frosting</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Pies')}>Pies</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Candy')}>Candy</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Bread')}>Bread</Link></li>
                            </ul>
                        </div>
                        <h3>Beverages</h3>
                        {/* Add more categories as needed */}
                    </div>
                </div>

                {/* Categories Section */}
                <h1>Recipe Categories</h1>
                {/* Display categories here */}
                <div className="category-columns">
                    <div className="category-column">
                        <h3>Specialty</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Vegan')}>Vegan</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Gluten-Free')}>Gluten-Free</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Dairy-Free')}>Dairy-Free</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Grain-Free')}>Grain-Free</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Egg-Free')}>Egg-Free</Link></li>
                            </ul>
                        </div>
                        <h3>Meal Times</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Breakfast')}>Breakfast</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Brunch')}>Brunch</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Lunch')}>Lunch</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="category-column">
                        <h3>Main dishes</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Beef')}>Beef</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Poultry')}>Poultry</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Pork')}>Pork</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Seafood')}>Seafood</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Vegetarian')}>Vegetarian</Link></li>
                            </ul>
                        </div>
                        <h3>Side Dishes</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Vegetables')}>Vegetables</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Grain')}>Grain</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Other')}>Other</Link></li>
                            </ul>
                        </div>
                        {/* Add more categories as needed */}
                    </div>
                    <div className="category-column">
                        <h3>Desserts</h3>
                        <div className="content">
                            <ul>
                                <li><Link onClick={() => fetchRecipesByCategory('Cookies')}>Cookies</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Bars')}>Bars</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Cakes/Frosting')}>Cakes/Frosting</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Pies')}>Pies</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Candy')}>Candy</Link></li>
                                <li><Link onClick={() => fetchRecipesByCategory('Bread')}>Bread</Link></li>
                            </ul>
                        </div>
                        <h3>Beverages</h3>
                        {/* Add more categories as needed */}
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

            {/* Display recipes */}
            <div className="recipes">
                {recipes.map(recipe => (
                    <div key={recipe._id}>
                        <Link to={`/recipes/${recipe._id}`}>{recipe.recipeName}</Link>
                    </div>
                ))}
            </div>

            {/* Display recipes */}
            <div className="recipes">
                {recipes.map(recipe => (
                    <div key={recipe._id}>
                        <Link to={`/recipes/${recipe._id}`}>{recipe.recipeName}</Link>
                    </div>
                ))}
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