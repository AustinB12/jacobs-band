import React from "react";

import Bio from "../../components/bio/bio";

import "../../styles/pages/home.scss";

const HomePage = () => {
  return (
    <div className={"home-container"}>
      <h1>Home Page</h1>
      <Bio></Bio>
    </div>
  );
};

export default HomePage;
