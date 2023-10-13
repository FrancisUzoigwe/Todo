import useUser from "../../global/globalFile";
import { TbLogout2 } from "react-icons/tb";
import { SiTask } from "react-icons/si";
import Swal from "sweetalert2";
const Header = () => {
  const [state, setState] = useUser();
  return (
    <div className="w-full h-[80px] bg-black text-white flex justify-center items-center">
      <div className="w-[90%] h-full flex justify-between items-center">
        <div className="text-3xl">
          <SiTask />
        </div>
        <div
          className="text-3xl"
          onClick={() => {
            Swal.fire({
              text: "Logged out",
              icon: "success",
            });
            setState(null);
          }}
        >
          <TbLogout2 />
        </div>
      </div>
    </div>
  );
};

export default Header;
