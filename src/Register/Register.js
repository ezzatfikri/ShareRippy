import React from 'react';
import './Register.css'; // Import your CSS file for additional styling

function Register () {
 

  return (
    <div class="signup-container">
        <div class="signup-box">
            <h2>Sign Up</h2>
            <form>
                <div class="input-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" placeholder="Enter your full name" required/>
                </div>
                <div class="input-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" required/>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Create a password" required/>
                </div>
                <div class="input-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" placeholder="Confirm your password" required/>
                </div>
                <button type="submit" class="signup-button">Sign Up</button>
                <p>Already have an account? <a href='LogIn'>Log In</a></p>
            </form>
        </div>
    </div>
  );
};

export default Register;
