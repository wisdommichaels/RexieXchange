import { Link } from "react-router-dom";

const Mobilefooter = () => {
  return (
    <div>
      <div
        id="menu"
        className="bg-[#161D6F] w-full fixed bottom-0 left-0 z-10 flex sm:hidden justify-between px-6 pb-3 pt-4 mt-5  text-[16px] items-center text-white"
      >
         <Link to={"/"}className="flex flex-col justify-center items-center">
          <img className="w-[28px] h-[28px]" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1730365077/homeicon_tjzfnn.svg" alt=""/>
        
            <p className=" text-[12px]"> Home </p>
        </Link>


        <Link to={"/checkrate"} className="flex flex-col justify-center items-center">
          <img className="w-[28px] h-[28px]" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729742009/icons8-estimate-50_er6vb4.png" alt=""/>
        
            <p className="text-[12px] "> Check Rate </p>
        </Link>

        
        <Link to={"/sell"} className="flex flex-col justify-center items-center">
          <img className="w-[26px] h-[26px]" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740808/sellicon_lqtg0t.png" alt=""/>
        
            <p className=" text-[12px] "> Sell Card </p>
        </Link>

        <Link to={"/dashboard"} className="flex flex-col justify-center items-center">
          <img className="w-[28px] h-[28px]" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740808/dashboardicon_bpxaku.png" alt=""/>
          
            <p className=" text-[12px]">Dashboard</p>
        </Link>

        <Link to={"/userprofile"} className="flex flex-col justify-center items-center">
          <img className="w-[25px] h-[25px]" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740808/customericon_gq2lmh.png" alt=""/>
          
            <p className="  text-[12px] ">My Profile</p>
        </Link>
      </div>
    </div>
  );
};

export default Mobilefooter;
