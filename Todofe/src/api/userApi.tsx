import axios from "axios";

const URL: string = "http://localhost:3400";
export const registerApi = async (data: any) => {
  await axios.post(`${URL}/api/register`, data).then((res: any) => {
    console.log("rd", res.data.data);
    return res.data.data;
  });
};

export const signinApi = async (data: any) => {
  await axios.post(`${URL}/api/signin`, data).then((res: any) => {
    return data.data;
  });
};

export const viewOneApi = async (userID: any) => {
  await axios.get(`${URL}/${userID}/view-one`).then((res: any) => {
    return res.data.data;
  });
};
