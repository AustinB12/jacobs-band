import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './pages/homePage/home';
import AboutPage from './pages/about/about';
import Footer from './components/footer/footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          
          <p>
            Website Under Construction for Jacobs Band!
          </p>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
          <Switch className='page-switch'>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/">
            <HomePage />
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
