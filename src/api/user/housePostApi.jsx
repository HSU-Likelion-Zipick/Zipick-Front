import defaultInstance from "../../utils/instance";

// 집 정보 등록 API
const housePostApi = async (
  userId, // PathVariable로 사용할 사용자 ID
  houseName, // 집 이름
  kind, // 집 종류
  size, // 평수
  management, // 관리비
  parking, // 주차여부
  elevator, // 엘리베이터 여부
  direction, // 집 방향
  completion_date, // 준공일
  station, // 역/정류장까지 거리
  destination, // 목적지까지 거리 (← 오타 수정)
  year_rent, // 전세금
  monthly_rent, // 월세
  deposit, // 보증금
  full_floors, // 전체 층수
  floor, // 원하는 층수
  rank, // 추천 순위
  selectedCharges, // 관리비 포함 항목 리스트
  selectedOptions // 집 옵션 (예: 냉장고, 세탁기 등)
) => {
  try {
    const response = await defaultInstance.post(
      `user/${userId}/HouseData`, // PathVariable 동적 삽입
      {
        houseName,
        kind,
        size,
        management,
        parking,
        elevator,
        direction,
        completion_date,
        station,
        destination,
        year_rent,
        monthly_rent,
        deposit,
        full_floors,
        floor,
        rank,
        selectedCharges,
        selectedOptions,
      }
    );

    if (response.status === 200) {
      console.log("작성 성공");
      return response.data.data.postId;
    } else {
      console.warn("작성은 성공했으나 상태 코드가 200이 아닙니다.");
      return null;
    }
  } catch (e) {
    console.error("housePostApi 오류:", e);
    return null;
  }
};

export default housePostApi;
