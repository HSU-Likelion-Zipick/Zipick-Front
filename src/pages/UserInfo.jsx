import React, { useState } from "react";
import ZIPPICK from "../assets/ZIPPICK.png";
import "../css/UserInfo.scss";

const UserInfo = () => {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [fund, setFund] = useState("");
  const [transportation, setTransportation] = useState("");
  const [livingPattern, setLivingPattern] = useState("");

  const isFormValid =
    gender &&
    age &&
    job &&
    monthlyIncome &&
    fund &&
    transportation &&
    livingPattern;

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
          &nbsp; &nbsp; &nbsp;꼭 맞는 집을 찾기 전<br />
          <span className="yourinfo">&nbsp;당신의 정보</span>가 필요해요!
        </h3>
      </div>
      <div className="big-box">
        <div className="step-bar">
          <div className="step-progress1"></div> {/* step 1 오렌지바 */}
          <span className="step-title">
            STEP 1. 당신의 정보를 입력해 주세요!
          </span>
        </div>

        <div className="gender-age">
          <div className="gender">
            <div className="gender-title">성별</div>
            <div className="gender-btns">
              <button
                className={`gender-btn ${gender === "남자" ? "active" : ""}`}
                onClick={() => setGender("남자")}
              >
                남자{" "}
              </button>
              <button
                className={`gender-btn ${gender === "여자" ? "active" : ""}`}
                onClick={() => setGender("여자")}
              >
                여자{" "}
              </button>
            </div>
            {!gender && <div className="warning">성별을 선택해주세요</div>}
          </div>

          <div className="age">
            <div className="age-title">나이</div>
            <div className="age-input-group">
              <span>만</span>
              <input
                type="text"
                className="age-input"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <span>세</span>
            </div>
            {!age && <div className="warning-text">나이를 입력해주세요.</div>}
          </div>
        </div>
        {/* gender-age 닫는 div */}
        <hr />
        <div className="job-section">
          <div className="job-title">직업</div>
          <div className="job-btns">
            <button
              className={`job-btn ${job === "학생" ? "active" : ""}`}
              onClick={() => setJob("학생")}
            >
              학생
            </button>
            <button
              className={`job-btn ${job === "취준생" ? "active" : ""}`}
              onClick={() => setJob("취준생")}
            >
              취준생
            </button>
            <button
              className={`job-btn ${job === "직장인" ? "active" : ""}`}
              onClick={() => setJob("직장인")}
            >
              직장인
            </button>
            <button
              className={`job-btn ${job === "프리랜서" ? "active" : ""}`}
              onClick={() => setJob("프리랜서")}
            >
              프리랜서
            </button>
            <button
              className={`job-btn ${job === "무직" ? "active" : ""}`}
              onClick={() => setJob("무직")}
            >
              무직
            </button>
          </div>
          {!job && <div className="warning-text">직업을 선택해주세요.</div>}
        </div>

        {/* 월수익 부분 */}
        <div className="monthly-income">
          <div className="monthly-title">월수익</div>
          <div className="monthly-input-group">
            <span>약</span>
            <input
              type="text"
              className="monthly-input"
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
            />
            <span>만원</span>
          </div>
          {!monthlyIncome && (
            <div className="warning-text">월수익을 입력해주세요.</div>
          )}
        </div>
        {/* 여유자금 부분 */}
        <div className="fund">
          <div className="fund-title">여유자금</div>
          <div className="fund-input-group">
            <span>약</span>
            <input
              type="text"
              className="fund-input"
              value={fund}
              onChange={(e) => setFund(e.target.value)}
            />
            <span>만원</span>
          </div>
          {!fund && (
            <div className="warning-text">여유자금을 입력해주세요.</div>
          )}
        </div>
        {/* 여유자금 부분 마감 */}
        <hr />

        {/* 이동 수단 부분 */}
        <div className="transportation-section">
          <div className="transportation-title">이동수단</div>
          <div className="transportation-btns">
            <button
              className={`transportation-btn ${transportation === "도보" ? "active" : ""}`}
              onClick={() => setTransportation("도보")}
            >
              도보
            </button>

            <button
              className={`transportation-btn ${transportation === "자전거" ? "active" : ""}`}
              onClick={() => setTransportation("자전거")}
            >
              자전거
            </button>

            <button
              className={`transportation-btn ${transportation === "대중교통" ? "active" : ""}`}
              onClick={() => setTransportation("대중교통")}
            >
              대중교통
            </button>

            <button
              className={`transportation-btn ${transportation === "자가용" ? "active" : ""}`}
              onClick={() => setTransportation("자가용")}
            >
              자가용
            </button>
          </div>
          {!transportation && (
            <div className="warning-text">이동수단을 선택해주세요.</div>
          )}
        </div>
        {/* 이동 수단 부분 마감 */}

        {/* 생활 패턴 부분 */}
        <div className="livingpattern-section">
          <div className="livingpattern-title">생활 패턴</div>
          <div className="livingpattern-btns">
            <button
              className={`livingpattern-btn ${
                livingPattern === "아침형" ? "active" : ""
              }`}
              onClick={() => setLivingPattern("아침형")}
            >
              아침형
            </button>
            <button
              className={`livingpattern-btn ${
                livingPattern === "야행성" ? "active" : ""
              }`}
              onClick={() => setLivingPattern("야행성")}
            >
              야행성
            </button>
            <button
              className={`livingpattern-btn ${
                livingPattern === "불규칙" ? "active" : ""
              }`}
              onClick={() => setLivingPattern("불규칙")}
            >
              불규칙
            </button>
          </div>
          {!livingPattern && (
            <div className="warning-text">생활 패턴을 선택해주세요.</div>
          )}
        </div>
        {/* 생활 패턴 부분 마감 */}
      </div>
      {/* big-box 닫는div */}
      <button className="next-button">다음으로</button>
    </div>
  );
};

export default UserInfo;
