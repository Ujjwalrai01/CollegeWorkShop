import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
// import Home from './Component/NavBar/HomePage/Home.jsx';
// import Login from './Component/Login/Login.jsx';
// import Signup from './Component/SignUp/SignUp.jsx';
// import Dashboard from './Component/Dashboard/Dashboard.jsx';
import LandingPage from './pages/LandingPage.jsx';
import UserSide from './pages/UserSide.jsx';
import Resume from './pages/Resume.jsx';
import Home from './pages/Home.jsx';
import AuthForm from './pages/AuthForm.jsx';
import PostJob from './pages/PostJob.jsx';
import Chat from './pages/Chat.jsx';
import AdminPanel from './Admin/Admin.jsx';


function App() {

  return (
    <>
      <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} /> */}
      <Route path='/' element={<Home />} />
      <Route path='/landingpage' element={<LandingPage />} />
      <Route path='/user' element={<UserSide />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/signin' element={<AuthForm />} />
      <Route path='/post' element={<PostJob />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/admin' element={<AdminPanel />} />
      {/* Add more routes as needed */}

    </Routes>
    </>
  )
}

export default App
