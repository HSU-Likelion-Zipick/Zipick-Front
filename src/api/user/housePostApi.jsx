import React from "react";
import defaultInstance from "../user/utils/instance";

const housePostApi = async (
  houseName,
  kind,
  size,
  management,
  parking,
  elevator,
  direction,
  completion_date,
  station,
  desination,
  year_rent,
  monthly_rent,
  deposit,
  full_floors,
  floor,
  rank,
  selectedCharges,
  selectedOptions
) => {
  try {
    const response = await defaultInstance.post(`post`, {
      houseName,
      kind,
      size,
      management,
      parking,
      elevator,
      direction,
      completion_date,
      station,
      desination,
      year_rent,
      monthly_rent,
      deposit,
      full_floors,
      floor,
      rank,
      selectedCharges,
      selectedOptions,
    });

    if (response.data.httpStatus === 200) {
      console.log("작성 성공");
      return reponse.data.data.postId;
    }
  } catch (e) {
    console.error(e);
  }
};
export default housePostApi;
