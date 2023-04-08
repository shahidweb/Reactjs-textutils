import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#07376d';
      showAlert('success', 'Dark mode has been enabled')
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('success', 'Light mode has been enabled')
    }
  }
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    });

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <Navbar title="TextUtils2" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container mt-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
