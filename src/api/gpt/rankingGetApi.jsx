import defaultInstance from "../../utils/instance";

const getRankingData = async (userId) => {
  try {
    // userId를 Number로 변환 (이미 숫자면 변환해도 문제 없음)
    const id = Number(userId);

    const response = await defaultInstance.get(`/gpt/${id}/ranking`);
    if (response.status === 200 && response.data.data) {
      return response.data.data.recommend;
    }
  } catch (error) {
    console.error("❌ 집 순위 정보 가져오기 실패:", error);
  }
  return [];
};
export default getRankingData;
