import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const login = (e) => {
        e.preventDefault();
        console.log(email,password);
    }

  return (
    <section className="w-full text-gray-600 body-font relative flex justify-center items-center h-screen">
    <form onSubmit={login} className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full md:mt-0 relative z-10 shadow-md mx-auto">
      <h2 className="text-gray-900 text-center text-lg mb-1 font-medium title-font">
      Sign Up
    </h2>
    <div className="relative mb-4">
      <label htmlFor="email" className="leading-7 text-sm text-gray-600">
        Email
      </label>
      <input
       required
       value={email}
      onChange={(e)=>setEmail(e.target.value)}
        type="email"
        id="email"
        name="email"
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <div className="relative mb-4">
      <label htmlFor="email" className="leading-7 text-sm text-gray-600">
        Password
      </label>
      <input
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      required
        type="password"
        id="password"
        name="password"
        className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Log In
    </button>
    <p class="text-md text-center text-gray-500 mt-3"><Link to="/register">Not Account ! Please Create Account</Link></p>
  </form>
</section>
  )
}

export default Login
