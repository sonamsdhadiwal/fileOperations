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
  <React.Fragment>
  <Router>
    <NavigationBar />
    <RoutesPage />
  </Router>
</React.Fragment>
  )
}

export default App;
