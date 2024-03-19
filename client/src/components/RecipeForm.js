import React from 'react';

function RecipeForm() {
    return (
        <div className="recipe-form-container"> {/* Changed class name */}
            <h2>Add New Recipe</h2>
            {/* Content */}
            <div className="add-recipe-form">
                {/* Add recipe form goes here */}
                <form action="/submit_recipe" method="POST">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required /><br /><br />

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
                        {/* Options here */}
                    </select><br /><br />

                    <label htmlFor="serves">Serves:</label>
                    <input type="number" id="serves" name="serves" min="1" required /> people<br /><br />
                    
                    {/* Recipe Image */}
                    <label htmlFor="recipeImage">Recipe Image:</label>
                    <input type="file" id="recipeImage" name="recipeImage" accept="image/*" /><br /><br />

                    {/* Prep Time */}
                    <label htmlFor="prepHours">Prep Time:</label>
                    <input type="number" id="prepHours" name="prepHours" min="0" placeholder="hrs" style={{ width: '70px' }} />
                    <input type="number" id="prepMinutes" name="prepMinutes" min="0" max="59" placeholder="min" style={{ width: '70px' }} /><br /><br />

                    {/* Cook Time */}
                    <label htmlFor="cookHours">Cook Time:</label>
                    <input type="number" id="cookHours" name="cookHours" min="0" placeholder="hrs" style={{ width: '70px' }} />
                    <input type="number" id="cookMinutes" name="cookMinutes" min="0" max="59" placeholder="min" style={{ width: '70px' }} /><br /><br />

                    {/* Total Time */}
                    <label htmlFor="totalHours">Total Time:</label>
                    <input type="number" id="totalHours" name="totalHours" min="0" placeholder="hrs" style={{ width: '70px' }} />
                    <input type="number" id="totalMinutes" name="totalMinutes" min="0" max="59" placeholder="min" style={{ width: '70px' }} /><br /><br />
                    {/* Ingredients */}
                    <label>Ingredients:</label><br />
                    <div id="ingredients">
                        <div className="ingredient-row">
                            <input type="text" className="ingredient-quantity" name="ingredient-quantity[]"
                                placeholder="Quantity" />
                            <select className="ingredient-unit" name="ingredient-unit[]">
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
                            </select>
                            <input type="text" className="ingredient-name" name="ingredient-name[]" placeholder="Ingredient" />
                            <button type="button" className="btn-add-ingredient">+</button>
                        </div>
                    </div><br /><br />

                    <label htmlFor="instructions">Instructions:</label><br />
                    <textarea id="instructions" name="instructions" rows="8" cols="50" required></textarea><br /><br />

                    <input type="submit" value="Submit" />
                    </form>
            </div>
        </div>
    );
}

export default RecipeForm;