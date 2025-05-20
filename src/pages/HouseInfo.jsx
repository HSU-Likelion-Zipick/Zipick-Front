import React from 'react'
import ZIPPICK from "../assets/ZIPPICK.png";
import "../css/HouseInfo.scss";

const HouseInfo = () => {
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
                    <div className="step-progress2"></div> {/* step 1 오렌지바 */}
                    <span className="step-title">STEP 2. 집 정보를 입력해 주세요!</span>
                </div>


                <div className="house">
                    <div className="house-title">집 명칭</div>
                    <div className="house-input-group">
                        <input type="text" className="house-input" />
                    </div>
                </div>


                <div className="house-type">
                <div className="type-title">집종류</div>
                <div className="type-btns">
                    <button className="type-btn">원룸</button>
                    <button className="type-btn">빌라/투룸</button>
                    <button className="type-btn">상가</button>
                    <button className="type-btn">아파트</button>
                    <button className="type-btn">오피스텔</button>
                </div>
            </div>

            <div className="size">
                <div className="size-title">평수</div>
                <div className="size-input-group">
                    <span>약</span>
                    <input type="text" className="size-input" />
                    <span>만원</span>
                </div>
            </div>
    
            </div>{/* big-box 닫는div */}
    
            <button className="next-button" >
                다음으로
            </button>
    
        </div>
      )
}

export default HouseInfo
