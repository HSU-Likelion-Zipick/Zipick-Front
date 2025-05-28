import defaultInstance from "../../utils/instance";

/**
 * 사용자가 등록한 집 스펙의 순위를 반환
 * @param {number} userId - 사용자 ID
 * @returns {Promise<Array>} 추천된 집 목록 (ranked)
 */
const getRankingData = async (userId) => {
  try {
    const id = Number(userId);

    // PUT 메서드로 변경, body는 없으므로 빈 객체 전달
    const response = await defaultInstance.put(`/gpt/${id}/ranking`, {});

    if (response.status === 200 && response.data.data) {
      return response.data.data.recommend;
    }
  } catch (error) {
    console.error("❌ 집 순위 정보 가져오기 실패:", error);
  }
  return [];
};

export default getRankingData;
