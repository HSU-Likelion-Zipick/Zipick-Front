import React from "react";
import "../css/Header.scss";
import logo from "../assets/logo.svg";
import sublogo from "../assets/Subtract.svg";
import hi from "../assets/himascot.png";
const Header = () => {
  return (
    <div className="header">
      <img src={sublogo} alt="logo" className="logo"></img>
      <img src={logo} alt="logo" className="logo"></img>\
      <img src={hi} alt="logo" className="logo"></img>
    </div>
  );
};

export default Header;
