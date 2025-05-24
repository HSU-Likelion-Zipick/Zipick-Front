import React from "react";
import "../css/ConfirmModal.scss";
import guidemascot from "../assets/guidemascot.png";

const ConfirmModal = ({ onYes, onNo }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="content">
          <img
            src={guidemascot}
            alt="guidemascot"
            className="guidemascot"
          ></img>
          <div className="titles">
            <p className="modal-title">
              <strong style={{ color: "#FF5927" }}>‘자취방’</strong>에 대한
              정보가 저장되었어요!
            </p>
            <p className="modal-subtitle">고민 중인 집이 더 있나요?</p>
          </div>{" "}
          {/*titles div */}
        </div>
        {/*content div */}
        <div className="modal-buttons">
          <button className="no-button" onClick={onNo}>
            아니오
          </button>
          <button className="yes-button" onClick={onYes}>
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
