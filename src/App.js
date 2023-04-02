import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar title="TextUtils2" aboutText="About TextUtils"/>
    <div className="container">
      <TextForm heading="Enter the text to analyze below"/>
    </div>
    </>
  );
}

export default App;
