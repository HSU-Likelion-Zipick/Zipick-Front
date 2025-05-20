import React, { useState } from "react";
import "./css/Main.scss";
import mascot from "./assets/mascot.png";
import zippick from "./assets/ZIPPICK.png";

const Main = () => {
  const [nickname, setNickname] = useState("");

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
          <div className="input-label">
            이제부터 '마스코트'가 "{nickname}"님에게 <br />
            꼭맞는 집을 골라줄 거예요
            <br /> <br />
            <span className="askquestion">
              꼭 맞는 집을 위해 몇가지 질문을 해볼게요.
            </span>
          </div>
        </div>

        {/*이름 입력이 안되면 버튼 활성화 안됌 */}
        <button className="next-button">다음으로</button>
      </div>
    </div>
  );
};

export default Main;
