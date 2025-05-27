import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import sublogo from "../assets/Subtract.svg";
import PlusHome from "../assets/plushome.png";
import WhiteHome from "../assets/whitehome.png";
import BlackHome from "../assets/blackhome.png";
import HiMascot from "../assets/himascot.png";
import LoadingModal from "../components/LoadingModal";
import "../css/Recommend.scss";
import { useNavigate, useLocation } from "react-router-dom";
import StarModal from "../components/StarModal";

import getRankingData from "../api/gpt/rankingGetApi";
import getSimilarUserData from "../api/gpt/similarGetApi";

const Recommend = () => {
  const [loading, setLoading] = useState(true);
  const [starmodal, setStarmodal] = useState(false);
  const [rankingData, setRankingData] = useState([]);
  const [similarData, setSimilarData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const nickname = location.state?.nickname || "";
  const userId = location.state?.userId;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userId) {
          const ranking = await getRankingData(userId);
          const similar = await getSimilarUserData(userId);
          setRankingData(ranking);
          setSimilarData(similar);
          console.log("\ud83c\udfe0 rankingData:", ranking);
          console.log("\ud83d\udc65 similarUserData:", similar);
        }
      } catch (err) {
        console.error("API \ud638\ucd9c \uc2e4\ud328:", err);
      }
    };

    fetchData();
  }, [userId]);

  const handleStarModal = () => {

    setStarmodal(true);
  };

  return (
    <div className="recommend-wrapper-outer">
      <div className="top-image">
        <img src={sublogo} alt="substract" className="sublogo" />
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="recommend-wrapper">
        <div className="top-bar">
          <div className="top-left">{nickname}님</div>
          <div className="top-logo"></div>
        </div>


        <div className="top">
          <div className="left-text">
            <h3>
              <span className="yourinfo">&nbsp;'PICK씨 '</span>는<br />
              이렇게 생각해요
            </h3>
            <br />
            <span className="checknow">지금 확인해보세요!</span>
          </div>

          <div className="recommend-cards">

            {rankingData.map((item, index) => (
              <div
                className={`card ${index === 0 ? "highlight" : ""}`}
                key={index}
              >
                {index === 2 && (
                  <div className="mascot-above">
                    <img src={HiMascot} alt="마스코트" />
                  </div>
                )}
                <img
                  src={
                    index === 0 ? WhiteHome : index === 1 ? BlackHome : PlusHome
                  }
                  alt="아이콘"
                  className="card-icon"
                />
                <h4>
                  {index === 0 ? `✨ ${item.houseName} ✨` : item.houseName}
                </h4>
                <p>
                  {item.kind}
                  <br />
                  {item.size}
                  <br />
                  월세 {item.monthly_rent}
                  <br />
                  관리비 {item.management}
                </p>

              </div>
            ))}
          </div>
        </div>

        <div className="tip-section">
          <p>
            ‘PICK씨’가 알려주는 쾌적한 자취방 고르는 TIP
            <br />
            <span>방음 주방/욕실 옵션점검 거주환경 기타 체크포인트</span>
          </p>
          <button onClick={() => navigate("/tips")}>알아보러 가기 →</button>
        </div>

        <div className="others-title">
          나와 비슷한 사람들은 이렇게 <span>추천받았어요!</span>
        </div>

        <div className="recommend-others">
          {similarData.map((item, index) => (
            <div className="card" key={index}>
              <img src={PlusHome} alt="아이콘" className="card-icon" />
              <h4>{item.houseName}</h4>
              <p>
                {item.kind}
                <br />
                {item.size}
                <br />
                월세 {item.monthly_rent}
                <br />
                관리비 {item.management}
              </p>
            </div>
          ))}
        </div>


        <div className="thx" onClick={handleStarModal}>

          <button>고마워!</button>
        </div>
      </div>
      {loading && <LoadingModal />}
      {starmodal && <StarModal />}
    </div>
  );
};

export default Recommend;
