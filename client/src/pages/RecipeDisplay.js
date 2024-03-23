import React from 'react';
import '../styles/recipedisplay.css'; // Import the SCSS file
import recipes from './recipies.json'; // Import the recipe data

const RecipeDisplay = () => {
    // Access the first recipe from the imported JSON file (assuming only one recipe for now)
    const recipe = recipes.recipes[0];

    const {
        recipeName,
        username,
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
        formattedIngredients,
        instructions,
    } = recipe;

    return (
        <div className="recipe-container">
            <img src={recipeImage} alt={recipeName} className="recipe-image" />
            <p style={{ textAlign: 'right' }}>Nomilicious Contribution By: {username}</p>
            <h2 className="recipe-title">{recipeName}</h2>
            <div className="recipe-details">
                <span className="recipe-category">Categories:</span>
                <span className="recipe-info">{categories.join(', ')}</span>
                <span className="recipe-info"> | Inspiration: {inspiration}</span>
                <span className="recipe-info"> | Serves: {serves} people</span>
            </div>
            <h3>Ingredients:</h3>
            <ul className="ingredients-list">
    {formattedIngredients.map((ingredient, index) => (
        <li key={index} className="ingredient-item">{ingredient}</li>
    ))}
</ul>
            <h3>Instructions:</h3>
            <div className="recipe-instructions">{instructions.map((step, index) => <p key={index}>{step}</p>)}</div>
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




// import React from 'react';
// import '../styles/recipedisplay.css'; // Import the SCSS file

// const RecipeDisplay = ({ recipe }) => {
//     const {
//         recipeName,
//         inspiration,
//         categories,
//         serves,
//         recipeImage,
//         prepHours,
//         prepMinutes,
//         cookHours,
//         cookMinutes,
//         totalHours,
//         totalMinutes,
//         ingredients,
//         instructions,
//     } = recipe;

//     return (
//         <div className="recipe-container">
//             <img src={recipeImage} alt={recipeName} className="recipe-image" />
//             <h2 className="recipe-title">{recipeName}</h2>
//             <div className="recipe-details">
//                 <span className="recipe-category">Categories:</span>
//                 <span className="recipe-info">{categories}</span>
//                 <span className="recipe-info">Insipiration: {inspiration}</span>
//                 <span className="recipe-info"> | Serves: {serves} people</span>
//             </div>
//             <h3>Ingredients:</h3>
//             <ul className="ingredients-list">
//                 {ingredients.map((ingredient, index) => (
//                     <li key={index} className="ingredient-item">{ingredient}</li>
//                 ))}
//             </ul>
//             <h3>Instructions:</h3>
//             <div className="recipe-instructions">{instructions}</div>
//             <h3>Preparation Time:</h3>
//             <div className="recipe-instructions">
//                 Prep Time: {prepHours} hrs {prepMinutes} min
//             </div>
//             <h3>Cook Time:</h3>
//             <div className="recipe-instructions">
//                 Cook Time: {cookHours} hrs {cookMinutes} min
//             </div>
//             <h3>Total Time:</h3>
//             <div className="recipe-instructions">
//                 Total Time: {totalHours} hrs {totalMinutes} min
//             </div>
//         </div>
//     );
// };

// export default RecipeDisplay;
