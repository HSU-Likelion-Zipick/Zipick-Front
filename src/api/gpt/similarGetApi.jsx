// src/api/gpt/similarGetApi.jsx
import defaultInstance from "../../utils/instance";

const getSimilarUserData = async (userId) => {
  try {
    const response = await defaultInstance.put(`/gpt/${userId}/similar`);
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (error) {
    console.error("❌ 유사 사용자 정보 가져오기 실패:", error);
    return null;
  }
};

export default getSimilarUserData;
