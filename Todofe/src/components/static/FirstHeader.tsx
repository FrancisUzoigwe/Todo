const FirstHeader = () => {
  return (
    <div className="w-full h-[60px] bg-black flex justify-center items-center ">
      <div className="w-[90%] flex items-center justify-between h-full">
        <div>logo</div>
        <div className="flex items-center ">
          <button className="px-4 py-[6px] rounded bg-blue-500 text-white">
            Signin
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
