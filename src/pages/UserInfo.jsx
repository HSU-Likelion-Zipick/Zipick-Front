import React, { useState } from "react";
import logo from "../assets/logo.svg";
import sublogo from "../assets/Subtract.svg";
import "../css/UserInfo.scss";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();

  // 입력값 state
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [fund, setFund] = useState("");
  const [transportation, setTransportation] = useState("");
  const [livingPattern, setLivingPattern] = useState("");
  // 무관 선택 state
  const [monthlyIncomeIrrelevant, setMonthlyIncomeIrrelevant] = useState(false);
  const [fundIrrelevant, setFundIrrelevant] = useState(false);

  const [errors, setErrors] = useState({});

  // 유효성 검사
  const validateForm = () => {
    const newErrors = {};
    if (!gender) newErrors.gender = "성별을 선택해주세요.";
    if (!age) newErrors.age = "나이를 입력해주세요.";
    if (!job) newErrors.job = "직업을 선택해주세요.";
    if (!monthlyIncome && !monthlyIncomeIrrelevant)
      newErrors.monthlyIncome = "월수익을 입력해주세요.";
    if (!fund && !fundIrrelevant) newErrors.fund = "여유자금을 입력해주세요.";
    if (!transportation) newErrors.transportation = "이동수단을 선택해주세요.";
    if (!livingPattern) newErrors.livingPattern = "생활 패턴을 선택해주세요.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 다음 버튼 클릭 핸들러
  const handleHouseInf = () => {
    if (validateForm()) {
      navigate("/houseinfo");
    }
  };

  // 월수익 입력창 클릭: 무관 해제 & 입력 가능
  const handleMonthlyIncomeInputClick = () => {
    if (monthlyIncomeIrrelevant) {
      setMonthlyIncomeIrrelevant(false);
      setMonthlyIncome(""); // (선택) 기존 값 초기화
    }
  };

  // 여유자금 입력창 클릭: 무관 해제 & 입력 가능
  const handleFundInputClick = () => {
    if (fundIrrelevant) {
      setFundIrrelevant(false);
      setFund(""); // (선택) 기존 값 초기화
    }
  };

  return (
    <div className="top">
      {/* 밑에 div 들의 대빵 설정 */}
      <div className="top-image">
        {/* ZIPPICK 이미지 */}
        <img src={sublogo} alt="substract" className="sublogo" />
        <img src={logo} alt="ZIPPICK" />
      </div>
      <div className="top-text">
        {/* ZIPPICK 이미지 밑 글씨씨 */}
        {/* <h3>
          &nbsp; &nbsp; &nbsp;꼭 맞는 집을 찾기 전<br />
          <span className="yourinfo">&nbsp;당신의 정보</span>가 필요해요!
        </h3> */}
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
                className={`gender-btn${gender === "남자" ? " active" : ""}`}
                onClick={() => setGender("남자")}
              >
                남자
              </button>
              <button
                className={`gender-btn${gender === "여자" ? " active" : ""}`}
                onClick={() => setGender("여자")}
              >
                여자
              </button>
            </div>
            {/* 유효성 에러 메시지 표시 */}
            {errors.gender && (
              <div className="error-message">{errors.gender}</div>
            )}
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
            {errors.age && <div className="error-message">{errors.age}</div>}
          </div>
        </div>
        {/* gender-age 닫는 div */}
        <hr />

        <div className="job-section">
          <div className="job-title">직업</div>
          <div className="job-btns">
            <button
              className={`job-btn${job === "학생" ? " active" : ""}`}
              onClick={() => setJob("학생")}
            >
              학생
            </button>
            <button
              className={`job-btn${job === "취준생" ? " active" : ""}`}
              onClick={() => setJob("취준생")}
            >
              취준생
            </button>
            <button
              className={`job-btn${job === "직장인" ? " active" : ""}`}
              onClick={() => setJob("직장인")}
            >
              직장인
            </button>
            <button
              className={`job-btn${job === "프리랜서" ? " active" : ""}`}
              onClick={() => setJob("프리랜서")}
            >
              프리랜서
            </button>
            <button
              className={`job-btn${job === "무직" ? " active" : ""}`}
              onClick={() => setJob("무직")}
            >
              무직
            </button>
          </div>
          {errors.job && <div className="error-message">{errors.job}</div>}
        </div>

        {/* 월수익 & 여유자금 한 줄 */}
        <div className="income-fund-wrapper">
          {/* 월수익 */}
          <div className="field-container monthly-income">
            <div className="monthly-title">
              월수익{" "}
              <span className="input-guide">(0부터 입력이 가능합니다.)</span>
            </div>
            <div className="monthly-input-group">
              <span>약</span>
              <input
                type="text"
                className={`monthly-input${errors.monthlyIncome ? " error-border" : ""}`}
                value={monthlyIncomeIrrelevant ? "" : monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
                readOnly={monthlyIncomeIrrelevant}
                onClick={handleMonthlyIncomeInputClick}
                placeholder="직접 입력"
              />
              <span>만원</span>
              <label className="radio-label">
                <input
                  type="radio"
                  className="radio-input"
                  checked={monthlyIncomeIrrelevant}
                  onChange={() => {
                    setMonthlyIncomeIrrelevant(true);
                    setMonthlyIncome("");
                  }}
                />
                <span className="radio-text">무관</span>
              </label>
            </div>
            {errors.monthlyIncome && (
              <div className="error-message">{errors.monthlyIncome}</div>
            )}
          </div>
          {/* 여유자금 */}
          <div className="field-container fund">
            <div className="fund-title">
              여유자금{" "}
              <span className="input-guide">(0부터 입력이 가능합니다.)</span>
            </div>
            <div className="fund-input-group">
              <span>약</span>
              <input
                type="text"
                className={`fund-input${errors.fund ? " error-border" : ""}`}
                value={fundIrrelevant ? "" : fund}
                onChange={(e) => setFund(e.target.value)}
                readOnly={fundIrrelevant}
                onClick={handleFundInputClick}
                placeholder="직접 입력"
              />
              <span>만원</span>
              <label className="radio-label">
                <input
                  type="radio"
                  className="radio-input"
                  checked={fundIrrelevant}
                  onChange={() => {
                    setFundIrrelevant(true);
                    setFund("");
                  }}
                />
                <span className="radio-text">무관</span>
              </label>
            </div>
            {errors.fund && <div className="error-message">{errors.fund}</div>}
          </div>
        </div>

        <hr />

        {/* 이동 수단 부분 */}
        <div className="transportation-section">
          <div className="transportation-title">이동수단</div>
          <div className="transportation-btns">
            <button
              className={`transportation-btn${transportation === "도보" ? " active" : ""}`}
              onClick={() => setTransportation("도보")}
            >
              도보
            </button>
            <button
              className={`transportation-btn${transportation === "자전거" ? " active" : ""}`}
              onClick={() => setTransportation("자전거")}
            >
              자전거
            </button>
            <button
              className={`transportation-btn${transportation === "대중교통" ? " active" : ""}`}
              onClick={() => setTransportation("대중교통")}
            >
              대중교통
            </button>
            <button
              className={`transportation-btn${transportation === "자가용" ? " active" : ""}`}
              onClick={() => setTransportation("자가용")}
            >
              자가용
            </button>
          </div>
          {errors.transportation && (
            <div className="error-message">{errors.transportation}</div>
          )}
        </div>
        {/* 이동 수단 부분 마감 */}

        {/* 생활 패턴 부분 */}
        <div className="livingpattern-section">
          <div className="livingpattern-title">생활 패턴</div>
          <div className="livingpattern-btns">
            <button
              className={`livingpattern-btn${livingPattern === "아침형" ? " active" : ""}`}
              onClick={() => setLivingPattern("아침형")}
            >
              아침형
            </button>
            <button
              className={`livingpattern-btn${livingPattern === "야행성" ? " active" : ""}`}
              onClick={() => setLivingPattern("야행성")}
            >
              야행성
            </button>
            <button
              className={`livingpattern-btn${livingPattern === "불규칙" ? " active" : ""}`}
              onClick={() => setLivingPattern("불규칙")}
            >
              불규칙
            </button>
          </div>
          {errors.livingPattern && (
            <div className="error-message">{errors.livingPattern}</div>
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
