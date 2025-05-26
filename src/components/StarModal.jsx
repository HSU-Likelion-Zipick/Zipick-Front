import React, { useState } from 'react';
import styles from "../css/StarModal.module.scss";
import guidemascot from "../assets/guidemascot.png";
import starimage from "../assets/star.png";
import orangestar from "../assets/orangestar.png";
import { useNavigate } from 'react-router-dom';

const StarModal = () => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const navigate = useNavigate();

    const handleToHome = () => { //고마워 버튼 누르면 -> home으로
        navigate('/home'); 
    }

  return (
    <div className={styles['modal-overlay']}>
          <div className={styles['modal-box']}>
              <div className={styles['limit-content']}>
                  <img src={guidemascot} alt='guidemascot' className={styles['guidemascot']}></img>
                  <div className={styles['titles']}>
                      <p className={styles['modal-title']}><span style={{ color: "#FF5927" }}>‘PICK씨’</span>가</p>
                      <p className={styles['modal-title']}>도움 되었을까요?</p>
                   
                      <p className={styles['recommend']}>별을 주면 처음으로 돌아가요!</p>


            {/* 별점 영역 */}
            <div className={styles["star-rating"]}>
             {[1, 2, 3, 4, 5].map((star) => (
              <img
                     key={star}
                     src={star <= (hover || rating) ? orangestar : starimage}
                     alt="star"
                    className={styles["star-img"]}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                     onMouseLeave={() => setHover(0)}
                 />
             ))}
    </div>
                     
                     
        </div> {/*titles div */}
</div>{/*limit-content div */}

     
              <button className={styles["button"]} onClick={handleToHome} >고마워!</button>
            

          </div>{/*modal-box 닫는 div */}

    {/*modal-overlay 닫는 div */}
    </div> 
  )
}

export default StarModal
