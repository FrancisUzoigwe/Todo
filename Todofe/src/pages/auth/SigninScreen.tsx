// import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinApi } from "../../api/userApi";
import useUser from "../../global/globalFile";

const SigninScreen = () => {
  const [state, setState] = useUser();
  const navigate = useNavigate();
  const Schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmit = handleSubmit(async (data) => {
    const { email, password } = data;
    signinApi({ email, password }).then(() => {
      navigate("/home");
      setState({});
      console.log(setState);
    });
  });
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-400">
      <form
        className="w-[370px] bg-white min-h-[400px] rounded-lg shadow-lg flex flex-col items-center"
        onSubmit={onHandleSubmit}
      >
        <div className="mt-[25px] font-semibold text-lg">
          Welcome, Please Signup
        </div>
        <div className=" flex flex-col items-center">
          <div className="text-[12px] font-semibold">Signup With Google</div>
          <div className="border px-10 mt-1 py-2 rounded-md hover:bg-gray-200 duration-500 cursor-pointer">
            <FcGoogle className="text-2xl" />
          </div>

          <div className="mt-[25px] relative rounded-md">
            <div className="absolute bg-white px-1 text-[13px] font-semibold ml-[10px] mt-[-10px] ">
              Enter Email:
            </div>
            <div className="min-w-[300px] h-[40px] border flex justify-center items-center rounded-[3px] overflow-hidden">
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
            <div className="absolute bg-white px-1 text-[13px] font-semibold ml-[10px] mt-[-10px] ">
              Enter Password:
            </div>
            <div className="min-w-[300px] h-[40px] border flex justify-center items-center rounded-[3px] overflow-hidden">
              <input
                type="text"
                placeholder="example@1234"
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
        </div>
        <div className="flex justify-between items-center w-[300px] mt-[10px]">
          <input
            type="checkbox"
            onChange={(e: any) => setChecked(e.target.checked)}
            className="mr-1"
          />
          <div className="text-[10px]  ">
            By checking, you Agree to our{" "}
            <span className="font-semibold underline">Terms</span> and {""}
            <span className="font-semibold underline">Conditions</span>
          </div>
        </div>
        <button
          className={`mt-2 px-7 py-2 rounded-md ${
            checked ? "bg-blue-400" : "bg-gray-300"
          } text-white font-semibold duration-500 cursor-pointer`}
          type="submit"
          disabled={!checked}
        >
          Signup
        </button>
        <div className="text-[13px] font-semibold mt-2 ">
          Don't Have an Account?{" "}
          <Link to="/register">
            <span className="underline text-red-400 ml-2">Signup</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SigninScreen;
