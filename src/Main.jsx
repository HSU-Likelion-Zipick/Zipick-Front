import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Main.scss";
import mascot from "./assets/mascot.png";
import zippick from "./assets/ZIPPICK.png";

const Main = () => {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/mainnext");
  };

  return (
    <div className="maintop">
      <div className="main-left">
        <img src={mascot} alt="ZIPPICK" className="mascot" />
        <div className="mascot-bg"></div>
      </div>
      <div className="main-right">
        <img src={zippick} alt="ZIPPICK 로고" className="logo-img" />
        <div className="main-text">
          <span className="mrpick">PICK씨는</span> <br />
          당신이 궁금해요
        </div>
        <div className="input-wrap">
          <div className="input-label">불러드릴 이름을 알려주세요!</div>
          <input
            className="input-box"
            type="text"
            placeholder=""
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        {/*이름 입력이 안되면 버튼 활성화 안됌 */}
        <button
          className="next-button"
          disabled={!nickname}
          onClick={handleNext}
        >
          다음으로
        </button>
      </div>
    </div>
  );
};

export default Main;
