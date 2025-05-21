import React from 'react'
import ZIPPICK from "../assets/ZIPPICK.png";
import "../css/HouseInfo.scss";
import { useState } from 'react';
import "../css/GlobalStyles.scss";
import { useNavigate } from 'react-router-dom';

const HouseInfo = () => {
    const [rentType, setRentType] = useState(""); //라디오 버튼 상태 관리
    const [parkingType, setParkingType] = useState(""); //주차 가능 여부 상태 관리
    const [elevatorType, setElevatorType] = useState(""); //엘리베이터 여부 상태 관리
    const [selectedButton, setSelectedButton] = useState(null); // 버튼 클릭 여부 관리
    const [selectedUtilities, setSelectedUtilities] = useState([]);
    
    const [errors, setErrors] = useState({});
    const [selectedDirection, setSelectedDirection] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);
    
    const [formData, setFormData] = useState({
        houseName: '',
        houseType: '',
        size: '',
        rentAmount: '',
        deposit: '',
        monthlyRent: '',
        maintenanceFee: '',
        totalFloor: '',
        currentFloor: '',
        constructionDate: '',
        walkTimeStation: '',
        walkTimeDestination: ''
    })
        ;
    
    //유효성 검사 함수
        const validateForm = () => {
            const newErrors = {};
            
            if (!formData.houseName.trim()) {
                newErrors.houseName = '집 명칭을 입력해주세요';
            }
            
            if (!selectedButton) {
                newErrors.houseType = '집 종류를 선택해주세요';
            }
            
            if (!formData.size.trim()) {
                newErrors.size = '평수를 입력해주세요';
            }
            
            if (!rentType) {
                newErrors.rentType = '전월세 유형을 선택해주세요';
            } else if (rentType === '전세' && !formData.rentAmount) {
                newErrors.rentAmount = '전세 금액을 입력해주세요';
            } else if (rentType === '월세') {
                if (!formData.deposit) newErrors.deposit = '보증금을 입력해주세요';
                if (!formData.monthlyRent) newErrors.monthlyRent = '월세 금액을 입력해주세요';
            }
            
            if (!formData.maintenanceFee.trim()) {
                newErrors.maintenanceFee = '관리비를 입력해주세요';
            }
            
            if (selectedUtilities.length === 0) {
                newErrors.utilities = '관리비 포함 항목을 선택해주세요';
            }
            
            if (!parkingType) {
                newErrors.parking = '주차 여부를 선택해주세요';
            }
            
            if (!formData.totalFloor || !formData.currentFloor) {
                newErrors.floor = '층수를 입력해주세요';
            }
            
            if (!elevatorType) {
                newErrors.elevator = '엘리베이터 여부를 선택해주세요';
            }
            
            if (!selectedDirection) {
                newErrors.direction = '집 방향을 선택해주세요';
            }
            
            if (!formData.constructionDate.trim()) {
                newErrors.constructionDate = '준공일을 입력해주세요';
            }
            
            if (selectedOptions.length === 0) {
                newErrors.options = '옵션을 선택해주세요';
            }
            
            if (!formData.walkTimeStation.trim()) {
                newErrors.walkTimeStation = '역/정류장까지의 도보 시간을 입력해주세요';
            }
            
            if (!formData.walkTimeDestination.trim()) {
                newErrors.walkTimeDestination = '목적지까지의 도보 시간을 입력해주세요';
            }
        
            setErrors(newErrors);
            return Object.keys(newErrors).length === 0;
    };
    

    const handleNext = () => {
        if (validateForm()) {
            navigate('/userinfo');  // 다음 페이지로 이동
        }
    };

    const handleUtilityClick = (utiilty) => {
        setSelectedUtilities(prev => {
            if (prev.includes(utiilty)) {
                return prev.filter(item => item !== utiilty)
            } else {
                return [...prev, utiilty];
            }
        })
    }

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    }


    const navigate = useNavigate();

    const handleUserInfo = () => {
        navigate('/userinfo');
    }

    const handleRentTypeChange = (e) => {
        setRentType(e.target.value);
    }

    const handleParkingChange = (e) => {
        setParkingType(e.target.value);
    }

    const handleElevatorChange = (e) => {
        setElevatorType(e.target.value);
    }

    
    return (
        <div className="house"> {/* 밑에 div 들의 대빵 설정 */}
        <div className="top-image"> {/* ZIPPICK 이미지 */}
            <img src={ZIPPICK} alt="ZIPPICK"/>
        </div>
        <div className="top-text"> {/* ZIPPICK 이미지 밑 글씨 */}
            <h3> &nbsp; &nbsp; &nbsp;꼭 맞는 집을 찾기 전<br />
            <span className="yourinfo">&nbsp;당신의 정보</span>가 필요해요!</h3>
            </div>
    
            <div className="big-box">
                <div className="step-bar">
                    <div className="step-progress2"></div> {/* step 1 오렌지바 */}
                    <span className="step-title">STEP 2. 집 정보를 입력해 주세요!</span>
                </div>


                <div className="house">
                    <div className="field-container">
                    <div className="house-title">집 명칭</div>
                    {errors.houseName && <span className="error">{errors.houseType}</span>} </div>
                    <div className="house-input-group">
                        <input
                            type="text"
                            className="house-input" />
                       
                        </div>           

                </div>


                <div className="house-type">
                <div className="field-container">
                    <div className="type-title">집종류</div>
                    {errors.houseType && <span className="error-message">{errors.houseType}</span>}</div>
                <div className="type-btns">
                        <button
                            className={`type-btn ${selectedButton === '원룸' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('원룸')}
                        >
                            원룸</button>
                            <button
                            className={`type-btn ${selectedButton === '빌라/투룸' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('빌라/투룸')}
                        >
                            빌라/투룸</button>
                            <button
                            className={`type-btn ${selectedButton === '상가' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('상가')}
                        >
                            상가</button>
                            <button
                            className={`type-btn ${selectedButton === '아파트' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('아파트')}
                        >
                            아파트</button>
                            <button
                            className={`type-btn ${selectedButton === '오피스텔' ? 'active' : ''}`}
                            onClick={() => handleButtonClick('오피스텔')}
                        >
                            오피스텔</button>
                </div>
            </div>

                <div className="size">
                <div className="field-container">
                    <div className="size-title">평수</div>
                        {errors.size && <span className="error-message">{errors.size}</span>}
                    </div>
                <div className="size-input-group">
                    <span>약</span>
                    <input type="text" className="size-input" />
                    <span>만원</span>
                </div>
                </div>
                

                <div className="monthly">
                <div className="field-container">
                    <div className="monthly-title">전월세</div>
                        {errors.rentType && <span className="error-message">{errors.rentType}</span>}
                        </div>
                    <div className="radio-group">
                        <label className="radio-label">
                            <input 
                                type="radio"
                                name="rentType"
                                value="전세"
                                checked={rentType === '전세'}
                                onChange={handleRentTypeChange}
                                className="radio-input" />
                            
                             <span className="radio-text">전세</span>
                            {rentType === '전세' && (
                                <div className="input-with-line">
                                    <input type="text" className="monthly-input"/>
                                    <span className="vertical-line"></span>
                                </div>
                           )}
                           
                        </label>

                        <label className="radio-label">
                        <input 
                                type="radio"
                                name="rentType"
                                value="월세"
                                checked={rentType === '월세'}
                                onChange={handleRentTypeChange}
                                className="radio-input" />
                            <span className="radio-text">월세</span>
                            {rentType === '월세' && (
                                <div className="input-with-line">
                                    <span>보증금</span>
                                    <input type="text" className="monthly-input" />
                                    <span> / 월</span>
                                    <input type="text" className="monthly-input" />
                                    <span>만원</span>
                           </div>
                           )}

                        </label>
                    </div> {/*radio-group 닫는 div*/}
            </div> {/*monthly 닫는 div */}
                <hr className="underLine"/>

                <div className="size">
                <div className="field-container">
                    <div className="size-title">관리비</div>
                        {errors.maintenanceFee && <span className="error-message">{errors.maintenanceFee}</span>}
                 </div>
                <div className="size-input-group">
                    <input type="text" className="size-input" />
                    <span>만원</span>
                </div>
                </div>
    
                <div className="house-type">
                <div className="field-container">
                    <div className="type-title">관리비 포함</div>
                        <span className="error-message">포함되는 항목을 모두 선택해주세요</span>
                    </div>
                    <div className="field-container">
                <div className="type-btns">
                <button 
        className={`type-btn ${selectedUtilities.includes('수도료') ? 'active' : ''}`}
        onClick={() => handleUtilityClick('수도료')}
                        >
                            수도료</button>
                            <button 
        className={`type-btn ${selectedUtilities.includes('난방비') ? 'active' : ''}`}
        onClick={() => handleUtilityClick('난방비')}
                        >난방비</button>
                        
                        <button 
            className={`type-btn ${selectedUtilities.includes('전기료') ? 'active' : ''}`}
            onClick={() => handleUtilityClick('전기료')}
        >전기료</button>
                    <button 
            className={`type-btn ${selectedUtilities.includes('일반 관리비') ? 'active' : ''}`}
            onClick={() => handleUtilityClick('일반 관리비')}
        >일반(공용)관리비</button>
                    <button 
            className={`type-btn ${selectedUtilities.includes('가스사용료') ? 'active' : ''}`}
            onClick={() => handleUtilityClick('가스사용료')}
        >가스사용료</button>
                    <button 
            className={`type-btn ${selectedUtilities.includes('TV사용료') ? 'active' : ''}`}
            onClick={() => handleUtilityClick('TV사용료')}
        >TV사용료</button>
                    <button 
            className={`type-btn ${selectedUtilities.includes('기타관리비') ? 'active' : ''}`}
            onClick={() => handleUtilityClick('기타관리비')}
        >기타관리비</button>
                   <button 
            className={`type-btn ${selectedUtilities.includes('인터넷사용료') ? 'active' : ''}`}
            onClick={() => handleUtilityClick('인터넷사용료')}
        >인터넷사용료</button>

                </div>
                    </div>
            </div>
                <hr className="underLine" />    
                    
                <div className="parking">
                <div className="field-container">
                    <div className="parking-title">주차여부</div>
                        {errors.parking && <span className="error">{errors.parking}</span>}
                    </div>
                    <div className="parking-radio-group">
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="parkingType"
                                value="가능"
                                checked={parkingType === '가능'}
                                onChange={handleParkingChange}
                                className="radio-input"/>
                        <span className="radio-text">가능</span>
                        </label>

                        <label className="radio-label">
                            <input
                                type="radio"
                                name="parkingType"
                                value="불가능"
                                onChange={handleParkingChange}
                                className="radio-input" />
                            <span className="radio-text">불가능</span>
                            
                        </label>
                    </div>
                </div> {/*parking 닫는 div */}
                
                <div className="floor-elevator-wrapper">
                    <div className="floor">
                        <div className="field-container">
                        <div className="floor-title">층수</div>
                        {errors.floor && <span className="error-message">{errors.floor}</span>}</div>
                <div className="floor-input-group">
                    <input type="text" className="floor-input" />
                        <span>층</span>
                        <span>중에</span>
                        <input type="text" className="floor-input" />
                        <span>층</span>
                        <span className="vertical-line"></span>
                </div>
            </div>
             
                    <div className="elevator">
                    <div className="field-container">
                        <div className="elevator-title">엘리베이터</div>
                            {errors.elevator && <span className="error">{errors.elevator}</span>}
                            </div>
                    <div className="elevator-radio-group">
                        <label className="radio-label">
                            <input
                                type="radio"
                                name="elevatorType"
                                value="있음"
                                checked={elevatorType === '있음'}
                                onChange={handleElevatorChange}
                            className="radio-input"/>

                           <span className="radio-text">있음</span>
                        </label>
                        

                        <label className="radio-label">
                            <input
                                type="radio"
                                name="elevatorType"
                                value="없음"
                                checked={elevatorType === '없음'}
                                onChange={handleElevatorChange}
                            className="radio-input"/>

                           <span className="radio-text">없음</span>
                           </label>

                    </div> {/*radio-group 닫는 div*/}
                </div> {/*elevator 닫는 div*/}
                </div> {/*floor-elevator-wrapper 닫는 div */}
                
                <div className="direction-date-wrapper">
                    <div className="house-type">
                    <div className="field-container">
                        <div className="type-title">집 방향</div>
                            {errors.direction && <span className="error-message">{errors.direction}</span>}
                            </div>
                <div className="type-btns">
                    <button className="type-btn">동향</button>
                    <button className="type-btn">서향</button>
                    <button className="type-btn">남향</button>
                    <button className="type-btn">북향</button>
                    </div>
                    </div>
                    
                    <div className="size">
                    <div className="field-container">
                        <div className="size-title">준공일</div>
                            {errors.constructionDate && <span className="error-message">{errors.constructionDate}</span>}
                            </div>
                <div className="size-input-group">
                    <input type="text" className="size-input" />
                </div>
                </div>
                
             </div> {/*direction-date-wrapper 닫는 div */}

                <div className="house-type">
                <div className="field-container">
                    <div className="type-title">옵션</div>
                        {errors.options && <span className="error-message">{errors.options}</span>}
                        </div>
                <div className="type-btns">
                    <button className="type-btn">싱크대</button>
                    <button className="type-btn">에어컨</button>
                    <button className="type-btn">신발장</button>
                    <button className="type-btn">세탁기</button>
                    <button className="type-btn">서랍장</button>
                    <button className="type-btn">냉장고</button>
                    <button className="type-btn">옷장</button>
                    <button className="type-btn">인덕션</button>
                    <button className="type-btn">책상</button>
                    <button className="type-btn">침대</button>
                    <button className="type-btn">책장</button>
                     <button className="type-btn">없음</button>

                </div>
            </div>
                <hr className="underLine" />    

                
                <div className="walktime-wrapper">
                    <div className="size">
                    <div className="field-container">
                        <div className="size-title">역/정류장까지</div>
                            {errors.walkTimeStation && <span className="error-message">{errors.walkTimeStation}</span>}
                            </div>
                <div className="size-input-group">
                    <span>도보</span>
                    <input type="text" className="size-input" />
                            <span>분</span>
                            <span className="vertical-line"></span>
                        </div>
                        
                </div>

                    <div className="size">
                    <div className="field-container">
                        <div className="size-title">목적지까지
                                <span className="suabtitle">(학교, 직장 등)</span></div>
                            {errors.walkTimeDestination && <span className="error-message">{errors.walkTimeDestination}</span>}
                            </div>
                <div className="size-input-group">
                    <span>도보</span>
                    <input type="text" className="size-input" />
                    <span>분</span>
                </div>
                </div>
            </div> {/*walktime wrapper 닫는 div */}

            </div>{/* big-box 닫는div */}
    
            <div className="button-wrapper">
            <button className="next-button" onClick={handleUserInfo}>
                이전으로
            </button>
            <button className="next-button"onClick={handleNext}>
                다음으로
            </button>
            </div>
        </div>
      )
}

export default HouseInfo
