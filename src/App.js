import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (

    <Router>
      <Navbar title={"Satyam's Text Editor"} mode={mode} toggleMode={toggleMode} />
      <Routes>
          <Route path="/about" element={<About mode={mode} />}/>
          <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
