import { useState } from "react";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogOut";
import { ToastContainer } from "react-toastify";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const {logout} = useLogout()

  return (
    <div className="relative w-[50%] pt-3 pr-2">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none sm:hidden relative left-[145px]"
        aria-label="Toggle menu"
      >
        <div
          className={`w-6 h-0.5 bg-white mb-1.5 transition-transform ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white mb-1.5 transition-opacity ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-transform ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></div>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="absolute top-full left-4 w-[95%] bg-[#C9D8F0] shadow-md z-50 transition-all duration-300 rounded-lg mt-2"
        >
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link to="/contactpage" className="text-[#161D6F] hover:text-blue-500" onClick={toggleMenu}>
              Contact
            </Link>
            <Link to="/aboutpage" className="text-[#161D6F] hover:text-blue-500" onClick={toggleMenu}>
              About Us
            </Link>
          </nav>
        
        <p onClick={logout} className="flex justify-center  gap-2 items-center text-[18px] w-full  py-2  text-[#161D6F] cursor-pointer">
              Logout
              <img className="w-4 h-4" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1734021762/icons8-logout-50_1_wx6589.png" alt="" />
            </p>

        </div>
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default HamburgerMenu;
