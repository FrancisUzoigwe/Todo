import axios from "axios";
import useUser from "../global/globalFile";

const URL: string = "http://localhost:3400";
const [user]: any = useUser();
export const createTask = async (data: any) => {
  await axios.post(`${URL}/${user?.userName}/create`).then((res: any) => {
    return res.data.data;
  });
};
