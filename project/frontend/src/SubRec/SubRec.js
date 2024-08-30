import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Subrec.css';

function SubRec() {
  const [recipeName, setRecipeName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [cookingSteps, setCookingSteps] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('recipeName', recipeName);
    formData.append('description', description);
    formData.append('ingredients', ingredients);
    formData.append('cookingSteps', cookingSteps);
    formData.append('difficulty', difficulty);
    formData.append('category', category);
    if (image) {
      formData.append('image', image);
    }

    axios.post("http://localhost:5000/subrecipe", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(res => { 
      console.log(res);
      navigate("/subrecipe");
      setSuccessMessage("Recipe submitted successfully!");
    })
    .catch(err => {
      console.error(err);
      setErrorMessage("Failed to submit recipe.");
    });
  }

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
                <input type="radio" id="easy" name="difficulty" className="subrec-radio" value="easy" checked={difficulty === 'easy'} onChange={() => setDifficulty('easy')} />
                <label htmlFor="easy" className="subrec-label">Easy</label>
              </div>
              <div>
                <input type="radio" id="medium" name="difficulty" className="subrec-radio" value="medium" checked={difficulty === 'medium'} onChange={() => setDifficulty('medium')} />
                <label htmlFor="medium" className="subrec-label">Medium</label>
              </div>
              <div>
              <input type="radio" id="hard" name="difficulty" className="subrec-radio" value="hard" checked={difficulty === 'hard'} onChange={() => setDifficulty('hard')} />
                <label htmlFor="hard" className="subrec-label">Hard</label>
              </div>
            </div>
          </div>
          <div className="subrec-column subrec-category">
            <div className="subrec-form-group">
              <label className="subrec-label">Category:</label>
              <div>
                <input type="radio" id="mdish" name="category" className="subrec-radio" value="mdish" checked={category === 'mdish'} onChange={(e) => setCategory(e.target.value)} />
                <label htmlFor="mdish" className="subrec-label">Main Dish</label>
              </div>
              <div>
                <input type="radio" id="beverage" name="category" className="subrec-radio" value="beverage" checked={category === 'beverage'} onChange={(e) => setCategory(e.target.value)} />
                <label htmlFor="beverage" className="subrec-label">Beverage</label>
              </div>
              <div>
                <input type="radio" id="dessert" name="category" className="subrec-radio" value="dessert" checked={category === 'dessert'} onChange={(e) => setCategory(e.target.value)} />
                <label htmlFor="dessert" className="subrec-label">Dessert</label>
              </div>
              <div>
                <input type="radio" id="other" name="category" className="subrec-radio" value="other" checked={category === 'other'} onChange={(e) => setCategory(e.target.value)} />
                <label htmlFor="other" className="subrec-label">Others</label>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="subrec-button">Submit Recipe</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
}

export default SubRec;