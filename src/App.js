import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title="TextUtils2" aboutText="About TextUtils" />
      <div className="container mt-3">
        {/* <TextForm heading="Enter the text to analyze below" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
