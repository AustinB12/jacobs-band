import React from "react";

import "../../styles/components/header.scss";

const Header = () => {
  return (
    <div className={"App-header"}>
      <ul className={"header-links"}>
        <li>Merch</li>
        <li>Contact</li>
        <li>Videos</li>
        <li>Home</li>
      </ul>
    </div>
  );
};

export default Header;
