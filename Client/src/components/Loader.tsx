import { useEffect, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Set the desired delay time here (in milliseconds)

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="absolute h-screen w-screen bg-sec opacity-65 flex items-center justify-center z-50">
        <div className="aspect-square w-32 flex justify-center items-center animate-spin">
          <img
            src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740667/mylogo_qxoqqk.png"
            className="bg-sec transform transition-transform duration-500 ease-in-out scale-100 hover:scale-110 animate-pulse"
            alt="Loading logo"
          />
        </div>
      </div>
    );
  }

  return null; // Return null or the actual content when loading is complete
};

export default Loader;
