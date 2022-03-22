import axios from "axios";
// import { AUTH_TOKEN, API_BASE_URL } from "../constants/typecode";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const getToken = async () => {
//   const authDataSerialized = await AsyncStorage.getItem("@AuthData");
//   if (authDataSerialized) {
//     return authDataSerialized;
//   }
//   return "";
// };

// //start axios setup
// axios.interceptors.request.use(
//   async (config) => {
//     const authDataSerialized = await AsyncStorage.getItem("@AuthData");
//     if (authDataSerialized) {
//       config["headers"]["Authorization"] = `Bearer ${authDataSerialized}`;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

//end axios setup

export const getOffers = () => {
  // detailsViewHandler;
  // cricket images data

  return axios.get("/api/user/offers");
};
export const getPromotions = () => {
  // detailsViewOfferHandler;
  // show offers - in design its on the last page
  return axios.get("/api/user/promotions");
};
export const getSite = (game_type = "") => {
  //  platform list data
  let url = game_type
    ? `/api/user/websites?game_type=${game_type}`
    : "/api/user/websites";
  return axios.get(url);
};
export const getSiteByID = (id) => {
  //  single platform list data
  return axios.get(`/api/user/websites/${id}`);
};
export const getUser = () => {
  return axios.get("/api/user");
};
export const getUserWebsiteID = () => {
  // active IDs
  return axios.get("/api/user/websites/own");
};
export const getComplaints = () => {
  return axios.get("/api/user/complaints");
};
export const sendOTP = (data) => {
  return axios.post("/api/otp/login", data);
};
export const verifyOTP = (data) => {
  return axios.post("/api/otp/verify", data);
};

export const checkNumber = (data) => {
  return axios.post("/api/verify-mobile", data);
};
export const registerOTP = (data) => {
  return axios.post("/api/otp/register", data);
};
export const getComplaint = () => {
  return axios.get("/api/user/complaints");
};

export const getLearn = () => {
  return axios.get("/api/user/learns");
};
