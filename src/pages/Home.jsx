import React, { useState } from 'react'
import "../css/Home.scss";
import Header from "../components/Header.jsx";
import bubble1 from "../assets/bubble1.png";
import bubble2 from "../assets/bubble2.png";
const Home = () => {
  return (
      <div className="home">
      <Header />
      <div className="bubbles">
      <img src={bubble1} alt="bubble1" className="bubble1" />
      <img src={bubble2} alt="bubble2" className="bubble2" />
      </div>
    </div>
  )
}

export default Home
