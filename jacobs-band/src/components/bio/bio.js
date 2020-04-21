import React from "react";

import selfie from "../../assets/bioPic.png";

import "../../styles/components/bio.scss";
import "../../assets/bioPic.png";

const Bio = () => {
  return (
    <div className="bio-container">
      <img src={selfie} alt="Something went wrong :(" />
    </div>
  );
};

export default Bio;
