import React from "react";
import "../css/LimitModal.scss";
import guidemascot from "../assets/guidemascot.png";
import { useNavigate } from "react-router-dom";

const LimitModal = () => {
  //HouseInfo.jsx에서 props 전달 받음 -> 고마워! 버튼 onClick했을 때 호출되도록 연결
  const navigate = useNavigate();

  const onClose = () => {
    navigate("/recommend");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <div className="limit-content">
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
            <p className="modal-subtitle">이제 더이상</p>
            <p className="modal-subtitle">집을 추가할 수가 없어요ㅠㅠ</p>
            <p className="recommend">대신 아기사자님에게 딱 맞는 집을</p>
            <p className="recommend">추천해줄게요!</p>
          </div>{" "}
          {/*titles div */}
        </div>
        {/*content div */}

        <button className="button" onClick={onClose}>
          고마워!
        </button>
      </div>
      {/*modal-box 닫는 div */}

      {/*modal-overlay 닫는 div */}
    </div>
  );
};

export default LimitModal;
