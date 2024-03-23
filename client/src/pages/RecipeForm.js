import React, { useState } from 'react';
import '../styles/recipeform.scss';

function RecipeForm({ username }) {
    const [ingredients, setIngredients] = useState([{ quantity: '', unit: 'g', name: '' }]);
    const [submittedIngredients, setSubmittedIngredients] = useState('');
    const [showLoginPopup, setShowLoginPopup] = useState(false);

    const handleAddIngredient = () => {
        setIngredients([...ingredients, { quantity: '', unit: 'g', name: '' }]);
    };

    const handleChange = (index, field, event) => {
        const { value } = event.target;
        const newIngredients = [...ingredients];
        newIngredients[index][field] = value;
        setIngredients(newIngredients);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!username) {
            setShowLoginPopup(true);
            setTimeout(() => {
                setShowLoginPopup(false);
            }, 10000);
            return;
        }

        const formattedIngredients = ingredients.map(ingredient => `${ingredient.quantity} ${ingredient.unit} ${ingredient.name}`).join('\n');
        setSubmittedIngredients(formattedIngredients);
    };

    return (
        <div className="recipe-form-container">
            <h2>Add New Recipe</h2>
            <form onSubmit={handleSubmit} action="/submit_recipe" method="POST">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={username} readOnly required /><br /><br />
                <label htmlFor="recipeName">Recipe Name:</label>
                <input type="text" id="recipeName" name="recipeName" required /><br /><br />

                <label htmlFor="inspiration">Inspiration:</label>
                <input type="text" id="inspiration" name="inspiration" /><br /><br />

                <label htmlFor="specialtyDiets">Specialty Diets:</label>
                <select id="specialtyDiets" name="specialtyDiets">
                    <option value="Vegan">Vegan</option>
                    <option value="Gluten-Free">Gluten-Free</option>
                    <option value="Dairy-Free">Dairy-Free</option>
                    <option value="Grain-Free">Grain-Free</option>
                    <option value="Egg-Free">Egg-Free</option>
                </select><br /><br />

                <label htmlFor="categories">Categories:</label>
                <select id="categories" name="categories">
                    <optgroup label="Meal Times">
                        <option value="Breakfast">Breakfast</option>
                        <option value="Brunch">Brunch</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Dinner">Dinner</option>
                    </optgroup>
                    <optgroup label="Side Dishes">
                        <option value="Salads">Salads</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Grain">Grain</option>
                        <option value="Other">Other</option>
                    </optgroup>
                    <optgroup label="Desserts">
                        <option value="Cookies">Cookies</option>
                        <option value="Cakes">Cakes</option>
                        <option value="Pies">Pies</option>
                    </optgroup>
                    <optgroup label="Beverages">
                        <option value="For Minors">For Minors 🧃</option>
                        <option value="For Miners">For Miners 🍹⛏️</option>
                    </optgroup>
                </select><br /><br />

                <label htmlFor="serves">Serves:</label>
                <input type="number" id="serves" name="serves" min="1" required /> people<br /><br />

                <label htmlFor="recipeImage">Recipe Image:</label>
                <input type="file" id="recipeImage" name="recipeImage" accept="image/*" /><br /><br />

                <label htmlFor="prepHours">Prep Time:</label>
                <input type="number" id="prepHours" name="prepHours" min="0" placeholder="hrs" style={{ width: '70px' }} />
                <input type="number" id="prepMinutes" name="prepMinutes" min="0" max="59" placeholder="min" style={{ width: '70px' }} /><br /><br />

                <label htmlFor="cookHours">Cook Time:</label>
                <input type="number" id="cookHours" name="cookHours" min="0" placeholder="hrs" style={{ width: '70px' }} />
                <input type="number" id="cookMinutes" name="cookMinutes" min="0" max="59" placeholder="min" style={{ width: '70px' }} /><br /><br />

                <label htmlFor="totalHours">Total Time:</label>
                <input type="number" id="totalHours" name="totalHours" min="0" placeholder="hrs" style={{ width: '70px' }} />
                <input type="number" id="totalMinutes" name="totalMinutes" min="0" max="59" placeholder="min" style={{ width: '70px' }} /><br /><br />


                <label>Ingredients:</label><br />
                <div id="ingredients">
                    {ingredients.map((ingredient, index) => (
                        <div className="ingredient-row" key={index}>
                            <input
                                type="text"
                                className="ingredient-quantity"
                                name={`ingredient-quantity[${index}]`}
                                placeholder="Quantity"
                                value={ingredient.quantity}
                                onChange={(e) => handleChange(index, 'quantity', e)}
                            />
                            <select
                                className="ingredient-unit"
                                name={`ingredient-unit[${index}]`}
                                onChange={(e) => {
                                    const newIngredients = [...ingredients];
                                    newIngredients[index].unit = e.target.value;
                                    setIngredients(newIngredients);
                                }}
                            >
                                <option value=" "> </option>
                                <option value="g">g</option>
                                <option value="kg">kg</option>
                                <option value="oz">oz</option>
                                <option value="lb">lb</option>
                                <option value="ml">ml</option>
                                <option value="cl">cl</option>
                                <option value="dl">dl</option>
                                <option value="l">l</option>
                                <option value="tsp">tsp</option>
                                <option value="tbsp">tbsp</option>
                                <option value="fl oz">fl oz</option>
                                <option value="cup">cup</option>
                                <option value="pint">pint</option>
                                <option value="quart">quart</option>
                                <option value="gallon">gallon</option>
                                <option value="pinch">pinch</option>
                                <option value="piece">piece</option>
                                <option value="large">large</option>
                                <option value="small">small</option>
                            </select>
                            <input
                                type="text"
                                className="ingredient-name"
                                name={`ingredient-name[${index}]`}
                                placeholder="Ingredient"
                                value={ingredient.name}
                                onChange={(e) => handleChange(index, 'name', e)}
                            />
                        </div>
                    ))}
                    <button type="button" className="btn-add-ingredient" onClick={handleAddIngredient}>+</button>
                </div><br /><br />

                {/* Display formatted ingredients */}
                {submittedIngredients && (
                    <div>
                        <label>Formatted Ingredients:</label><br />
                        <textarea id="formattedIngredients" name="formattedIngredients" rows="8" cols="50" value={submittedIngredients} readOnly></textarea><br /><br />
                    </div>
                )}

                {/* Instructions */}
                <label htmlFor="instructions">Instructions:</label><br />
                <textarea id="instructions" name="instructions" rows="8" cols="50" required></textarea><br /><br />

                <input type="submit" value="Submit" />
            </form>

            {/* Login Popup */}
            {showLoginPopup && (
                <div className="login-popup">
                    <div className="overlay"></div>
                    <div className="popup-content">
                        <p>Please sign in first.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RecipeForm;


// Example for Johnson
// {
//     "username": "exampleUser",
//     "recipeName": "Banana Bread",
//     "inspiration": "My grandmother's recipe",
//     "specialtyDiets": "Vegetarian",
//     "categories": "Desserts",
//     "serves": 8,
//     "prepHours": 0,
//     "prepMinutes": 15,
//     "cookHours": 1,
//     "cookMinutes": 0,
//     "totalHours": 1,
//     "totalMinutes": 15,
//     "ingredients": [
//       { "quantity": "3", "unit": "", "name": "ripe bananas" },
//       { "quantity": "1/3", "unit": "cup", "name": "melted butter" },
//       { "quantity": "1", "unit": "cup", "name": "sugar" },
//       { "quantity": "1", "unit": "", "name": "egg, beaten" },
//       { "quantity": "1", "unit": "tsp", "name": "vanilla extract" },
//       { "quantity": "1", "unit": "tsp", "name": "baking soda" },
//       { "quantity": "pinch", "unit": "", "name": "salt" },
//       { "quantity": "1 1/2", "unit": "cup", "name": "all-purpose flour" }
//     ],
//     "formattedIngredients": "3 ripe bananas\n1/3 cup melted butter\n1 cup sugar\n1 egg, beaten\n1 tsp vanilla extract\n1 tsp baking soda\npinch of salt\n1 1/2 cups all-purpose flour",
//     "instructions": "1. Preheat oven to 350°F (175°C).\n2. Mash bananas in a mixing bowl.\n3. Stir in melted butter...\n8. Enjoy your delicious banana bread!"
//   }