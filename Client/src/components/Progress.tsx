import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Progress = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger the animation when the component is mounted
  }, []);

  return (
    <div className="">
      <section className="flex flex-col justify-center items-center h-screen w-screen ">
        <div
          className={`w-full sm:rounded-2xl sm:w-[40%] h-[100vh] sm:h-fit sm:py-10 flex flex-col justify-center shadow-sm shadow-[#bbd8e6] items-center m-auto bg-[#7E9ECF] 
          ${isVisible ? "animate-fadeIn" : "opacity-0"}`} // Animation classes
        >
          <h1 className="p-5 text-[24px] mt-6">Transaction Status</h1>
          <div className="bg-[#161D6F] rounded-full p-3 mt-5 sm:mt-10 shadow-md shadow-[#cff0ff]">
            <img className="w-20 sm:w-10" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1734016310/progress_osezcy.png" alt="" />
          </div>
          <div className="w-[60%] flex flex-col justify-center items-center mt-10 sm:mt-5">
            <h1 className="text-[20px] font-bold text-center">Order in Progress</h1>
            <p className="text-center text-lg">
              Dear User, please wait, we are working on your order, an email will be sent to you shortly.
            </p>
          </div>
          <Link
            to={"/"}
            className="px-20 py-3 font-bold shadow-sm btnn shadow-[#cff0ff] bg-gradient-to-r from-[#161d6f] to-[#1422bd] hover:bg-[#161d6f] text-white rounded-lg mt-6 mb-8 text-[16px]"
          >
            Ok
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Progress;
