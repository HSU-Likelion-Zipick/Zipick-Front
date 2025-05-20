import React from "react";
import ZIPPICK from "../assets/ZIPPICK.png";
import "../css/UserInfo.scss";

const UserInfo = () => {
  return (
    <div className="top"> {/* 밑에 div 들의 대빵 설정 */}
    <div className="top-image"> {/* ZIPPICK 이미지 */}
        <img src={ZIPPICK} alt="ZIPPICK"/>
    </div>
    <div className="top-text"> {/* ZIPPICK 이미지 밑 글씨씨 */}
        <h3> &nbsp; &nbsp; &nbsp;꼭 맞는 집을 찾기 전<br />
        <span className="yourinfo">&nbsp;당신의 정보</span>가 필요해요!</h3>
        </div>

        <div className="big-box">
            <div className="step-bar">
                <div className="step-progress1"></div> {/* step 1 오렌지바 */}
                <span className="step-title">STEP 1</span>
            </div>

            <div className="gender-age">
                <div className="gender">
                    <div className="gender-title">성별</div>
                    <div className="gender-btns">
                        <button className="gender-btn">남자</button>
                        <button className="gender-btn">여자</button>
                    </div>
                </div>

                <div className="age">
                    <div className="age-title">나이</div>
                    <div className="age-input-grpup">
                        <span>만</span>
                        <input type="text" className="age-input" />
                        <span>세</span>
                    </div>
                </div>
            </div>{/* gender-age 닫는 div */}

        </div>{/* big-box 닫는div */}

    </div>
  )
}

export default UserInfo
