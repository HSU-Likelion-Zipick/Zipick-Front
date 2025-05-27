import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import sublogo from "../assets/Subtract.svg";
import PlusHome from "../assets/plushome.png";
import WhiteHome from "../assets/whitehome.png";
import BlackHome from "../assets/blackhome.png";
import HiMascot from "../assets/himascot.png";
import LoadingModal from "../components/LoadingModal";
import "../css/Recommend.scss";
import { useNavigate } from "react-router-dom";
import StarModal from "../components/StarModal";

const Recommend = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [starmodal, setStarmodal] = useState(false);

  //페이지 진입후 로딩
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 숫자에 따라 로딩 시간 다름

    return () => clearTimeout(timer);
  }, []);

  const handleStarModal = () => {
    // 고마워! 버튼 누르면 starModal 열림
    setStarmodal(true);
  };

  return (
    <div className="recommend-wrapper-outer">
      <div className="top-image">
        <img src={sublogo} alt="substract" className="sublogo" />
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="recommend-wrapper">
        {/* 상단 사용자 이름과 로고 */}
        <div className="top-bar">
          <div className="top-left">{}님</div>
          <div className="top-logo">
            <img src={logo} alt="logo" />
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
              <img src={WhiteHome} alt="아이콘" className="card-icon" />
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
              <img src={BlackHome} alt="아이콘" className="card-icon" />
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
        <div className="thx" onClick={handleStarModal}>
          {" "}
          {/* 고마워! 버튼 클릭 시 starModal 열림 */}
          <button>고마워!</button>
        </div>
      </div>
      {loading && <LoadingModal />}
      {starmodal && <StarModal />}
    </div>
  );
};

export default Recommend;
