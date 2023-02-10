import logo from './logo.svg';
import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import SchemesList from './components/SchemesList';
import Scheme from './components/Scheme';

function App() {
  const [schemesList, setSchemesList] = useState([Scheme, Scheme])

  

  return (
    <SchemesList schemesList = {schemesList}></SchemesList>
  );
}

export default App;
