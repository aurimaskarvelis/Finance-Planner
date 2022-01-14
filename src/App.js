import React, { useState, useEffect } from "react";
import Header from './Components/Header';
import { Outlet, Link } from "react-router-dom";
import useAuth from "./services/firebase/useAuth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./config/firebase";

import { useNavigate, useLocation } from 'react-router-dom';


import './assets/css/main.css';
import './App.css';

function App() {
  
  const app = initializeApp(firebaseConfig);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  let logged = false;
  let message;

  if(isAuthenticated){
    logged = true;
    if(location.pathname === '/'){ navigate('/dashboard'); }
  }

  if(location.pathname === '/' && logged === false){
    message = 'Please login/register to access the dashboard!';
  }

  if(!isAuthenticated && (location.pathname === '/dashboard' || location.pathname === '/mortgages' || location.pathname === '/savings')){
    navigate('/');
  }

  return (
    <div>
      <nav>
        <Header />
      </nav>
      {message &&
        <h2>
          You have unread messages.
        </h2>
      }
      <Outlet />
    </div>
  );
}



export default App;
