import { AiFillDelete } from "react-icons/ai";
import { RxUpdate } from "react-icons/rx";

const ViewScreen = () => {
  return (
    <div className="w-full h-auto flex justify-center bg-green-400">
      <div className="w-[95%] flex mt-5 flex-wrap">
        <div className="w-[330px] h-[200px] rounded-md bg-white flex my-5 flex-col items-center max-sm:h-[160px] max-sm:text-[14px]  mx-5">
          <div className="w-[90%] border rounded-md h-[150px] mt-2"></div>
          <div className="w-[60%] max-sm:mb-2">
            <div className="flex items-center justify-between mt-[6px] ">
              <div className="hover:cursor-pointer">
                <RxUpdate className="text-2xl" />
              </div>
              <div className="hover:cursor-pointer">
                <AiFillDelete className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewScreen;
