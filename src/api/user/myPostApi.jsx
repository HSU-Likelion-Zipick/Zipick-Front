import React from "react";
import defaultInstance from "../user/utils/instance";

const myPostApi = async (
  nickname,
  sex,
  age,
  job,
  month_income,
  reserve_money,
  transport,
  lifestyle_pattern
) => {
  try {
    const response = await defaultInstance.post(`post`, {
      nickname,
      sex,
      age,
      job,
      month_income,
      reserve_money,
      transport,
      lifestyle_pattern,
    });

    if (response.data.httpStatus === 200) {
      console.log("작성 성공");
      return reponse.data.data.postId;
    }
  } catch (e) {
    console.error(e);
  }
};

export default myPostApi;
