import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import sublogo from "../assets/Subtract.svg";
import PlusHome from "../assets/plushome.png";
import HiMascot from "../assets/himascot.png";
import LoadingModal from "../components/LoadingModal";
import "../css/Recommend.scss";
import { useNavigate } from "react-router-dom";

const Recommend = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //페이지 진입후 로딩
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 숫자에 따라 로딩 시간 다름

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="recommend-wrapper-outer" style={{ position: "relative" }}>
      <div className={`recommend-wrapper${loading ? " blurred" : ""}`}>
        {/* 상단 로고/닉네임 바 */}
        <div className="top-bar">
          <div className="top-left">아기사자 (님)</div>
          <div className="top-logo">
            <img src={sublogo} alt="ZIPPICK 서브 로고" />
            <img src={logo} alt="ZIPPICK 로고" />
          </div>
        </div>

        {/* 상단 영역 */}
        <div className="top">
          {/* 좌측 텍스트 영역 */}
          <div className="left-text">
            <h3>
              <span className="yourinfo">&nbsp;'PICK씨 '</span>는<br />
              이렇게 생각해요
            </h3>
            <br />
            <span className="checknow">지금 확인해보세요!</span>
          </div>

          {/* 추천 카드들 */}
          <div className="recommend-cards">
            <div className="card highlight">
              <img src={PlusHome} alt="아이콘" className="card-icon" />
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
              <img src={PlusHome} alt="아이콘" className="card-icon" />
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
            {/* 동대문 자취방 카드 - 마스코트가 위에 뜨게 */}
            <div className="card mascot-card">
              <div className="mascot-above">
                <img src={HiMascot} alt="마스코트" />
              </div>
              <img src={PlusHome} alt="아이콘" className="card-icon" />
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

        {/* TIP 배너 */}
        <div className="tip-section">
          <p>
            ‘PICK씨’가 알려주는 쾌적한 자취방 고르는 TIP
            <br />
            <span>방음 주방/욕실 옵션점검 거주환경 기타 체크포인트</span>
          </p>
          <button onClick={() => navigate("/tips")}>알아보러 가기 →</button>
        </div>

        {/* 하단 텍스트 */}
        <div className="others-title">
          나와 비슷한 사람들은 이렇게 <span>추천받았어요!</span>
        </div>

        {/* 하단 추천 카드 */}
        <div className="recommend-others">
          <div className="card">
            <img src={PlusHome} alt="아이콘" className="card-icon" />
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
            <img src={PlusHome} alt="아이콘" className="card-icon" />
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
            <img src={PlusHome} alt="아이콘" className="card-icon" />
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

        {/* 하단 버튼튼*/}
        <div className="thx">
          <button>고마워!</button>
        </div>
      </div>
      {loading && <LoadingModal />}
    </div>
  );
};

export default Recommend;
