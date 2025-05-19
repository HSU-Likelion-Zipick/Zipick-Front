import React from "react";
import ZIPPICK from "../components/ZIPPICK.png";
import "../css/UserInfo.scss";

const UserInfo = () => {
  return (
    <div className="top"> {/* 밑에 div 들의 대빵 설정 */}
    <div className="top-image"> {/* ZIPPICK 이미지 */}
        <img src={ZIPPICK} alt="ZIPPICK"/>
    </div>
    <div className="top-text"> {/* ZIPPICK 이미지 밑 글씨씨 */}
        <h3>꼭 맞는 집을 찾기 전<br />
        <span className="yourinfo">당신의 정보</span>가 필요해요!</h3>
        </div>

        <div className="big-box">
            <div className="step-bar">
                <span className="step-title">STEP 1</span>
            </div>
        </div>

    </div>
  )
}

export default UserInfo
