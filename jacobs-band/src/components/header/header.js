import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "../../pages/homePage/home";
import AboutPage from "../../pages/about/about";

const Header = () => {
  return (
    <Router>
      <div className="App-header">
        <p>Website Under Constructionzzz for Jacobs Band!</p>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <Switch className="page-switch">
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Header;
