import React from "react";
import Logo from "../../assets/Logo Black.png";
import "../../styles/components/headerlogo.scss";

const HeaderLogo = () => {
    return(
    <div className = "Logo-header">
        <img src = {Logo} align = "left" alt = "Logo missing" ></img>
    </div>
    )
  }

  export default HeaderLogo;