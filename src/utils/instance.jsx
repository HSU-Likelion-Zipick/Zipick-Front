import axios from "axios";

const BASE_URL = `http://3.39.136.160:8080/api/`;

const defaultInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  }, //headers
}); // const defaultInstande = axios.create

export default defaultInstance;
