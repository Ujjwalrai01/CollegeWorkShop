import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Component/NavBar/HomePage/Home.jsx';
import Login from './Component/Login/Login.jsx';
import Signup from './Component/SignUp/SignUp.jsx';
import Dashboard from './Component/Dashboard/Dashboard.jsx';
// import Dashboard from './Component/Dashboard/Dashboard.jsx';
// import NavBar from './Component/NavBar/NavBar.jsx';
// import Footer from './Component/Footer/Footer.jsx';
// import { AuthProvider } from './Context/AuthContext.jsx'

function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>
    </>
  )
}

export default App
