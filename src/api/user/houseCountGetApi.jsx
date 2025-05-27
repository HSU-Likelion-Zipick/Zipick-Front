import defaultInstance from "../../utils/instance";

/**
 * 사용자가 작성한 집 개수 조회 API
 * @param {number} userId - 사용자 ID (PathVariable)
 * @returns {Promise<number>} - 등록된 집 개수 (house_count)
 */
const houseCountGetApi = async (userId) => {
  try {
    const response = await defaultInstance.get(`user/${userId}/HouseCount`);

    if (response.status === 200 && response.data.isSuccess) {
      return response.data.data.house_count;
    } else {
      console.warn("응답은 왔지만 성공 코드가 아님:", response.data);
      return 0;
    }
  } catch (error) {
    console.error("집 개수 조회 API 호출 오류:", error);
    return 0;
  }
};

export default houseCountGetApi;
