import { Link } from "react-router-dom";

const Mobilefooter = () => {
  return (
    <div>
      <div
        id="menu"
        className="bg-[#161D6F] w-full fixed bottom-0 left-0 z-10 flex sm:hidden justify-between px-6 pb-3 pt-2 mt-5  text-[16px] items-center text-white"
      >
         <Link to={"/"}className="flex flex-col justify-center items-center">
          <img className="w-[27px] h-[27px]" src="src\assets\SVG\homeicon.svg" alt=""/>
        
            <p className=" text-[14px]"> Home </p>
        </Link>

        <Link to={"/sell"} className="flex flex-col justify-center items-center">
          <img className="w-[25px] h-[25px]" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740808/sellicon_lqtg0t.png" alt=""/>
        
            <p className=" text-[14px] "> Sell Card </p>
        </Link>

        <Link to={"/checkrate"} className="flex flex-col justify-center items-center">
          <img className="w-[25px] h-[25px]" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729742009/icons8-estimate-50_er6vb4.png" alt=""/>
        
            <p className="text-[14px] "> Check Rate </p>
        </Link>

        <Link to={"/dashboard"} className="flex flex-col justify-center items-center">
          <img className="w-[27px] h-[27px]" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740808/dashboardicon_bpxaku.png" alt=""/>
          
            <p className=" text-[14px]">Dashboard</p>
        </Link>

        <Link to={"/settings"} className="flex flex-col justify-center items-center">
          <img className="w-[27px] h-[27px]" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740808/customericon_gq2lmh.png" alt=""/>
          
            <p className="  text-[14px] ">Profile</p>
        </Link>
      </div>
    </div>
  );
};

export default Mobilefooter;
