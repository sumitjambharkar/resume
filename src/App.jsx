import React from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import "./App.css"
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
