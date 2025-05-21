import React, { useState } from "react";
import ZIPPICK from "../assets/ZIPPICK.png";
import "../css/UserInfo.scss";

const UserInfo = () => {
  return (
    <div className="top">
      {/* 밑에 div 들의 대빵 설정 */}
      <div className="top-image">
        {/* ZIPPICK 이미지 */}
        <img src={ZIPPICK} alt="ZIPPICK" />
      </div>
      <div className="top-text">
        {/* ZIPPICK 이미지 밑 글씨씨 */}
        <h3>
          <span className="yourinfo">&nbsp;'PICK'</span>가 필요해요!
          <br />
          &nbsp; &nbsp; &nbsp;꼭 맞는 집을 찾기 전
        </h3>
      </div>

      {/* big-box 닫는div */}
    </div>
  );
};

export default UserInfo;
