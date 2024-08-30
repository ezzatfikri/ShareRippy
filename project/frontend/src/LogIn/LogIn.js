import React from 'react';
import './LogIn.css';

function Login() {
    return (
      <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
          <div className="col-md-5">
              <div className="card mt-3 p-4">
                  <div className="card-body bg-white">
                      <h2 className="a-text-center mb-4">Login</h2>
                      <form>
                          <div className="form-group">
                              <label htmlFor="email" className='a-text-start'>Email</label>
                              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                          </div>
                          <div className="form-group">
                              <label htmlFor="password" className='a-text-start'>Password</label>
                              <input type="password" className="form-control mb-4" id="password" placeholder="Enter your password" />
                          </div>
                          <button type="submit" className="btn btn-block custom-btn">Login</button>
                          <p className='b-text-center font-weight-light'>Don't have an account? <a href="/register" class='text'>Sign Up</a></p>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
}

export default Login;
