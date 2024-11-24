import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
const navigate = useNavigate()
  const handleSearch = () => {
    navigate(`/rate/${searchTerm}`)
  };

  return (
    <div className="searchbar w-[70%] sm:w-[50%] flex justify-center sm:justify-start items-center mx-auto gap-4 py-1 bg-white rounded-lg  pl-2 sm:pl-5 sm:shadow-md sm:shadow-slate-400 ">
      <div className="flex items-center bg-white gap-1 sm:w-[85%]">
        <svg
          className="text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="25px"
          height="25px"
        >
          <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
        </svg>
      
        <input
          className="w-full focus:outline-none pl-2"
          type="text"
          placeholder="Search gift cards..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button
        type="submit"
        onClick={handleSearch}
        className="btnnn bg-[#161D6F] hover:bg-[#1522ad] text-white px-4 sm:px-5 py-1 sm:py-3 rounded-md"
        >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
