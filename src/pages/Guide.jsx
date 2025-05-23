import React from 'react'
import "../css/Guide.scss";
import guide1 from "../assets/guide1.png";
const Guide = () => {
  return (
    <div className="guide">
          <div className="title">
              <p className='zip'>" ZIPICK "</p>
              <span className='use'> 이렇게 이용해요!</span>
          </div>
          
          <div className='guidebox'>
              <div className='box1'>
                  <p className='content'>1. 나에 대해 알려줘요!</p>
                  <p className='subcontent'>나의 직업, 수익, 생활패턴 등 정보를 입력해요.</p>
                  <img src={guide1} alt='guide1' className='guide1'/>
              </div>

              <div className='mascotbox'></div>
              <div className='box2'></div>
              <div className='box3'></div>



          </div>
    </div>
  )
}

export default Guide
