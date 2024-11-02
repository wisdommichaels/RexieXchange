import { Link } from "react-router-dom";
import Mylogo from "./Mylogo";
import Username from "./Username";
import Navbar from "./Navbar";

const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  let isloggedin = false;
  return (
    <section id="black">
{/*    
      <div
        id="menu"
        className="flex sm:hidden justify-center rounded-b-lg pb-8 bg-[#161D6F] gap-8  text-[14px] items-center text-white"
      >
        <Link
          to={"/"}
          className="bg-white text-[#161D6F]  rounded-lg py-2 px-4 shadow-md"
        >
          Home
        </Link>
        <Link to={"/sell"} className=" bg-white text-[#161D6F]  rounded-lg py-2 px-4 shadow-md">
          Sell Gift Card
        </Link>
        <Link to={"/checkrate"} className="bg-white text-[#161D6F] rounded-lg py-2 px-4 shadow-md">
          Check Rate
        </Link>
      </div> */}
      <div className="card hidden sm:flex">
        <div className="top-section h-52 sm:h-[530px] rounded-none">
          <div className="border"></div>
          {children}
          <div className="icons">
            <div className="logo">
              <Mylogo />
            </div>
            <Navbar/>
            {isloggedin ? (
              <Username/>
            ) : (
              <div className="logins flex justify-between items-center gap-3 mr-8 mt-3">
                <Link
                  to={"/Login"}
                  className="login-button text-[#161D6F]  bg-[#FFFFFF] font-normal"
                >
                  LOGIN
                </Link>
                <Link
                  to={"/signup"}
                  className="signup-button text-[#161D6F] bg-[#FFFFFF] font-normal"
                >
                  SIGN UP
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
