import './App.css';
import Alerts from './components/Alerts';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0b042bff';
      showAlert('Dark Mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = '#ffffff';
      showAlert('Light Mode has been enabled', 'success');
    }
  }

  const [mode, setMode] = useState("light");
 
  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const [alert, setAlert] = useState(null);

  // setInterval(() =>{
  //   document.title = 'This is Amazing App';
  // }, 2000)

  // setInterval(() =>{
  //   document.title = 'Great Experience';
  // }, 1500)

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alerts alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={
            <TextForm 
              showAlert={showAlert} 
              heading="Try TextUtils - Word Counter, Character Counter, Copy, Speak and Clear Texts" 
              mode={mode}
            />
          } />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
