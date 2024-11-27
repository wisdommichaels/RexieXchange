import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Username from "./Username";

const OnscrollHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false); // Start hidden
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position
  const [isLoggedIn, setisLoggedIn] = useState<string | null>(""); 

  useEffect(() => {
    setisLoggedIn(localStorage.getItem("token"))

    const handleScroll = () => {
     
      const currentScroll = window.pageYOffset;

      if (currentScroll > 0) {
        setIsVisible(true); // Show header when scrolling down
      } else {
        setIsVisible(false); // Hide header when at the top
      }

      setScrollPosition(currentScroll); // Update scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);
  return (
    <header
      className={`fixed top-0 hidden sm:block w-full bg-[#161D6F] text-white shadow-md z-50 transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-3 shadow-md shadow-transparent">
        {/* Logo Section */}
        <Link
          to={"/"}
          className="flex justify-center items-center cursor-pointer"
        >
          <img
            className="w-12"
            src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740667/mylogo_qxoqqk.png"
            alt=""
          />
          <div className="flex-col justify-center items-center leading-4 pt-3">
            <h1 className="font-bold sm:text-[24px] text-[14] text-white">
              GiftHub
            </h1>
            <p className="text-[8px] font-bold text-center text-white">
              Exchange with Ease
            </p>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="mt-1 rounded-none">
          <ul className="flex justify-center items-center gap-8">
            <li>
              <Link
                to={"/"}
                className="focus:text-[#E7500F] hover:text-[#E7500F]"
              >
                Home
              </Link>
            </li>
            <div className="menu">
              <div className="item">
                <div className="link pt-0">
                  <span className="text-white cursor-pointer ">Gift Card</span>
                  <svg viewBox="0 0 360 360" xmlSpace="preserve">
                    <g id="SVGRepo_iconCarrier">
                      <path
                        id="XMLID_225_"
                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="submenu">
                  <div className="submenu-item">
                    <Link to={"/sell"} className="submenu-link ">
                      Sell Gift Card
                    </Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={"/checkrate"} className="submenu-link">
                      {" "}
                      Check Rate{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <li>
              <Link to={"/dashboard"} className="hover:text-[#E7500F]">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to={"/aboutpage"} className="hover:text-[#E7500F]">
                About
              </Link>
            </li>
          </ul>
        </nav>

        {isLoggedIn? (       
        <div className="flex items-center space-x-3">
          <Username />
        </div>
            ) : (
                <div className="logins flex justify-between items-center gap-3 mr-4">
                <Link
                  to={"/Login"}
                  className="login-button text-[#161D6F]  bg-[#FFFFFF] font-normal"
                >
                  LOGIN
                </Link>
                <Link
                  to={"/login"}
                  className="signup-button text-[#161D6F] bg-[#FFFFFF] font-normal"
                >
                  SIGN UP
                </Link>
              </div>
         )}
      </div>
    </header>
  );
};

export default OnscrollHeader;
