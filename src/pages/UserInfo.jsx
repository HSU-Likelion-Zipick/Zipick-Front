import React, { useState } from "react";
import ZIPPICK from "../assets/ZIPPICK.png";
import "../css/UserInfo.scss";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [fund, setFund] = useState("");
  const [transportation, setTransportation] = useState("");
  const [livingPattern, setLivingPattern] = useState("");

  //유효성 검사
  const validateForm = () => {
    const newErrors = {};
    if (!gender) newErrors.gender = "성별을 선택해주세요.";
    if (!age) newErrors.age = "나이를 입력해주세요.";
    if (!job) newErrors.job = "직업을 선택해주세요.";
    if (!monthlyIncome) newErrors.monthlyIncome = "월수익을 입력해주세요.";
    if (!fund) newErrors.fund = "여유자금을 입력해주세요.";
    if (!transportation) newErrors.transportation = "이동수단을 선택해주세요.";
    if (!livingPattern) newErrors.livingPattern = "생활 패턴을 선택해주세요.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleHouseInf = () => {
    if (validateForm()) {
      navigate("/houseinfo");
    }
  };

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
          {/* 성별 */}
          <div className="gender">
            <div className="gender-title">성별</div>
            <div className="gender-btns">
              <button
                className={`gender-btn ${gender === "남자" ? "active" : ""} ${errors.gender ? "error-border" : ""}`}
                onClick={() => setGender("남자")}
              >
                남자{" "}
              </button>
              <button
                className={`gender-btn ${gender === "여자" ? "active" : ""} ${errors.gender ? "error-border" : ""}`}
                onClick={() => setGender("여자")}
              >
                여자{" "}
              </button>
            </div>
            {/* 유효성 에러 메시지 표시 */}
            {errors.gender && (
              <span className="error-message">{errors.gender}</span>
            )}
          </div>

          {/* 나이 */}
          <div className="age">
            <div className="age-title">나이</div>
            <div className="age-input-group">
              <span>만</span>
              <input
                type="text"
                className={`age-input ${errors.age ? "error-border" : ""}`}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <span>세</span>
            </div>
            {errors.age && <span className="error-message">{errors.age}</span>}
          </div>
        </div>
        {/* gender-age 닫는 div */}
        <hr />

        {/* 직업 */}
        <div className="job-section">
          <div className="job-title">직업</div>
          <div className="job-btns">
            <button
              className={`job-btn ${job === "학생" ? "active" : ""} ${errors.job ? "error-border" : ""}`}
              onClick={() => setJob("학생")}
            >
              학생
            </button>
            <button
              className={`job-btn ${job === "취준생" ? "active" : ""} ${errors.job ? "error-border" : ""}`}
              onClick={() => setJob("취준생")}
            >
              취준생
            </button>
            <button
              className={`job-btn ${job === "직장인" ? "active" : ""} ${errors.job ? "error-border" : ""}`}
              onClick={() => setJob("직장인")}
            >
              직장인
            </button>
            <button
              className={`job-btn ${job === "프리랜서" ? "active" : ""} ${errors.job ? "error-border" : ""}`}
              onClick={() => setJob("프리랜서")}
            >
              프리랜서
            </button>
            <button
              className={`job-btn ${job === "무직" ? "active" : ""} ${errors.job ? "error-border" : ""}`}
              onClick={() => setJob("무직")}
            >
              무직
            </button>
          </div>
          {errors.job && <span className="error-message">{errors.job}</span>}
        </div>

        {/* 월수익 부분 */}
        <div className="monthly-income">
          <div className="monthly-title">월수익</div>
          <div className="monthly-input-group">
            <span>약</span>
            <input
              type="text"
              className={`monthly-input ${errors.monthlyIncome ? "error-border" : ""}`}
              value={monthlyIncome}
              onChange={(e) => setMonthlyIncome(e.target.value)}
            />
            <span>만원</span>
          </div>
          {errors.monthlyIncome && (
            <span className="error-message">{errors.monthlyIncome}</span>
          )}
        </div>
        {/* 여유자금 부분 */}
        <div className="fund">
          <div className="fund-title">여유자금</div>
          <div className="fund-input-group">
            <span>약</span>
            <input
              type="text"
              className={`fund-input ${errors.fund ? "error-border" : ""}`}
              value={fund}
              onChange={(e) => setFund(e.target.value)}
            />
            <span>만원</span>
          </div>
          {errors.fund && <span className="error-message">{errors.fund}</span>}
        </div>
        {/* 여유자금 부분 마감 */}
        <hr />

        {/* 이동 수단 부분 */}
        <div className="transportation-section">
          <div className="transportation-title">이동수단</div>
          <div className="transportation-btns">
            <button
              className={`transportation-btn ${transportation === "도보" ? "active" : ""} ${errors.transportation ? "error-border" : ""}`}
              onClick={() => setTransportation("도보")}
            >
              도보
            </button>
            <button
              className={`transportation-btn ${transportation === "자전거" ? "active" : ""} ${errors.transportation ? "error-border" : ""}`}
              onClick={() => setTransportation("자전거")}
            >
              자전거
            </button>
            <button
              className={`transportation-btn ${transportation === "대중교통" ? "active" : ""} ${errors.transportation ? "error-border" : ""}`}
              onClick={() => setTransportation("대중교통")}
            >
              대중교통
            </button>
            <button
              className={`transportation-btn ${transportation === "자가용" ? "active" : ""} ${errors.transportation ? "error-border" : ""}`}
              onClick={() => setTransportation("자가용")}
            >
              자가용
            </button>
          </div>
          {errors.transportation && (
            <span className="error-message">{errors.transportation}</span>
          )}
        </div>
        {/* 이동 수단 부분 마감 */}

        {/* 생활 패턴 부분 */}
        <div className="livingpattern-section">
          <div className="livingpattern-title">생활 패턴</div>
          <div className="livingpattern-btns">
            <button
              className={`livingpattern-btn ${livingPattern === "아침형" ? "active" : ""} ${errors.livingPattern ? "error-border" : ""}`}
              onClick={() => setLivingPattern("아침형")}
            >
              아침형
            </button>
            <button
              className={`livingpattern-btn ${livingPattern === "야행성" ? "active" : ""} ${errors.livingPattern ? "error-border" : ""}`}
              onClick={() => setLivingPattern("야행성")}
            >
              야행성
            </button>
            <button
              className={`livingpattern-btn ${livingPattern === "불규칙" ? "active" : ""} ${errors.livingPattern ? "error-border" : ""}`}
              onClick={() => setLivingPattern("불규칙")}
            >
              불규칙
            </button>
          </div>
          {errors.livingPattern && (
            <span className="error-message">{errors.livingPattern}</span>
          )}
        </div>
        {/* 생활 패턴 부분 마감 */}
      </div>
      {/* big-box 닫는div */}
      <button className="next-button" onClick={handleHouseInf}>
        다음으로
      </button>
    </div>
  );
};

export default UserInfo;
