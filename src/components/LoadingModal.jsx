import React, { useEffect, useState } from "react";
import loadingmascot from "../assets/loadingmascot.png";
import "../css/LoadingModal.scss";

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
        return prev + 3; //숫자(2) 조절하면 속도 달라짐
      });
    }, 40); //40ms마다 2씩 증가: 2초에 100에 도달
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="loading-title">Loading</div>
        <img
          src={loadingmascot}
          alt="로딩마스코트"
          className="loading-mascot"
        />
        <div className="loading-message">
          <span className="highlight">' PICK씨 '</span>가<br />
          아기사자님의
          <br />
          집을 고민하고 있어요
          <br />
          잠시만 기다려주세요!
        </div>
        <div className="loading-text">꼭 맞는 집을 추천해드릴게요!</div>
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
