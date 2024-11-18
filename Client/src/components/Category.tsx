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
        className="absolute left-2 top-1/2 transform -translate-y-1/2  hidden lg:block"
      >
        <img className="w-11" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1731941894/icons8-prev-50_lgx3ln.png" alt="" />
      </button>
      
      <div
        ref={containerRef}
        className="flex w-full sm:w-[90%] sm:mx-auto overflow-x-auto space-x-4 py-4 px-4 bg-[#F5F5FA] hide-scrollbar"
      >
        {categories.map((category, index) => (
          <Link 
             key={index} 
             to={`/rate/${category.replace(' ', '')}`}
            className="flex-none px-4 py-2 bg-[#161D6F] text-white rounded-md shadow-md cursor-pointer hover:bg-[#1522ad] transition"
          >
            {category}
          </Link>
        ))}
      </div>
      
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 transform -translate-y-1/2  hidden lg:block"
      >
      <img className="w-11 " src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1731941907/icons8-right-button-50_egucaq.png" alt="" />
      </button>
    </div>
  );
};

export default GiftCardCategories;
