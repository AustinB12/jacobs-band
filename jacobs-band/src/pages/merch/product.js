import React from "react";

import "../../styles/pages/merch.scss";

const Product = (props) => {
  return (
    <div className="product">
      <a href="https://bluekarmaofficial.bandcamp.com/merch">
        <img src={props.image} alt="Product"></img>
        <h3>{props.title}</h3>
      </a>
    </div>
  );
};

export default Product;
