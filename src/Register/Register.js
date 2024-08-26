import React from 'react';
import './Register.css'; // Import your CSS file for additional styling

function Register () {
 

  return (
    <div className="container mb-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5 p-4">
                        <div className="card-body bg-white">
                            <h2 className="c-text-center mb-4">Sign Up</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name" className='text-start'>Full Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className='text-start'>Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className='text-start'>Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Create a password" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirm-password" className='text-start'>Confirm Password</label>
                                    <input type="password" className="form-control" id="confirm-password" placeholder="Confirm your password" />
                                </div>
                                <button type="submit" className="btn btn-block custom-btn mt-2">Sign Up</button>
                                <p className='b-text-center font-weight-light'>Already have an account? <a href="/login" class='text'>Login</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Register;
