import React from "react";
import Logo from "../../assets/Logo Black.png";
import "../../styles/components/headerlogo.scss";

const HeaderLogo = () => {
  return (
    <div className="Logo-header">
      <a href="/">
        <img src={Logo} align="left" alt="Logo missing" />
      </a>
    </div>
  );
};

export default HeaderLogo;
