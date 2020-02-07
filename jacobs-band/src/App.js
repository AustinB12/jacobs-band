import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          
          <p>
            Website Under Construction for Jacobs Band!
          </p>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </header>

          <Switch>
            <Route path="/about">
              <h2>About</h2>
            </Route>
            <Route path="/users">
            <h2>Users</h2>
            </Route>
            <Route path="/">
            <h2>Home</h2>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
