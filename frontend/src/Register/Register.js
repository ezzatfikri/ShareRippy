import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';
function Register () {
 
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSignup = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3030/api/register', {
                username,
                email,
                password,
                confirmPassword
            });

            setMessage(response.data.message);

            if (response.status === 201) { // Check if signup is successful
                navigate('/login'); // Redirect to login page
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
    <div className="container mb-5" data-aos="zoom-in">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5 p-4">
                        <div className="card-body bg-white">
                            <h2 className="text-center mb-4">Sign Up</h2>
                            <form onSubmit={handleSignup}>
                                <div className="form-group">
                                    <label htmlFor="name" className='text-start'>Username</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your username"
                                        value={username} onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className='text-start'>Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email"
                                        value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className='text-start'>Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Create a password"
                                        value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirm-password" className='text-start'>Confirm Password</label>
                                    <input type="password" className="form-control" id="confirm-password" placeholder="Confirm your password"
                                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                                <button type="submit" className="btn btn-block custom-btn mt-2">Sign Up</button>
                                {message && <p className="text-center font-weight-light mt-2">{message}</p>}
                                <p className='text-center font-weight-light'>Already have an account? <a href="/login" className='text'>Login</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default Register;
