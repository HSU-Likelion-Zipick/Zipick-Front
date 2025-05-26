import React, { useEffect, useState } from "react";
import loadingmascot from "../assets/loadingmascot.png";
import styles from "../css/LoadingModal.module.scss";

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
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-box"]}>
        <div className={styles["loading-title"]}>Loading</div>
        <img
          src={loadingmascot}
          alt="로딩마스코트"
          className={styles["loading-mascot"]}
        />
        <div className={styles["loading-message"]}>
          <span className={styles["highlight"]}>' PICK씨 '</span>가<br />
          아기사자님의
          <br />
          집을 고민하고 있어요
          <br />
          잠시만 기다려주세요!
        </div>
        <div className={styles["loading-text"]}>꼭 맞는 집을 추천해드릴게요!</div>
        <div className={styles["progress-wrap"]}>
          <div className={styles["progress-bar"]}>
            <div
              className={styles["progress-bar-inner"]}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
