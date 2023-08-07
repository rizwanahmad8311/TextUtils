import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
// import About from './components/About';
function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About Us" />
      <div className="container">
      <TextForm title="Enter Your Text Below" placeholder="Enter Text Here" />
      {/* <About/> */}
      </div>
        
      {/* <NavBar  /> */}
    </>

  );
}

export default App;
