import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../css/Guide.scss";
import guide1 from "../assets/guide1.png";
import guidemascot from "../assets/guidemascot.png";
import guide2 from "../assets/guide2.png";
import guide3 from "../assets/guide3.png";

const Guide = () => {

    const navigate = useNavigate();
    const handleToMain = () => {
      navigate('/main'); 
    }

  return (
      <div className="guide">
       
          <div className="title">
              <p className='zip'>" ZIPICK "</p>
              <span className='use'> 이렇게 이용해요!</span>
          </div>
          

          <div className='guide-content'>
              <div className='left-section'>
          <div className='guidebox'>
              <div className='box1'>
                  <p className='g-content'>1. 나에 대해 알려줘요!</p>
                  <p className='subcontent'>나의 직업, 수익, 생활패턴 등 정보를 입력해요.</p>
                  <img src={guide1} alt='guide1' className='guide1'/>
              </div> {/*guidebox 닫는 div */}

              
              <div className='box3'>
                  <p className='g-content'>
                      3. 나에게 <span className='highlight'>더 잘 맞는</span> 집을 골라줘요
                  </p>
                  <div className='subs'>
                  <p className='subcontent'>나의 정보와 집의 정보를 토대로</p><br />
                  <p className='subcontent'>“ PICK씨 “ 가 고민 중인 집 중</p><br />
                      <p className='subcontent'>더 잘 맞는 집의 순위를 매겨줘요!</p>
                  </div>
                  <img src={guide3} alt='guide3' className='guide3'></img>

              </div> {/*box3 닫는 div */}
              </div> {/*guidebox 닫는 div */}
              
          <div className='underbox'>
              
              <div className='mascotbox'>
                  <img src={guidemascot} alt='guidemascot' className='guidemascot'></img>
              </div>

                  <div className='box2'>
                      <p className='g-content'>
                          <span className='highlight'>2. 집</span>에 대해 알려줘요!
                      </p>
                  <div className='subs'>
                  <p className='subcontent'>고민 중인 3가지 집의 종류, 가격,</p><br />
                  <p className='subcontent'> 관리비 등의 정보를 입력해요!</p>
                      </div>
                      
                      <img src={guide2} alt='guide2' className='guide2'></img>
                      
              </div> {/*box2 닫는 div */}
          
                  </div> {/*underbox 닫는 div */}

                  </div> {/*left-section 닫는 div */}

             <div className='help'>
             <p className='zip'>" ZIPICK " 의</p> 
              <p className='use'> 도움이 필요한가요?</p>
              <button className="help-button" onClick={handleToMain}>도와줘!</button>
          </div>
          
          </div> {/*guide-content 닫는 div */}



              </div>
              
   
  )
}

export default Guide
