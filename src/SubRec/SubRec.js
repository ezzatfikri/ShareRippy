import React, { useState } from 'react';
import './Subrec.css';

function SubRec() {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [description, setDescription] = useState('');
  const [cookingSteps, setCookingSteps] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ recipeName, ingredients, description, cookingSteps, difficulty, image });
  };


  return (
    <div className="container">
      <div className="container1 row">
        <div className="column image-upload">
          <div className="form-group">
            <label htmlFor="image">Upload Image:</label>
            <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} />
          </div>
          <button type="submit" onClick={handleSubmit}>Upload</button>
        </div>
        <div className="column recipe-details">
          <div className="form-group">
            <label htmlFor="recipeName">Recipe Name:</label>
            <input type="text" id="recipeName" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
        </div>
        <div className="column recipe-ingredients">
        <div className="form-group">
            <label htmlFor="ingredients">Ingredients:</label>
            <textarea id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
          </div>
          </div>
      </div>
      <div className="container2 row">
        <div className="column cooking-steps">
          <div className="form-group">
            <label htmlFor="cookingSteps">Cooking Steps:</label>
            <textarea id="cookingSteps" value={cookingSteps} onChange={(e) => setCookingSteps(e.target.value)} />
          </div>
        </div>
        <div className="column difficulty">
          <div className="form-group">
            <label htmlFor="difficulty">Level of Difficulty:</label>
            <input type="radio" id="easy" name="difficulty" value="easy" checked={difficulty === 'easy'} onChange={() => setDifficulty('easy')} />
            <label htmlFor="easy">Easy</label>
            <input type="radio" id="medium" name="difficulty" value="medium" checked={difficulty === 'medium'} onChange={() => setDifficulty('medium')} />
            <label htmlFor="medium">Medium</label>
            <input type="radio" id="hard" name="difficulty" value="hard" checked={difficulty === 'hard'} onChange={() => setDifficulty('hard')} />
            <label htmlFor="hard">Hard</label>
          </div>
        </div>
        <div className="container">
      {/* ... rest of your form elements */}
      <button type="submit" onClick={handleSubmit}>Submit Recipe</button>
    </div>
      </div>
    </div>
  );
}

export default SubRec;
