import React from "react";

import Header from "./components//header/header";
import HeaderLogo from "./components//header/headerlogo";
import Footer from "./components/footer/footer";


import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderLogo />
      <Footer />
    </div>
  );
}

export default App;
