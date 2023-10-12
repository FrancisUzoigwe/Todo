import useUser from "../../global/globalFile";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
// import { createTask } from "../../api/todoApi";

const HomeScreen = () => {
  const [state] = useUser();
  const Schema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmit = handleSubmit((data) => {
    console.log("Created:", data);
  });

  return (
    <div className=" rounded-md bg-green-400 h-screen flex items-center justify-center">
      <form
        className="w-[90%] h-[400px] bg-gray flex flex-col items-center justify-center "
        onSubmit={onHandleSubmit}
      >
        <div className="w-[70%] bg-black h-[45px] rounded-md overflow-hidden max-sm:h-[40px]">
          <input
            type="text"
            className="h-full w-full border-blue-500 border rounded-md pl-5"
            placeholder="Name a task"
            {...register("title")}
          />
        </div>
        <div className="w-[50%] bg-black h-[45px] rounded-md overflow-hidden mt-5 max-sm:h-[40px]">
          <input
            type="text"
            className="h-full w-full border-blue-500 border rounded-md pl-5"
            placeholder="Description"
            {...register("description")}
          />
        </div>
        <div className="mt-5">
          <button
            className="px-5 py-2 rounded-md bg-white text-green-400 font-medium border-blue-500 border max-sm:text-[13px] max-sm:px-4 py-1"
            type="submit"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default HomeScreen;
