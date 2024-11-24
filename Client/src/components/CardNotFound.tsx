
import { Link } from "react-router-dom";

const CardNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen  text-center py-10 px-5">
      {/* Icon or Image */}
      <img
        src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1732453290/icons8-not-found-48_xg2rqs.png" // Replace with your "not found" image URL
        alt="Card Not Found"
        className="w-24 h-24 mb-6"
      />
      {/* Title */}
      <h2 className="text-2xl font-bold text-[#161D6F] mb-4">
        Card Not Found
      </h2>
      {/* Description */}
      <p className="text-black mb-6">
        Sorry, we couldn’t find the card you were looking for. Please check the
        spelling or try a different search.
      </p>
      {/* Button */}
      <Link
        to="/"
        className="bg-[#161D6F] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#1522ad] transition duration-300"
      >
        Go Back
      </Link>
    </div>
  );
};

export default CardNotFound;
