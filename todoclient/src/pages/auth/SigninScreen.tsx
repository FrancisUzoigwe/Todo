import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinApi } from "../../apis/userApi";
import { useNavigate } from "react-router-dom";
import useUser from "../../global/globalFile";
import Swal from "sweetalert2";

const Reg = () => {
  const [state, setState] = useUser();
  console.log(typeof state);

  // console.log(state);

  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean>(false);

  const Schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    const { email, password } = data;
    await signinApi({ email, password }).then((res) => {
      setState(res);
      if (res) {
        Swal.fire({
          icon: "success",
          timer: 2000,
          text: "Signed in successfully",
        }).then(() => {
          navigate("/home");
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "Error occured, check and try again",
          footer: "Network error? check if you connected to the internet",
        }).then(() => {
          navigate("/register");
        });
      }
    });
  });

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <div className="mt-[25px] relative rounded-md">
          <div className="absolute bg-white px-1 text-[13px] max-sm:text-[10px] max-sm:mt-[-8px] font-semibold ml-[15px] mt-[-10px] ">
            Enter Email:
          </div>
          <div className="min-w-[300px] h-[40px] border flex justify-center items-center rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="example@gmail.com"
              className="w-full h-full outline-none  pl-5 placeholder:text-[13px] text-[13px]"
              {...register("email")}
            />
          </div>
          {errors.email?.message && (
            <div className="text-[11px] text-red-500 flex justify-end items-center mt-[-4px] font-semibold">
              Please provide a valid email address
            </div>
          )}
        </div>
        <div className="mt-[25px] relative rounded-md">
          <div className="absolute bg-white px-1 text-[13px] max-sm:text-[10px] max-sm:mt-[-8px] font-semibold ml-[15px] mt-[-10px] ">
            Enter Password:
          </div>
          <div className="min-w-[300px] h-[40px] border flex justify-center items-center rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="JohnDoe123"
              className="w-full h-full outline-none  pl-5 placeholder:text-[13px] text-[13px]"
              {...register("password")}
            />
          </div>
          {errors.password?.message && (
            <div className="text-[11px] text-red-500 flex justify-end items-center mt-[-4px] font-semibold">
              Please provide a password
            </div>
          )}
        </div>
        <div className="flex text-[13px] font-semibold items-center">
          <input
            type="checkbox"
            onClick={(e: any) => {
              setChecked(e.target.checked);
            }}
          />
          <div className=" ml-4 mt-[6px] ">Remember me</div>
        </div>{" "}
        <div className="w-full flex items-center justify-center mt-3 mb-3">
          <button
            className={`px-5 py-2 text-white text-[14px] transition-all duration-500 ${
              checked ? "bg-green-400" : "bg-gray-400"
            } rounded-md font-semibold`}
            type="submit"
            disabled={!checked}
          >
            Signin
          </button>
        </div>
        {/* <div>Have an account? <Link to="/signin">Signin</Link></div> */}
      </form>
    </div>
  );
};

export default Reg;
