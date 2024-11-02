import { Link } from "react-router-dom";

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

  return (
    <div className="flex w-full overflow-x-auto space-x-4 py-4 px-4 bg-[#F5F5FA] hide-scrollbar">
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
  );
};

export default GiftCardCategories;
