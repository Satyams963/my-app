import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';
// import { useState } from 'react';
import About from './components/About';

function App() {
  // const [Mode, setMode] = useState ("light")
  return (
    <>
    <Navbar title="TextUtils" aboutText="About Us" />
    
    <TextForm heading="Enter the text to analyze"/>

    <About/>
    </>
  );
}

export default App;
