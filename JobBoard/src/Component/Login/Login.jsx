import React from 'react'
import { Link } from 'react-router-dom';
// import './Home.css'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-2xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Login</h2>
        <form className="space-y-4">
          <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border border-gray-300 text-gray-800" />
          <input type="password" placeholder="Password" className="w-full p-3 rounded-lg border border-gray-300 text-gray-800" />
          <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Login</button>
        </form>
        <p className="mt-4 text-center text-gray-600">Don't have an account? 
          <Link to="/signup" className="text-blue-600 hover:underline"> Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default Login