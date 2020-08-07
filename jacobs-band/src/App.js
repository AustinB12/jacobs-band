import React from "react";

import Header from "./components//header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/homePage/home";

import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
