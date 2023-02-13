import logo from './logo.svg';
import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import SchemesList from './components/SchemesList';
import Scheme from './components/Scheme';
import Navbar from './components/navbar';

function App() {
  const [schemesList, setSchemesList] = useState([Scheme, Scheme,])

  function addScheme(scheme) {
    setSchemesList((schemesList) => {
      return [...schemesList, scheme];
    });
  };

  return (
    <div>
      <Navbar addScheme={addScheme}></Navbar>
      <SchemesList schemesList = {schemesList}></SchemesList>
    </div>
  );
};

export default App;
