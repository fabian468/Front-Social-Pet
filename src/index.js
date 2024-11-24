import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './styles/responsive/loginResponsive.css'
import './styles/responsive/homeResponsive.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './page/Login';
import Principal from './page/Principal';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Router>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home/*' element={<Principal />} />

      </Routes>
    </Router>
  </React.StrictMode>

);

