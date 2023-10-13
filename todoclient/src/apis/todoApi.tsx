import axios from "axios";


// const [state]: any = useUser();
const url: string = "http://localhost:3400/api";

export const createTodo = async (id:any,data: any) => {
  try {
    return await axios.post(`${url}/${id}/create`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const readOne = async (userID: any) => {
  try {
    return await axios.get(`${url}/${userID}/view-one-todo`).then((res: any) => {
      return res.data.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteOne = async (taskID: any) => {
  try {
    return await axios.delete(`${url}/${taskID}/delete-task`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    console.log(error);
  }
};
