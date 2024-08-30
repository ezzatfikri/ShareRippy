import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for HTTP requests

function RecDet({ recipeId }) {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`/get-recipe/${recipeId}`);
        setRecipe(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching recipe:', error);
        setError('Failed to fetch recipe');
        setIsLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  return (
    <div className="recipe-container">
      {isLoading ? (
        <p>Loading recipe data...</p>
      ) : error ? (
        <p>Error fetching recipe: {error}</p>
      ) : recipe ? (
        <div className="top-container">
          <div className="row">
            <div className="column image-column">
              <img src={recipe.image} alt="Recipe Image" />
            </div>
            <div className="column food-details">
              <h2>{recipe.recipe_name}</h2>
              <p>{recipe.description}</p>
              <h3>Ingredients</h3>
              <ul>
                {recipe.ingredients.split('\n').map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="column user-info">
              {/* ... user information */}
            </div>
          </div>
          <div className="sec-container">
            <div className="row">
              <div className="column difficulty">
                <h3>Difficulty</h3>
                <p>{recipe.difficulty}</p>
              </div>
              <div className="column cooking-steps">
                <h3>Cooking Steps</h3>
                <ol>
                  {recipe.cooking_steps.split('\n').map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="column comments">
                <h3>Comments</h3>
                {/* ... comments section */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default RecDet;