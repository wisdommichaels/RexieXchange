import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
     // State to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
    <div className="dropdown relative">
      {/* Dropdown trigger */}
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-between w-60 px-4 py-2 bg-white rounded-md cursor-pointer"
      >
        <span className="text-gray-700">Select a Giftcard option</span>

        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute mt-1 w-60 bg-white rounded-md shadow-lg z-[1000]">
          <Link
            to="/razergold"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Razer Gift Card
          </Link>
          <Link
            to="/apple"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Apple&iTunes
          </Link>
          <Link
            to="/amazon"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Amazon Gift Card
          </Link>
          <Link
            to="/steam"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Steam Gift Card
          </Link>
          <Link
            to="/walmart"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Walmart Gift Card
          </Link>
          <Link
            to="/ebay"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            eBay Gift card
          </Link>
          <Link
            to="/american"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            American Express
          </Link>
          <Link
            to="/google"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Google Play Gift Card
          </Link>
          <Link
            to="/vanilla"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Vanilla Gift card
          </Link>
          <Link
            to="/playstation"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            PlayStation
          </Link>
          <Link
            to="/mastercard"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
            Mastercard Gift Card
          </Link>
        </div>
      )}
    </div>
    </div>
  )
}

export default Dropdown