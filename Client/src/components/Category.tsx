import { Link } from "react-router-dom";
import { useRef } from "react";

const GiftCardCategories = () => {
  const categories = [
    "Razer",
    "Apple&itunes",
    "Amazon",
    "Steam",
    "Google",
    "Playstation",
    "Mastercard",
    "Xbox",
    "Walmart",
    "eBay",
    "American",
    "Visa",
    "Vanilla ",
    "Sephora",
    "Nike",
    "Macy's",
    "GameStop",
    "Nordstrom"
  ];

  const containerRef = useRef(null);


  const scrollLeft = () => {
    if (containerRef.current) {
      (containerRef.current as HTMLElement).scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      (containerRef.current as HTMLElement).scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full bg-[#F5F5FA] mb-5">
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1 hidden lg:block rounded-md  bg-[#161D6F] hover:bg-[#1522ad] transition"
      >
        <img className="w-8" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1732011925/icons8-back-50_cmvkj9.png" alt="" />
      </button>
      
      <div
        ref={containerRef}
        className="flex w-full sm:w-[90%] sm:mx-auto overflow-x-auto space-x-4 py-4 px-4 bg-[#F5F5FA] hide-scrollbar"
      >
        {categories.map((category, index) => (
          <Link 
             key={index} 
             to={`/rate/${category.replace(' ', '')}`}
            className="flex-none px-4 py-2 bg-[#161D6F] text-white text-[14px] sm:text-[16px] rounded-md shadow-md cursor-pointer hover:bg-[#1522ad] transition"
          >
            {category}
          </Link>
        ))}
      </div>
      
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-md p-1 hidden lg:block bg-[#161D6F] hover:bg-[#1522ad] transition"
      >
      <img className="w-8 " src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1732011628/icons8-next-50_h4ld8q.png" alt="" />
      </button>
    </div>
  );
};

export default GiftCardCategories;
