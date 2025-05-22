import React, { useState } from "react";
import ZIPPICK from "../assets/ZIPPICK.png";
import "../css/Recommend.scss";

const UserInfo = () => {
  return (
    <div className="top">
      {/* 밑에 div 들의 대빵 설정 */}
      <div className="top-image">
        {/* ZIPPICK 이미지 */}
        <img src={ZIPPICK} alt="ZIPPICK" />
      </div>
      <div className="right-text">
        {/* ZIPPICK 이미지 밑 글씨씨 */}
        <h3>
          <span className="yourinfo">&nbsp;'PICK씨 '</span>는
          <br />
          이렇게 생각해요
        </h3>
        <br />
        <span className="checknow">지금 확인해보세요!</span>
      </div>

      {/* big-box 닫는div */}
    </div>
  );
};

export default UserInfo;
