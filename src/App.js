import './App.css';
import Routes from './components/Routes';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import RoutesPage from './components/RoutesPage';
import ReactGA from 'react-ga';


function initializeAnalytics() {
  ReactGA.initialize('UA-204383892-1');
  ReactGA.pageview('/PdfOperations');
}
/**
 * Here LandingPage is a default export and not a named export
 *  as it is export default from landing page
 */
function App() {
  initializeAnalytics();
  return (
    <div>
      {/* <header className="App-header"> */}
      {/* <Navbar /> */}

   <Routes />
        {/* <img src={test} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      {/* </header> */}
    </div>
  );
}

export default App;
