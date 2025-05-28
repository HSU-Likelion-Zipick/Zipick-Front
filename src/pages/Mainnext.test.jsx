// src/pages/Mainnext.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/Main.scss";
import mascot from "../assets/mascot.png";
import logo from "../assets/logo.svg";
import sublogo from "../assets/Subtract.svg";

const Mainnext = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const nickname = state?.nickname || "";
  console.log(state);

  const handleToUserInfo = () => {
    navigate("/userinfo", { state });
    window.scrollTo(0, 0);
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
            <span className="mrpick">PICK씨는</span>
            <br />
            당신이 궁금해요
          </div>

          {/* SCSS 그대로 적용되는 input-wrap + input-label */}
          <div className="input-wrap">
            <div className="input-label">
              이제부터 '마스코트'가 "{nickname}"님에게
              <br />꼭 맞는 집을 골라줄 거예요
            </div>
          </div>

          <div className="input-wrap">
            <div className="input-label askquestion">
              <span className="iwillask">
                꼭 맞는 집을 위해 몇 가지 질문을 해볼게요.
              </span>
            </div>
          </div>

          <button className="next-button" onClick={handleToUserInfo}>
            다음으로
          </button>
        </div>
      </div>
    </>
  );
};

export default Mainnext;
