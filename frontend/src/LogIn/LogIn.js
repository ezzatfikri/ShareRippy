import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Authcontext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate
  const { login } = useAuth();

  const handleLogin = async (event) => {
      event.preventDefault(); // Prevent form from refreshing the page

      try {
          const response = await axios.post('http://localhost:3030/api/login', {
              email,
              password
            });

            if (response.data.user) {
            
              setMessage('Login successful!');
              login();
              navigate('/');  // Redirect to home page after successful login
          }
      } catch (error) {
          if (error.response) {
              setMessage(error.response.data.message);
            } else {
              setMessage('An error occurred. Please try again.');
            }
          }
        };
        
        AOS.init();
        
        return (
    <div className="container mt-5 mb-5" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
      <div className="row justify-content-center">
          <div className="col-md-5">
              <div className="card mt-3 p-4">
                  <div className="card-body bg-white">
                      <h2 className="text-center mb-4">Login</h2>
                      <form onSubmit={handleLogin}>
                          <div className="form-group">
                              <label htmlFor="email" className='text-start'>Email</label>
                              <input type="email" className="form-control" id="email" placeholder="Enter your email"
                                  value={email} onChange={(e) => setEmail(e.target.value)} />
                          </div>
                          <div className="form-group">
                              <label htmlFor="password" className='text-start'>Password</label>
                              <input type="password" className="form-control mb-4" id="password" placeholder="Enter your password"
                                  value={password} onChange={(e) => setPassword(e.target.value)} />
                          </div>
                          <button type="submit" className="btn btn-block custom-btn">Login</button>
                          {message && <p className="text-center font-weight-light mt-2">{message}</p>}
                          <p className='text-center font-weight-light'>Don't have an account? <a href="/register" className='text'>Sign Up</a></p>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
}

export default Login;
