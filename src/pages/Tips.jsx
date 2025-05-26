import React from "react";
import "../css/Tips.scss";
import logo from "../assets/logo.svg";
import sublogo from "../assets/Subtract.svg";
import hidemascot from "../assets/hidemascot.png";

const Tips = () => {
  return (
    <div className="tips-big">
      {/* 상단 로고 */}
      <div className="tips-header-center">
        <img src={sublogo} alt="ZIPICK 서브 로고" className="tips-sub-logo" />
        <img src={logo} alt="ZIPICK 로고" className="tips-logo" />
      </div>

      {/* 마스코트 겹치기 */}
      <div className="tips-container">
        <div className="mascot-above">
          <img src={hidemascot} alt="마스코트" />
        </div>

        <div className="tips-banner">ZIPICK이 알려주는 쾌적한 자취방 TIP</div>
        <div className="tips-content">
          {/* 왼쪽 칼럼 */}
          <div>
            <div className="tips-section-title">실내 상태 및 기본 구조</div>
            <ul className="tips-list">
              <li>곰팡이나 결로 자국이 있는지 (천장, 창틀, 벽면)</li>
              <li>벽지·장판의 상태 (뜯김, 부풀음, 얼룩 여부)</li>
              <li>바닥의 경사나 꺼짐 여부</li>
              <li>샤시(창문) 밀폐 잘 되는지, 틈새 바람 여부</li>
              <li>실내 채광 확인 (오전/오후 시간대 참고)</li>
              <li>환기 잘 되는 구조인지 (맞통풍 구조인지)</li>
              <li>천장 누수 흔적 또는 변색</li>
            </ul>
            <div className="tips-section-title" style={{ marginTop: 30 }}>
              창문/방음
            </div>
            <ul className="tips-list">
              <li>창문 열었을 때 바깥 소음 정도</li>
              <li>창문이 잘 닫히고 잠기는지</li>
              <li>이중창인지 여부</li>
              <li>창문 크기 및 방향에 따라 채광 확인</li>
              <li>환풍기 있는지 여부 (창문 없는 욕실이라면 필수)</li>
            </ul>
            <div className="tips-section-title" style={{ marginTop: 30 }}>
              전기/가스/수도 설비
            </div>
            <ul className="tips-list">
              <li>콘센트 위치와 개수 (가구 배치와 맞는지)</li>
              <li>누전 차단기 정상 작동 여부</li>
              <li>온수 잘 나오는지, 수압 확인</li>
              <li>수전(수도꼭지) 누수 여부</li>
              <li>가스 밸브 정상인지, 누출 감지기 작동 여부</li>
              <li>전기 계량기/가스 계량기 별도 설치 여부</li>
            </ul>
            <div className="tips-section-title" style={{ marginTop: 30 }}>
              주방/욕실 체크
            </div>
            <ul className="tips-list">
              <li>싱크대 수납공간, 곰팡이 유무</li>
              <li>인덕션/가스레인지 작동 여부</li>
              <li>환풍기 작동 여부 (주방과 욕실 모두)</li>
              <li>욕실 곰팡이, 타일 상태</li>
              <li>변기 수압, 물 내려가는 속도</li>
              <li>욕실문이 안쪽으로 열리는지 (위험 요소)</li>
              <li>세면대, 배수구 냄새 유무</li>
              <li>샤워기 수압, 물 온도 전환 확인</li>
            </ul>
          </div>

          {/* 오른쪽 칼럼 */}
          <div>
            <div className="tips-section-title">옵션 점검</div>
            <div className="tips-section-desc">
              (선택된 옵션이 실제로 있는지, 작동 잘 되는지)
            </div>
            <ul className="tips-list">
              <li>에어컨 냉방 확인 (여름이면 필수)</li>
              <li>세탁기, 냉장고, 전자레인지 작동 여부</li>
              <li>침대/옷장/책상/책장 실제 상태 (파손·냄새 등)</li>
              <li>신발장 상태 (곰팡이, 악취 등)</li>
            </ul>
            <div className="tips-section-title" style={{ marginTop: 30 }}>
              외부 환경 및 건물 조건
            </div>
            <ul className="tips-list">
              <li>건물 외부 누수 흔적, 담배꽁초, 청결 상태</li>
              <li>복도 및 계단 조명 잘 들어오는지</li>
              <li>엘리베이터 작동 및 상태</li>
              <li>주차 공간 확인 (방문 차량 포함)</li>
              <li>무인 택배함 위치 및 상태</li>
              <li>
                <b>CCTV</b> 위치 및 보안상태
              </li>
              <li>공동 출입문 보안 (번호키/비밀번호 설정 여부)</li>
            </ul>
            <div className="tips-section-title" style={{ marginTop: 30 }}>
              소음/냄새 등 거주 환경
            </div>
            <ul className="tips-list">
              <li>위층/옆집 생활 소음 정도 확인</li>
              <li>담배냄새, 음식냄새 등 생활 냄새</li>
              <li>반려동물 소리, 학원/노래방 등 외부 소음</li>
              <li>주간/야간 시간대의 분위기 다를 수 있음 (참고)</li>
            </ul>
            <div className="tips-section-title" style={{ marginTop: 30 }}>
              기타 체크포인트
            </div>
            <ul className="tips-list">
              <li>쓰레기 버리는 장소와 수거 요일</li>
              <li>관리실 또는 경비 유무</li>
              <li>1층이면 창문 방범창 유무 확인</li>
              <li>근처 편의시설 (편의점, 세탁소, 마트 등)</li>
              <li>건물 배수 상황 (비 오면 물 고임 등)</li>
            </ul>
          </div>
        </div>
        {/* 하단 버튼 */}
        <div className="next-btn">
          <button>다음으로</button>
        </div>
      </div>
    </div>
  );
};

export default Tips;
