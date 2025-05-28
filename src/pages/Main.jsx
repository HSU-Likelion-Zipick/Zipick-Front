import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../api/user/getUserData"; // 앞서 만든 GET API
import "../css/Main.scss";
import mascot from "../assets/mascot.png";
import logo from "../assets/logo.svg";
import sublogo from "../assets/Subtract.svg";

const Main = () => {
  const [nickname, setNickname] = useState("");
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // console.log("테스트입니다.");

  useEffect(() => {
    const fetch = async () => {
      const user = await getUserData();
      if (user) {
        setNickname(user.nickname);
        setUserId(user.user_id);
      }
      setLoading(false);
    };
    fetch();
  }, []);

  const handleNext = () => {
    if (!nickname) return;
    navigate("/mainnext", { state: { nickname, userId } });
    window.scrollTo(0, 0);
  };

  if (loading) return null;

  return (
    <>
      <div className="top-image">
        <img src={sublogo} alt="substract" className="sublogo" />
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="maintop">
        <div className="main-left">
          <img src={mascot} alt="ZIPPICK" className="mascot" />
          <div className="mascot-bg"></div>
        </div>

        <div className="main-right">
          <div className="main-text">
            <span className="mrpick">PICK씨는</span>
            <br />
            당신이 궁금해요
          </div>

          {/* 입력창 영역 */}
          <div className="input-wrap">
            <label className="input-label">불러드릴 이름을 알려주세요!</label>
            <input
              className="input-box"
              type="text"
              placeholder="홍길동"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>

          <button
            className="next-button"
            disabled={!nickname.trim()}
            onClick={handleNext}
          >
            다음으로
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
