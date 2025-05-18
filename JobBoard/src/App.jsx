import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
// import Home from './Component/NavBar/HomePage/Home.jsx';
// import Login from './Component/Login/Login.jsx';
// import Signup from './Component/SignUp/SignUp.jsx';
// import Dashboard from './Component/Dashboard/Dashboard.jsx';
import LandingPage from './pages/LandingPage.jsx';


function App() {

  return (
    <>
      <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path='/' element={<LandingPage />} />

    </Routes>
    </>
  )
}

export default App
