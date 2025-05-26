import React from "react";
import styles from "../css/LimitModal.module.scss";
import guidemascot from "../assets/guidemascot.png";
import { useNavigate } from "react-router-dom";

const LimitModal = () => {
  const navigate = useNavigate();

  const onClose = () => {
    navigate("/recommend");
  };

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-box"]}>
        <div className={styles["content"]}>
          <img
            src={guidemascot}
            alt="guidemascot"
            className={styles["guidemascot"]}
          />
          <div className={styles["titles"]}>
            <p className={styles["modal-title"]}>
              <strong style={{ color: "#FF5927" }}>‘자취방’</strong>에 대한
              정보가 저장되었어요!
            </p>
            <p className={styles["modal-subtitle"]}>이제 더이상</p>
            <p className={styles["modal-subtitle"]}>
              집을 추가할 수가 없어요ㅠㅠ
            </p>
            <p className={styles["recommend"]}>
              대신 아기사자님에게 딱 맞는 집을
            </p>
            <p className={styles["recommend"]}>추천해줄게요!</p>
          </div>
        </div>
        <button className={styles["button"]} onClick={onClose}>
          고마워!
        </button>
      </div>
    </div>
  );
};

export default LimitModal;
