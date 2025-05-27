import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Main.scss";
import mascot from "../assets/mascot.png";
import logo from "../assets/logo.svg";
import sublogo from "../assets/Subtract.svg";

const Main = () => {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/userinfo");
    window.scrollTo(0, 0); // 페이지 스크롤 맨 위로 이동
  };

  return (
    <>
      <div className="top-image">
        <img src={sublogo} alt="substract" className="sublogo" />
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="maintop">
        <div className="main-left">
          <img src={mascot} alt="ZIPPICK" className="mascot" />

          <div className="mascot-bg"></div>
        </div>
        <div className="main-right">
          <div className="main-text">
            <span className="mrpick">PICK씨는</span> <br />
            당신이 궁금해요
          </div>
          <div className="input-wrap">
            <div className="input-label">
              이제부터 '마스코트'가 "{nickname}"님에게 <br />
              꼭맞는 집을 골라줄 거예요
              <br /> <br />
              <span className="askquestion">
                꼭 맞는 집을 위해 몇가지 질문을 해볼게요.
              </span>
            </div>
          </div>

          <button className="next-button" onClick={handleNext}>
            다음으로
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
