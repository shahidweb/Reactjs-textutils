import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    document.body.style.backgroundColor = mode === 'light' ? '#07376d' : 'white'
  }

  return (
    <>
      <Navbar title="TextUtils2" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container mt-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
