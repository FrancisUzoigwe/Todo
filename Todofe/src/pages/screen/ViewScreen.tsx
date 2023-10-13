import { MdAutoDelete } from "react-icons/md";
import { useUserTask } from "../../hooks/useTanstack";
import useUser from "../../global/globalFile";
import { deleteOne } from "../../apis/todoApi";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const ViewScreen = () => {
  const [state]: any = useUser();
  const { data }: any = useUserTask(state);
  const [parent] = useAutoAnimate();
  return (
    <div>
      {data?.map((props: any) => (
        <div
          key={props._id}
          className="w-full min-h-[100px] flex justify-between items-center rounded-xl bg-white mb-2"
        >
          <div className="w-[90%] h-full" ref={parent}>
            <div className="ml-5 h-full flex flex-col justify-center w-full">
              <div className="my-3 font-bold text-[18px] w-[90%]  h-auto ">
                {props?.title}
              </div>
              <div className="mb-3 text-[15px] w-[90%]  h-auto">
                {props?.description}
              </div>
            </div>
          </div>
          <div
            className="mr-5"
            onClick={() => {
              deleteOne(props._id);
            }}
            ref={parent}
          >
            <MdAutoDelete className="text-3xl text-red-500" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewScreen;
