// src/apis/userPostApi.js
import defaultInstance from "../../utils/instance";

const userPostApi = async (payload) => {
  try {
    const response = await defaultInstance.post("user/MyData", payload);
    if (response.status === 201 && response.data.isSuccess) {
      return response.data.data.userId; // userId 반환
    }
  } catch (e) {
    console.error("userPostApi 오류:", e);
    return null;
  }
};

export default userPostApi;
