import React from "react";

import selfie from "../../assets/bioPic.png";

import "../../styles/components/bio.scss";

const Bio = () => {
  return (
    <div className="bio-container">
      <img src={selfie} align="left" alt="Something went wrong :(" />
      <h2>Who is Blue Karma?</h2>
      <p>
        Jacob Adams is a 23 year old musician from Wilmington NC, USA whos
        specialty is psychedelic music. His debut EP is coming out this fall!
      </p>
    </div>
  );
};

export default Bio;
