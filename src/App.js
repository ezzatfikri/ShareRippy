import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './NavBar/Navigation'
import Home from './Home/Home'
import Category from './Category/Category'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import Register from './Register/Register'
import LogIn from './LogIn/LogIn'
import './App.css'
function App() {
    return (
      
      <>
       <Router>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ctg' element={<Category />} />
            <Route path='/prf' element={<Profile/>} />
            <Route path='/login' element={<LogIn />} />
  
          </Routes>
  
          <Footer />
        </Router>
      </ >
    )
  }
  
  export default App