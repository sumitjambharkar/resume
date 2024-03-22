import React, { useEffect, useState } from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import "./App.css"
import Home from './components/Home';
import Footer from './components/Footer';
import Resume from './components/Resume';
import SignUp from './components/SignUp';
import Login from './components/Login';


const App = () => {
  

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])
  
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resume/:id' element={<Resume/>}/>
        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
