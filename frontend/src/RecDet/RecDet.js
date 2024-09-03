import React, { useState } from 'react';
import './RecDet.css';

function RecDet() {
  // ... rest of your component

  return (
    <div className="recipe-container">
      <div className="top-container">
        <div className="row">
          <div className="column image-column">
            <img src="/your-image.jpg" alt="Recipe Image" />
          </div>
          <div className="column food-details">
            <h2>Food Title</h2>
            <p>Food description</p>
            <h3>Ingredients</h3>
            <ul>
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              {/* ... */}
            </ul>
          </div>
          <div className="column user-info">
            <img src="/user.png" alt="User Profile" />
            <span>Username</span>
            <div className="rating">
              {/* Add rating stars here */}
            </div>
          </div>
        </div>
        <div className="sec-container">
        <div className="row">
            <div className="column difficulty">
              <h3>Difficulty</h3>
              <p>Easy</p>
            </div>
          <div className="column cooking-steps">
            <h3>Cooking Steps</h3>
            <ol>
              <li>Step 1</li>
              <li>Step 2</li>
              {/* ... */}
            </ol>
          </div>
          <div className="column comments">
            <h3>Comments</h3>
            {/* ... comments section */}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default RecDet;
