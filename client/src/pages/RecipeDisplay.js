import React from 'react';
import '../styles/recipedisplay.css'; // Import the SCSS file

const RecipeDisplay = ({ recipe }) => {
    const {
        recipeName,
        inspiration,
        categories,
        serves,
        recipeImage,
        prepHours,
        prepMinutes,
        cookHours,
        cookMinutes,
        totalHours,
        totalMinutes,
        ingredients,
        instructions,
    } = recipe;

    return (
        <div className="recipe-container">
            <img src={recipeImage} alt={recipeName} className="recipe-image" />
            <h2 className="recipe-title">{recipeName}</h2>
            <div className="recipe-details">
                <span className="recipe-category">Categories:</span>
                <span className="recipe-info">{categories}</span>
                <span className="recipe-info">Insipiration: {inspiration}</span>
                <span className="recipe-info"> | Serves: {serves} people</span>
            </div>
            <h3>Ingredients:</h3>
            <ul className="ingredients-list">
                {ingredients.map((ingredient, index) => (
                    <li key={index} className="ingredient-item">{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <div className="recipe-instructions">{instructions}</div>
            <h3>Preparation Time:</h3>
            <div className="recipe-instructions">
                Prep Time: {prepHours} hrs {prepMinutes} min
            </div>
            <h3>Cook Time:</h3>
            <div className="recipe-instructions">
                Cook Time: {cookHours} hrs {cookMinutes} min
            </div>
            <h3>Total Time:</h3>
            <div className="recipe-instructions">
                Total Time: {totalHours} hrs {totalMinutes} min
            </div>
        </div>
    );
};

export default RecipeDisplay;
