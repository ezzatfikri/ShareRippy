import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
import { useAuth } from '../Authcontext'

function Navigation() {
    const { isAuthenticated, logout } = useAuth()

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" to="/"><img src="favicon.ico" alt="logo" id='logo' /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-link" to="ctg">Category</Link>
                        
                        </li>
                        {isAuthenticated &&(
                        <li class="nav-item active">
                            <Link class="nav-link" to="prf">Profile</Link>
                        </li>
                        )}
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        {!isAuthenticated ? (
                            <Link class="btn btn-outline-success" to="login">Login</Link>
                        ) : (
                            <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
                        )}
                    </form>

                </div>
            </nav>
        </div>
    )
}

export default Navigation