import React from 'react'
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-2xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">Sign Up</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full p-3 rounded-lg border border-gray-300 text-gray-800" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded-lg border border-gray-300 text-gray-800" />
          <input type="password" placeholder="Password" className="w-full p-3 rounded-lg border border-gray-300 text-gray-800" />
          <button className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition ">Sign Up</button>
        </form>
        <p className="mt-4 text-center text-gray-600">Already have an account? 
          <Link to="/login" className="text-purple-600 hover:underline"> Login</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp