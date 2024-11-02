import { useState } from "react";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="relative w-[50%] pt-3">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none sm:hidden relative left-44"
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
          className="absolute top-full left-0 w-[95%] bg-white shadow-md z-50 transition-all duration-300 rounded-lg mt-2"
        >
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link to="/" className="text-[#161D6F] hover:text-blue-500" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/sell" className="text-[#161D6F] hover:text-blue-500" onClick={toggleMenu}>
              Sell
            </Link>
            <Link to="/checkrate" className="text-[#161D6F] hover:text-blue-500" onClick={toggleMenu}>
              Check Rate
            </Link>
            <Link to="/dashboard" className="text-[#161D6F] hover:text-blue-500" onClick={toggleMenu}>
              Dashboard
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
