import React from "react";
import axios from "axios";

const BASE_URL = `http://15.164.167.104:8080/api/`;

const defaultInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  }, //headers
}); // const defaultInstande = axios.create

export default instance;
