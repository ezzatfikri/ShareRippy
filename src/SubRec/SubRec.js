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
    console.log({ recipeName, ingredients, description, cookingSteps, difficulty, image });
  };

  return (
    <div className="subrec-container">
      <form onSubmit={handleSubmit}>
        <div className="subrec-row subrec-top-row">
          <div className="subrec-column subrec-image-upload">
            <div className="subrec-form-group">
              <label htmlFor="image" className="subrec-label">Upload Image:</label>
              <input type="file" id="image" className="subrec-input" onChange={(e) => setImage(e.target.files[0])} />
            </div>
          </div>
          <div className="subrec-column subrec-recipe-details">
            <div className="subrec-form-group">
              <label htmlFor="recipeName" className="subrec-label">Recipe Name:</label>
              <input type="text" id="recipeName" className="subrec-input" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
            </div>
            <div className="subrec-form-group">
              <label htmlFor="description" className="subrec-label">Description:</label>
              <textarea id="description" className="subrec-textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
          </div>
          <div className="subrec-column subrec-recipe-ingredients">
            <div className="subrec-form-group">
              <label htmlFor="ingredients" className="subrec-label">Ingredients:</label>
              <textarea id="ingredients" className="subrec-textarea" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="subrec-row subrec-bottom-row">
          <div className="subrec-column subrec-cooking-steps">
            <div className="subrec-form-group">
              <label htmlFor="cookingSteps" className="subrec-label">Cooking Steps:</label>
              <textarea id="cookingSteps" className="subrec-textarea" value={cookingSteps} onChange={(e) => setCookingSteps(e.target.value)} />
            </div>
          </div>
          <div className="subrec-column subrec-difficulty">
            <div className="subrec-form-group">
              <label htmlFor="difficulty" className="subrec-label">Level of Difficulty:</label>
              <div>
                <input type="radio" id="easy" name="difficulty" className="subrec-input" value="easy" checked={difficulty === 'easy'} onChange={() => setDifficulty('easy')} />
                <label htmlFor="easy" className="subrec-label">Easy</label>
              </div>
              <div>
                <input type="radio" id="medium" name="difficulty" className="subrec-input" value="medium" checked={difficulty === 'medium'} onChange={() => setDifficulty('medium')} />
                <label htmlFor="medium" className="subrec-label">Medium</label>
              </div>
              <div>
                <input type="radio" id="hard" name="difficulty" className="subrec-input" value="hard" checked={difficulty === 'hard'} onChange={() => setDifficulty('hard')} />
                <label htmlFor="hard" className="subrec-label">Hard</label>
              </div>
            </div>
          </div>
        </div>
        <div className="subrec-submit-container">
          <button type="submit" className="subrec-button">Submit Recipe</button>
        </div>
      </form>
    </div>
  );
}

export default SubRec;
