import React from "react";

import "../../styles/pages/merch.scss";

const Product = (props) => {
  return (
    <div className="product">
      <a href="https://bluekarmaofficial.bandcamp.com/merch">
        <img src={props.image} alt="I'm an "></img>
        <h1>{props.title}</h1>
      </a>
    </div>
  );
};

export default Product;
