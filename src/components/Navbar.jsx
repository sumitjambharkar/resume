import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

          <span className="ml-3 text-3xl">Resume</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link to="/" className="mr-5 hover:text-blue-500">Home</Link>
          <Link target='_blank' to="https://www.itorbitnation.com" className="mr-5 hover:text-blue-500">Digital Marketing</Link>

          <Link target='_blank' to="https://cleannation.in" className="mr-5 hover:text-blue-500">Cleaning Service</Link>
          <Link target='_blank' to="https://sumitjambharkar.netlify.app" className="mr-5 hover:text-blue-500">Contact Us</Link>
          <Link to="/login" className="mr-5 hover:text-blue-500">Log In</Link>
        </nav>
        <button className="inline-flex items-center text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-700 rounded-3xl text-base mt-4 md:mt-0">
          <Link to="/register">Sign Up</Link>
        </button>
      </div>
    </header>

  )
}

export default Navbar
