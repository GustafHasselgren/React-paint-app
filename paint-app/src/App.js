
import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import Navbar from './components/navbar';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import About from './components/routes/about';
import Home from './components/routes/home';
import SchemeAreas from './components/routes/schemeAreas';

export default function App() {
  

  return (
      <Router>
        <div>
          <Navbar addScheme={() => {}}></Navbar>
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/about' element={< About />}></Route>
            <Route path='/scheme/' element={< SchemeAreas />}></Route>
          </Routes>
        </div>
      </Router>
  );
};

