import React from 'react'
import ZIPPICK from "../assets/ZIPPICK.png";
import "../css/HouseInfo.scss";
import { useState } from 'react';

const HouseInfo = () => {
    const [rentType, setRentType] = useState(""); //라디오 버튼 상태 관리

    const handleRentTypeChange = (e) => {
        setRentType(e.target.value);
    }


    return (
        <div className="house"> {/* 밑에 div 들의 대빵 설정 */}
        <div className="top-image"> {/* ZIPPICK 이미지 */}
            <img src={ZIPPICK} alt="ZIPPICK"/>
        </div>
        <div className="top-text"> {/* ZIPPICK 이미지 밑 글씨 */}
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
                

                <div className="monthly">
                <div className="monthly-title">전월세</div>
                    <div className="radio-group">
                        <label className="radio-label">
                            <input 
                                type="radio"
                                name="rentType"
                                value="전세"
                                checked={rentType === '전세'}
                                onChange={handleRentTypeChange}
                                className="radio-input" />
                            
                             <span className="radio-text">전세</span>
                            {rentType === '전세' && (
                                <div className="input-with-line">
                                    <input type="text" className="monthly-input"/>
                                    <span className="vertical-line"></span>
                                </div>
                           )}
                           
                        </label>

                        <label className="radio-label">
                        <input 
                                type="radio"
                                name="rentType"
                                value="월세"
                                checked={rentType === '월세'}
                                onChange={handleRentTypeChange}
                                className="radio-input" />
                            <span className="radio-text">월세</span>
                            {rentType === '월세' && (
                                <div className="input-with-line">
                                    <span>보증금</span>
                                    <input type="text" className="monthly-input" />
                                    <span> / 월</span>
                                    <input type="text" className="monthly-input" />
                                    <span>만원</span>
                           </div>
                           )}

                        </label>
                    </div> {/*radio-group 닫는 div*/}
            </div> {/*monthly 닫는 div */}
                <hr className="underLine"/>

            <div className="size">
                <div className="size-title">관리비</div>
                <div className="size-input-group">
                    <input type="text" className="size-input" />
                    <span>만원</span>
                </div>
                </div>
    
                <div className="house-type">
                <div className="type-title">관리비 포함</div>
                <div className="type-btns">
                    <button className="type-btn">수도료</button>
                    <button className="type-btn">난방비</button>
                    <button className="type-btn">전기료</button>
                    <button className="type-btn">일반(공용)관리비</button>
                    <button className="type-btn">가스사용료</button>
                    <button className="type-btn">TV사용료</button>
                    <button className="type-btn">기타관리비</button>
                    <button className="type-btn">인터넷사용료</button>

                </div>
            </div>
            <hr className="underLine"/>               

            </div>{/* big-box 닫는div */}
    
            <button className="next-button" >
                다음으로
            </button>
    
        </div>
      )
}

export default HouseInfo
