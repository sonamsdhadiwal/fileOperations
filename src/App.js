import React, { useState, useEffect } from 'react';

import { API } from 'aws-amplify';

import logo from './logo.svg';
import './App.css';

import Routes from './Routes'
import Navbar from './Navbar'

function App() {
  const [merge, setMerge] = useState(null)
  async function fetchMerge() {
    const apiData = await API.get('mypythonapi','/merge')
    setMerge(apiData.message)
  }
  useEffect(() => {
    fetchMerge()
  },[])
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Routes />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{merge}</h1>
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
