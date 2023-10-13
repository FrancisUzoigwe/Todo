import axios from "axios";

// const URL: String = "http://localhost:3400";
const URL: String = "https://hackathon-challange-be.onrender.com";

export const registerApi = async (data: any) => {
  return await axios.post(`${URL}/api/register`, data).then((res: any) => {
    return res.data.data;
  });
};

export const signinApi = async (data: any) => {
  return await axios.post(`${URL}/api/signin`, data).then((res: any) => {
    return res.data.data;
  });
};
