import { Link } from "react-router-dom";

const Mobilefooter = () => {
  return (
    <div>
      <div
        id="menu"
        className="bg-[#161D6F] w-full fixed bottom-0 left-0 z-10 flex sm:hidden justify-between px-6 py-3 mt-5  text-[16px] items-center text-white"
      >
         <Link to={"/"}className="flex flex-col justify-center items-center">
          <img src="src\assets\SVG\homeicon.svg" alt=""/>
        
            <p className=" font-semibold text-[14px]"> Home </p>
        </Link>

        <Link to={"/sell"} className="flex flex-col justify-center items-center">
          <img className="w-[34px] h-[34px]" src="src\assets\sellicon.png" alt=""/>
        
            <p className=" font-semibold text-[14px] "> Sell Card </p>
        </Link>

        <Link to={"/dashboard"} className="flex flex-col justify-center items-center">
          <img className="w-[38px] h-[38px]" src="src\assets\dashboardicon.png" alt=""/>
          
            <p className=" font-semibold text-[14px]">Dashboard</p>
        </Link>

        <Link to={"/settings"} className="flex flex-col justify-center items-center">
          <img className="w-[38px] h-[38px]" src="src\assets\settingicon.png" alt=""/>
          
            <p className=" font-semibold text-[14px] ">Settings</p>
        </Link>
      </div>
    </div>
  );
};

export default Mobilefooter;
