import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './App.css';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = (event, type) => {
    if (type) {
      setMode(type);
      const color = type === 'danger' ? '#6f0707' : '#035203';
      document.body.style.backgroundColor = color;
      showAlert('success', `${type} mode has been enabled`);
      document.title = `TextUtils - ${type} Mode`;
    }
    else {
      if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#07376d';
        showAlert('success', 'Dark mode has been enabled');
        document.title = "TextUtils - Dark Mode";
      }
      else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
        showAlert('success', 'Light mode has been enabled');
        document.title = "TextUtils - Light Mode";
      }
    }
  }
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    });

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils2" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container mt-3">

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={
              <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
