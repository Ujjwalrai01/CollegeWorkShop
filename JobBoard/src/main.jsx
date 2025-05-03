import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
// import Nav from './Component/NavBar/Nav.jsx'
import Home from './Component/NavBar/HomePage/Home.jsx'
import Login from './Component/Login/Login.jsx';
import SignUp from './Component/SignUp/SignUp.jsx';
import Dashboard from './Component/Dashboard/Dashboard.jsx';

createRoot(document.getElementById('root')).render(

    
    <BrowserRouter>
      <App />
    {/* <Nav/> */}
    <Home/>
    <Login/>
    <SignUp/>
    <Dashboard/>
    </BrowserRouter>
  ,
)
