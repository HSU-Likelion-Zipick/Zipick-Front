import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/Home.scss";
import Header from "../components/Header.jsx";
import bubble1 from "../assets/bubble1.png";
import bubble2 from "../assets/bubble2.png";
const Home = () => {

  const navigate = useNavigate();
  const handleNextHome = () => {
    navigate('/guide'); 
  }
  return (
      <div className="home">
      <Header />
      <div className="bubbles">
      <img src={bubble1} alt="bubble1" className="bubble1" />
      <img src={bubble2} alt="bubble2" className="bubble2" />
      </div>
      <div className="home-content1">
        <p>고민중인 방은 많은데</p>
        <p>‘나에게 더 잘 맞는 자취방’은 어딜까?</p>
      </div>

      <div className="home-content2">
        <p className="Zipick">" ZIPICK "  </p>
        <span className="help"> 이 도와줄게요!</span>
      </div>
      <button className="next-button" onClick={handleNextHome}>다음으로</button>
    </div>
  )
}

export default Home
