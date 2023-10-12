import { SiMastodon } from "react-icons/si";
import { LuLogOut } from "react-icons/lu";
import useUser from "../../global/globalFile";
import { LuListTodo } from "react-icons/lu";
import { Link } from "react-router-dom";
const Sider = () => {
  const [state, setState] = useUser();

  return (
    <div className="w-[80px] rounded-[10px] h-screen flex-col flex items-center max-md:mr-2 max-lg:mr-2 max-xl:mr-2 bg-green-400 ">
      <div className="my-10"></div>
      {/* <div className="my-2">Toggle</div> */}
      <div>
        <Link to="/home">
          <div className="">
            <SiMastodon className="text-4xl hover:cursor-pointer text-white" />
          </div>
        </Link>
      </div>
      <Link to="/home/view">
        <div className="mt-20">
          <LuListTodo className="text-3xl text-white" />
        </div>
      </Link>
      <div className="mt-44 flex flex-col items-center ">
        <div className="w-[50px] h-[50px] border rounded-full hover:scale-110 duration-500 transition-all hover:cursor-pointer">
          <img
            src=""
            className="w-full h-full rounded-full object-cover overflow-hidden"
          />
        </div>
        <div className="text-[10px] mt-1 flex-wrap text-center">Email</div>
        <div className="[13px] flex-wrap text-center">Name</div>
      </div>
      <div
        onClick={() => {
          setState(null);
        }}
      >
        <LuLogOut className="rotate-180 mt-5 text-3xl hover:scale-125 transition-all duration-500 hover:cursor-pointer text-white" />
      </div>
    </div>
  );
};

export default Sider;
