import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import sublogo from "../assets/Subtract.svg"
import "../css/Home.scss";
const Home = () => {
  return (
      <div className="home">
          <div className="header">
              <img src={sublogo} alt="logo" className="logo"></img>
              <img src={logo} alt="logo" className="logo"></img>
          </div>
      
    </div>
  )
}

export default Home
