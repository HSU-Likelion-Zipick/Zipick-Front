import React from "react";
import "../css/Header.scss";

// 모든 이미지 import
import logo from "../assets/logo.svg";
import sublogo from "../assets/Subtract.svg";
import blackhome from "../assets/blackhome.png";
import bubble1 from "../assets/bubble1.png";
import bubble2 from "../assets/bubble2.png";
import guide1 from "../assets/guide1.png";
import guide2 from "../assets/guide2.png";
import guide3 from "../assets/guide3.png";
import guidemascot from "../assets/guidemascot.png";
import hidemascot from "../assets/hidemascot.png";
import himascot from "../assets/himascot.png";
import infomascot from "../assets/infomascot.png";
import loadingmascot from "../assets/loadingmascot.png";
import location from "../assets/location.png";
import mascot from "../assets/mascot.png";
import orangestar from "../assets/orangestar.png";
import plushome from "../assets/plushome.png";
import star from "../assets/star.png";
import whitehome from "../assets/whitehome.png";
import zipickandlocation from "../assets/zipickandlocation.png";
import ZIPPICK from "../assets/ZIPPICK.png";

const Header = () => {
  return (
    <div className="header">
      <img src={sublogo} alt="Subtract.svg" className="logo" />
      <img src={logo} alt="logo.svg" className="logo" />
      <img src={blackhome} alt="blackhome.png" className="logo" />
      <img src={bubble1} alt="bubble1.png" className="logo" />
      <img src={bubble2} alt="bubble2.png" className="logo" />
      <img src={guide1} alt="guide1.png" className="logo" />
      <img src={guide2} alt="guide2.png" className="logo" />
      <img src={guide3} alt="guide3.png" className="logo" />
      <img src={guidemascot} alt="guidemascot.png" className="logo" />
      <img src={hidemascot} alt="hidemascot.png" className="logo" />
      <img src={himascot} alt="himascot.png" className="logo" />
      <img src={infomascot} alt="infomascot.png" className="logo" />
      <img src={loadingmascot} alt="loadingmascot.png" className="logo" />
      <img src={location} alt="location.png" className="logo" />
      <img src={mascot} alt="mascot.png" className="logo" />
      <img src={orangestar} alt="orangestar.png" className="logo" />
      <img src={plushome} alt="plushome.png" className="logo" />
      <img src={star} alt="star.png" className="logo" />
      <img src={whitehome} alt="whitehome.png" className="logo" />
      <img
        src={zipickandlocation}
        alt="zipickandlocation.png"
        className="logo"
      />
      <img src={ZIPPICK} alt="ZIPPICK.png" className="logo" />
    </div>
  );
};

export default Header;
