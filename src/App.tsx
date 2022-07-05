import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [strMsg, setStrMsg] = useState("String Message");

  useEffect( () => {
    fetch("http://localhost:8080/string")
    .then(e=> e.text())
    .then(d=>console.log(d));

    fetch("http://localhost:8080/json")
    .then(e=> e.json())
    .then(d=>console.log(d));
    
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>PSKIM KABANG</p>
        <p>{strMsg}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;