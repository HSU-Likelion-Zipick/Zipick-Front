import React from 'react'
import "../css/Header.scss";
import logo from "../assets/logo.svg"
import sublogo from "../assets/Subtract.svg"
const Header = () => {
  return (
    <div className="header">
      <img src={sublogo} alt="logo" className="logo"></img>
      <img src={logo} alt="logo" className="logo"></img>
    </div>
  )
}

export default Header
