import { useState } from "react";
import SigninScreen from "./SigninScreen";
import Reg from "./Reg";




const RegisterScreen = () => {
   
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggle1, setToggle1] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(true);
    setToggle1(false);
  };
  // console.log(onToggle);

  const onToggle1 = () => {
    setToggle1(true);
    setToggle(false);
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-gray-100  ">
      <div className="w-[93%] h-[93%]  rounded-xl shadow-3xl flex overflow-hidden max-lg:justify-center">
        <div className="w-[65%] bg-blue-400 flex rounded-3xl flex-col items-center max-lg:hidden">
          <div className="w-full h-full rounded-3xl bg-green-300">Left</div>
        </div>
        <div className="w-[35%] flex flex-col items-center justify-center">
          <div className="w-[350px] bg-white h-[430px] rounded-lg flex flex-col items-center">
            <div className="flex w-full justify-between my-2">
              <div className="flex w-full items-center justify-center ">
                <div className="flex my-1">
                  <button
                    className={`${toggle? "border border-green-400 text-green-300": " bg-green-400 text-white"} py-2 px-5 ml-2 rounded-md  font-semibold transition-all duration-500`}
                    onClick={onToggle}
                  >
                    Login
                  </button>
                  <button
                    onClick={onToggle1}
                    className={`${toggle1? "border border-green-400 text-green-300": " bg-green-400 text-white"} py-2 px-5 ml-2 rounded-md  font-semibold transition-all duration-500`}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
            {toggle ? <SigninScreen /> : <Reg />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
