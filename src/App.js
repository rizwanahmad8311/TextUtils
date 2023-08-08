import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alerts';
import {useState} from 'react'
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042730'
      showAlert("Dark Mode Has been Enabled","success")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Has been Enabled","success")
    }
  }
  return (
    <>
      <NavBar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
      <TextForm showAlert={showAlert} title="Enter Your Text Below" placeholder="Enter Text Here" mode={mode}/>
      {/* <About/> */}
      </div>
        
      {/* <NavBar  /> */}
    </>

  );
}

export default App;
