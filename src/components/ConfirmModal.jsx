import React from "react";
import styles from "../css/ConfirmModal.module.scss";
import guidemascot from "../assets/guidemascot.png";
import { useNavigate } from "react-router-dom";

const ConfirmModal = ({ onYes }) => {
  const navigate = useNavigate();

  const onNo = () => {
    navigate("/recommend"); // 로딩 페이지로 이동
    window.scrollTo(0, 0); // recommend 페이지 스크롤 맨 위로 이동
  };

  return (
    <div className={styles["modal-overlay"]}>
      <div className={styles["modal-box"]}>
        <div className={styles["confirm-content"]}>
          <img
            src={guidemascot}
            alt="guidemascot"
            className={styles["guidemascot"]}
          ></img>
          <div className={styles["titles"]}>
            <p className={styles["modal-title"]}>
              <strong style={{ color: "#FF5927" }}>‘자취방’</strong>에 대한
              정보가 저장되었어요!
            </p>
            <p className={styles["modal-subtitle"]}>
              고민 중인 집이 더 있나요?
            </p>
          </div>{" "}
          {/*titles div */}
        </div>
        {/*content div */}
        <div className={styles["modal-buttons"]}>
          <button className={styles["no-button"]} onClick={onNo}>
            아니오
          </button>
          <button className={styles["yes-button"]} onClick={onYes}>
            네
          </button>
        </div>{" "}
        {/*button-container 닫는 div */}
      </div>
      {/*modal-box 닫는 div */}

      {/*modal-overlay 닫는 div */}
    </div>
  );
};

export default ConfirmModal;
