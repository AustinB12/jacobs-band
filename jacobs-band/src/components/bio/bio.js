import React from "react";

import selfie from "../../assets/bioPic.png";

import "../../styles/components/bio.scss";

const Bio = () => {
  return (
    <div className="bio-container">
      <img src={selfie} align="left" alt="Something went wrong :(" />
      <h2>The man behind Blue Karma</h2>
      <p>Jacob Adams is a 23 year old musician from Wilmington NC, USA</p>
      <p>More text text text text text text text text text text text </p>
      <p>More text text text text text text text text text text text </p>
      <p>More text text text text text text text text text text text </p>
      <p>More text text text text text text text text text text text </p>
      <p>More text text text text text text text text text text text </p>
    </div>
  );
};

export default Bio;
