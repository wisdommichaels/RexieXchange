import { Link } from "react-router-dom";

const Mobilefooter = () => {
  return (
    <div>
      <div
        id="menu"
        className="bg-[#161D6F] w-full fixed bottom-0 left-0 z-10 flex sm:hidden justify-between px-6 pb-3 pt-2 mt-5  text-[16px] items-center text-white"
      >
         <Link to={"/"}className="flex flex-col justify-center items-center">
          <img className="w-[32px] h-[32px]" src="src\assets\SVG\homeicon.svg" alt=""/>
        
            <p className=" font-semibold text-[14px]"> Home </p>
        </Link>

        <Link to={"/sell"} className="flex flex-col justify-center items-center">
          <img className="w-[30px] h-[30px]" src="src\assets\sellicon.png" alt=""/>
        
            <p className=" font-semibold text-[14px] "> Sell Card </p>
        </Link>

        <Link to={"/checkrate"} className="flex flex-col justify-center items-center">
          <img className="w-[30px] h-[30px]" src="src\assets\svg\ratecheck.svg" alt=""/>
        
            <p className=" font-semibold text-[14px] "> Check Rate </p>
        </Link>

        <Link to={"/dashboard"} className="flex flex-col justify-center items-center">
          <img className="w-[32px] h-[32px]" src="src\assets\dashboardicon.png" alt=""/>
          
            <p className=" font-semibold text-[14px]">Dashboard</p>
        </Link>

        <Link to={"/settings"} className="flex flex-col justify-center items-center">
          <img className="w-[32px] h-[32px]" src="src\assets\customericon.png" alt=""/>
          
            <p className=" font-semibold text-[14px] ">Profile</p>
        </Link>
      </div>
    </div>
  );
};

export default Mobilefooter;
