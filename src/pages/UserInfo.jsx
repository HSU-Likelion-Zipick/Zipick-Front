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
                    <div className="age-input-group">
                        <span>만</span>
                        <input type="text" className="age-input" />
                        <span>세</span>
                    </div>
                </div>
            </div>{/* gender-age 닫는 div */}
             <hr />
            <div className="job-section">
                <div className="job-title">직업</div>
                <div className="job-btns">
                    <button className="job-btn">학생</button>
                    <button className="job-btn">취준생</button>
                    <button className="job-btn">직장인</button>
                    <button className="job-btn">프리랜서</button>
                    <button className="job-btn">무직</button>
                </div>
            </div>

{/* 월수익 부분 */}
            <div className="monthly-income">
                    <div className="monthly-title">월수익</div>
                    <div className="monthly-input-group">
                        <span>약</span>
                        <input type="text" className="monthly-input" />
                        <span>만원</span>
                    </div>
                </div>
{/* 여유자금 부분 */}
            <div className="fund">
                <div className="fund-title">여유자금</div>
                <div className="fund-input-group">
                    <span>약</span>
                    <input type="text" className="fund-input" />
                    <span>만원</span>
                </div>
            </div>
{/* 여유자금 부분 마감 */}
            <hr />
                
                {/* 이동 수단 부분 */}
                 <div className="transportation-section">
                <div className="transportation-title">이동수단</div>
                <div className="transportation-btns">
                    <button className="transportation-btn">도보</button>
                    <button className="transportation-btn">자전거</button>
                    <button className="transportation-btn">대중교통</button>
                    <button className="transportation-btn">자차</button>
                </div>
            </div>
{/* 이동 수단 부분 마감 */}

{/* 생활 패턴 부분 */}
                <div className="livingpattern-section">
                <div className="livingpattern-title">생활 패턴</div>
                <div className="livingpattern-btns">
                    <button className="livingpattern-btn">아침형</button>
                    <button className="livingpattern-btn">야행성</button>
                    <button className="livingpattern-btn">불규칙</button>
                </div>
            </div>
            {/* 생활 패턴 부분 마감 */}

        </div>{/* big-box 닫는div */}

    </div>
  )
}

export default UserInfo
