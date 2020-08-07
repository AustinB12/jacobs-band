import React from "react";

import Bio from "../../components/bio/bio";
import Videos from "../../pages/videos/videos";
import Merch from "../../pages/merch/merchandise";
import Contact from "../../pages/contact/contact";

import "../../styles/pages/home.scss";

const HomePage = () => {
  return (
    <div className={"home-container"}>
      <Bio />
      <Videos />
      <Merch />
      <Contact />
    </div>
  );
};

export default HomePage;
