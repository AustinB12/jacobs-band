import React from "react";

import imgPath from "../../assets/Blue Karma Logo-03.png";

import Product from "./product";

import "../../styles/pages/merch.scss";

const MerchandisePage = () => {
  return (
    <div id={"merch"} className={"merchandise-page"}>
      <h1>Merch, Bitches!</h1>
      <div className={"merch-products"}>
        <Product title="Coming Soon!" image={imgPath}></Product>
        <Product title="Coming Soon!" image={imgPath}></Product>
        <Product title="Coming Soon!" image={imgPath}></Product>
      </div>
    </div>
  );
};

export default MerchandisePage;
