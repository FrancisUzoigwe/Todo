import { Link } from "react-router-dom";
import { SiTask } from "react-icons/si";
const FirstHeader = () => {
  return (
    <div className="w-full h-[60px] bg-white flex justify-center items-center ">
      <div className="w-[90%] flex items-center justify-between h-full">
        <div className="cursor-pointer">
          <SiTask className="text-2xl"/>
        </div>
        <div className="flex items-center ">
          <Link to="/signin">
            <button className="px-4 py-[6px] rounded bg-blue-500 text-white">
              Get started
            </button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
