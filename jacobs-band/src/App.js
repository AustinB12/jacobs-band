import React from "react";

import HeaderLogo from "./components//header/headerlogo";
import Header from "./components//header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/homePage/home";

import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderLogo />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
