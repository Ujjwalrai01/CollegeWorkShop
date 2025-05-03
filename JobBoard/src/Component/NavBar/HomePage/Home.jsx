import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
// console.log('Home component rendered');

const Home = () => {
    console.log('Home component rendered');
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-400 to-purple-500">
    <h1 className="text-5xl font-bold text-white mb-6">Find Your Dream Job</h1>
    <p className="text-white text-lg mb-8">Connecting talents with opportunities.</p>
    <div className="flex space-x-4">
      <Link to="/login" className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-md hover:bg-blue-100 transition">
        Login
      </Link>
      <Link to="/signup" className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl shadow-md hover:bg-purple-100 transition">
        Sign Up
      </Link>
      {/* <Link to="/dashboard" className="text-blue-600 hover:underline">Go to Dashboard</Link> */}
    </div>
  </div>
);
};

export default Home;