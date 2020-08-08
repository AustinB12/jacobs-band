import React from "react";

import HeaderLogo from "../header/headerlogo";

import "../../styles/components/header.scss";

const Header = () => {
  const HomeRef = React.createRef();
  const VideosRef = React.createRef();
  const MerchRef = React.createRef();
  const ContactsRef = React.createRef();

  return (
    <div className={"App-header"}>
      <HeaderLogo />
      <ul className={"header-links"}>
        <a href="#contact-page">
          <li ref={ContactsRef}>Contact</li>
        </a>
        <a href="#merch">
          <li ref={MerchRef}>Merch</li>
        </a>
        <a href="#vids">
          <li ref={VideosRef}>Videos</li>
        </a>
        <a href="#home">
          <li ref={HomeRef}>Home</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
