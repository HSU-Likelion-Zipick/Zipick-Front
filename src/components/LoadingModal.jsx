import React, { useEffect, useState } from "react";
import loadingmascot from "../assets/loadingmascot.png";
import "../css/LoadingModal.scss";

// ★ 게이지 애니메이션 구현
const LoadingModal = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2.5; //숫자(2.5) 조절로 속도 변경 가능
      });
    }, 40); //40ms마다 2.5씩 증가: 약 1.5초~2초에 100 도달
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="loading-inner">
          <img
            src={loadingmascot}
            alt="로딩마스코트"
            className="loading-mascot"
          />
          <div className="loading-texts">
            <div className="loading-title">Loading</div>
            <div className="loading-message">
              <span className="highlight">' PICK씨 '</span>가<br />
              아기사자님의
              <br />
              집을 고민하고 있어요
              <br />
              잠시만 기다려주세요!
            </div>
            <div className="loading-sub">꼭 맞는 집을 추천해드릴게요!</div>
          </div>
        </div>

        <div className="progress-wrap">
          <div className="progress-bar">
            <div
              className="progress-bar-inner"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
