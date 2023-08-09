import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alerts';
import { useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042730'
      showAlert("Dark Mode Has been Enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Has been Enabled", "success")
    }
  }

  return (
    <>
      
      <BrowserRouter>
      <NavBar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <Routes>
        <Route path="TextUtils/" element={<TextForm showAlert={showAlert} title="Enter Your Text Below" placeholder="Enter Text Here" mode={mode} />} />
        <Route path="TextUtils/home" element={<TextForm showAlert={showAlert} title="Enter Your Text Below" placeholder="Enter Text Here" mode={mode} />} />
        <Route path="TextUtils/about" element={<About mode={mode} />} />
      </Routes>
      </BrowserRouter>



    </>



  );
}

export default App;
