import { SiMastodon } from "react-icons/si";

const Sider = () => {
  return (
    <div className="w-[70px] rounded-[10px] h-screen flex-col flex items-center max-md:mr-2 max-lg:mr-2 max-xl:mr-2 bg-red-400 ">
      <div className="my-10"></div>
      <div className="hover:cursor-pointer">
        <SiMastodon className="text-3xl " />
      </div>
      <div className="my-10"></div>
      <div>
        <div className="w-[50px] h-[50px] border rounded-full">
          <img src="" />
        </div>
        <div>Email</div>
        <div>Name</div>
      </div>
    </div>
  );
};

export default Sider;
