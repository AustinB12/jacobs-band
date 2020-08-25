import React from "react";

import imgPath from "../../assets/bioPic.png";

import Product from "./product";

import "../../styles/pages/merch.scss";

const MerchandisePage = () => {
  return (
    <div id={"merch"} className={"merchandise-page"}>
      <h1>Merch, Bitches!</h1>
      <div className={"merch-products"}>
        <Product title="It's Me!" image={imgPath}></Product>
        <Product title="Me Again!" image={imgPath}></Product>
        <Product title="Hey you ;)" image={imgPath}></Product>
      </div>
    </div>
  );
};

export default MerchandisePage;
