import React from "react";

import selfie from "../../assets/bioPic.png";

import "../../styles/components/bio.scss";

const Bio = () => {
  return (
    <div className="bio-container">
      <img src={selfie} align="left" alt="Something went wrong :(" />
      <h2>Who is Blue Karma?</h2>
      <p>
        Jacob Adams is a 23 year old musician from Wilmington NC, USA text text
        text text text text text text text text texttext text text text text
        text text text text text texttext text text text text text text text
        text text texttext text text text text text text text text text text
      </p>
      <p>
        Jacob Adams is a 23 year old musician from Wilmington NC, USA text text
        text text text text text text text text texttext text text text text
        text text text text text texttext text text text text text text text
        text text texttext text text text text text text text text text text
      </p>
    </div>
  );
};

export default Bio;
