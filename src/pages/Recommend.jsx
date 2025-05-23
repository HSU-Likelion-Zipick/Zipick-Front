import React from "react";
import ZIPPICK from "../assets/ZIPPICK.png";
import "../css/Recommend.scss";

const Recommend = () => {
  return (
    <div className="recommend-wrapper">
      {/* 상단 영역 */}
      <div className="top">
        {/* 밑에 div 들의 대빵 설정 */}
        <div className="top-image">
          {/* ZIPPICK 이미지 */}
          <img src={ZIPPICK} alt="ZIPPICK" />
        </div>
        <div className="left-text">
          {/* ZIPPICK 이미지 밑 글씨씨 */}
          <h3>
            <span className="yourinfo">&nbsp;'PICK씨 '</span>는<br />
            이렇게 생각해요
          </h3>
          <br />
          <span className="checknow">지금 확인해보세요!</span>
        </div>
        {/* big-box 닫는div */}
      </div>

      {/* 추천 결과 카드들 */}
      <div className="recommend-cards">
        <div className="card highlight">
          <h4>✨ 한성대 입구 자취방 ✨</h4>
          <p>
            원룸
            <br />
            8㎡
            <br />
            월세 8000만원
            <br />
            관리비 70만원
          </p>
        </div>
        <div className="card">
          <h4>성신여대 빌라</h4>
          <p>
            빌라
            <br />
            8㎡
            <br />
            월세 8000만원
            <br />
            관리비 70만원
          </p>
        </div>
        <div className="card">
          <h4>둥대문 자취방</h4>
          <p>
            원룸
            <br />
            8㎡
            <br />
            월세 8000만원
            <br />
            관리비 70만원
          </p>
        </div>
      </div>

      {/* 알아보럭 가기 버튼 있는 세션 */}
      <div className="tip-section">
        <p>
          ‘PICK씨’가 알려주는 쾌적한 자취방 고르는 TIP
          <br />
          <span>방음 주방/욕실 옵션점검 거주환경 기타 체크포인트</span>
        </p>
        <button>알아보러 가기 →</button>
      </div>

      {/* 하단 부분  */}
      <div className="others-title">
        나와 비슷한 사람들은 이렇게 <span>추천받았어요!</span>
      </div>

      {/* 하단 추천 결과 카드들 */}
      <div className="recommend-others">
        <div className="card">
          <h4>✨ 한성대 입구 자취방 ✨</h4>
          <p>
            원룸
            <br />
            8㎡
            <br />
            월세 8000만원
            <br />
            관리비 70만원
          </p>
        </div>
        <div className="card">
          <h4>성신여대 빌라</h4>
          <p>
            빌라
            <br />
            8㎡
            <br />
            월세 8000만원
            <br />
            관리비 70만원
          </p>
        </div>
        <div className="card">
          <h4>동대문 자취방</h4>
          <p>
            원룸
            <br />
            8㎡
            <br />
            월세 8000만원
            <br />
            관리비 70만원
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
