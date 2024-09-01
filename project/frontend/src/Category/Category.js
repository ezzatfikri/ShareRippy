import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Category.css';

function Category() {
  const [selectedCategory, setSelectedCategory] = useState('default');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = () => {
      fetch('http://localhost:5000/subrecipe')
        .then((response) => response.json())
        .then((data) => {
          console.log("Fetched Recipes: ", data); // Check this output
          setRecipes(data);
        })
        .catch((error) => console.error('Error fetching recipes:', error));
    };
  
    fetchRecipes();
  }, []);
  
   

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const renderContent = () => {
    const filteredRecipes = recipes.filter(
      (recipe) => recipe.category === selectedCategory
    );

    if (filteredRecipes.length === 0) {
      return (
        <div>
          <p>No recipes found in this category.</p>
        </div>
      );
    }

    return (
      <div className="row">
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className="col-md-4">
            <div className="card">
              <img
                src={`data:image/jpeg;base64,${recipe.image}`}
                className="card-img-top"
                alt={recipe.recipe_name}
              />
              <div className="card-body">
                <h5 className="card-title">{recipe.recipe_name}</h5>
                <p className="card-text">{recipe.description}</p>
                <a href={`#${recipe.recipe_name.replace(/\s+/g, '-').toLowerCase()}`} className="btn btn-primary">View Recipe</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="category-container">
      <nav className="side-nav">
        <h4>Recipes Category:</h4>
        <ul>
          <li>
            <a href="#main dish" onClick={() => handleCategoryClick('mdish')}>Main Dish</a>
          </li>
          <li>
            <a href="#beverage" onClick={() => handleCategoryClick('beverage')}>Beverage</a>
          </li>
          <li>
            <a href="#dessert" onClick={() => handleCategoryClick('dessert')}>Dessert</a>
          </li>
          <li>
            <a href="#others" onClick={() => handleCategoryClick('other')}>Others</a>
          </li>
        </ul>
      </nav>
      <div className="category-content">
        {selectedCategory === 'default' ? (
          <div className="card">
            <div className="card-body">
              <h1 className="card-title">Category</h1>
              <p className="card-text">Select a category from the sidebar to explore.</p>
            </div>
          </div>
        ) : (
          renderContent()
        )}
      </div>
    </div>
  );
}

export default Category;

