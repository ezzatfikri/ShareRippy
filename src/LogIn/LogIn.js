import React from 'react';
import './LogIn.css';

function Login() {
    return (
        <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label For="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="input-group">
            <label For="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="login-button">Login</button>
          <p>Don't have an account? <a href='Register'>Sign Up</a></p>
        </form>
      </div>
    </div>
    );
}

export default Login;
