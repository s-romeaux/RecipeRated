import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

   // Log the id to check if it's being passed correctly
   console.log('Recipe ID:', id);

   // Log when the component renders
   console.log('RecipeDetails component rendered');

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/recipes/${id}`);
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched Recipe:', data); // Log the fetched recipe data
          setRecipe(data);
        } else {
          throw new Error('Failed to fetch recipe details');
        }
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  console.log('Recipe:', recipe); // Log the recipe state

  return (
    <div>
      {recipe && (
        <div>
          <h2>{recipe.recipeName}</h2>
          <p>Submitted by: {recipe.username}</p>
          <p>Inspiration: {recipe.inspiration}</p>
          <p>Specialty Diets: {recipe.specialtyDiets}</p>
          <p>Categories: {recipe.categories}</p>
          <p>Serves: {recipe.serves}</p>
          <p>Prep Time: {recipe.prepTime.hours} hours {recipe.prepTime.minutes} minutes</p>
          <p>Cook Time: {recipe.cookTime.hours} hours {recipe.cookTime.minutes} minutes</p>
          <p>Total Time: {recipe.totalTime.hours} hours {recipe.totalTime.minutes} minutes</p>
          <h3>Ingredients:</h3>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                {ingredient.quantity} {ingredient.unit} {ingredient.name}
              </li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <p>{recipe.instructions}</p>
        </div>
      )}
    </div>
  );
}

export default RecipeDetails;
