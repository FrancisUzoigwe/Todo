import ViewScreen from "./ViewScreen";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import useUser from "../../global/globalFile";
import { createTodo } from "../../apis/todoApi";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const HomeScreen = () => {
  const [state] = useUser();
  const Schema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
  });

  const { register, reset, handleSubmit } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    const { description, title } = data;
    createTodo(state, { description, title }).then((res: any) => {
      reset();
    });
  });

  const [parent] = useAutoAnimate();
  return (
    <form
      className="w-full h-screen bg-green-300 flex items-center flex-col"
      onSubmit={onHandleSubmit}
    >
      <div className="mt-10 w-full flex items-center justify-center h-[45px]">
        <input
          type="text"
          className="w-[70%] h-full rounded-full pl-4 max-sm:h-[40px] max-sm:text-[15px]"
          placeholder="Name Task"
          {...register("title")}
        />
      </div>
      <div className="mt-4 w-full flex items-center justify-center h-[45px] max-sm:h-[40px] max-sm:text-[15px]">
        <input
          type="text"
          className="w-[50%] h-full rounded-full pl-4 "
          placeholder="Write Task"
          {...register("description")}
        />
      </div>
      <div className="mt-8">
        <button
          className="px-5 py-2 rounded-xl bg-white text-green-300 max-sm:text-[13px]"
          ref={parent}
        >
          Create Task
        </button>
      </div>
      <div className="flex flex-col w-[70%] h-auto mt-7">
        <ViewScreen />
      </div>
    </form>
  );
};

export default HomeScreen;
