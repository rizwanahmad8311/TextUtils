import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
// import About from './components/About';
import {useState} from 'react'
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode==='light') {
      document.body.style.backgroundColor = '#042730'
      setMode('dark')
    }else{
      document.body.style.backgroundColor = 'white'
      setMode('light')
    }
  }
  return (
    <>
      <NavBar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container">
      <TextForm title="Enter Your Text Below" placeholder="Enter Text Here" mode={mode}/>
      {/* <About/> */}
      </div>
        
      {/* <NavBar  /> */}
    </>

  );
}

export default App;
