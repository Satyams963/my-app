import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
import React from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
 
  return (

    <Router>
      <Navbar/>
      <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<TextForm heading="Enter the text to analyze"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
