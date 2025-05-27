// src/api/user/getUserData.js
import defaultInstance from "../../utils/instance";

export const getUserData = async () => {
  try {
    const res = await defaultInstance.post("/user/MyData");
    if (res.status === 200 && res.data.data) {
      // { user_id, nickname }
      return res.data.data;
    }
  } catch (err) {
    console.error("❌ 사용자 정보 가져오기 실패:", err);
    // 404 같이 유저 없을 땐 null 반환
  }
  return null;
};
