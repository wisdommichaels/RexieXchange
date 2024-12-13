import Footer from "../components/Footer";
import Mylogo from "../components/Mylogo";
import Username from "../components/Username";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import { useCardStore } from "../store/cardStore";
import { useEffect, useState } from "react";
import Mobilefooter from "../components/Mobilefooter";
import Mobileuser from "../components/Mobileuser";
import GiftCardCategories from "../components/Category";
import { useAuthStore } from "../store/authStore";
import Carousel from "../components/carousel";
import WhatsAppButton from "../components/WhatsAppButton";
import SearchBar from "../components/SearchBar";
import OnscrollHeader from "../components/OnscrollHeader";

const Home = () => {
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(scrollToTop, []);

  const { cards } = useCardStore();
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    // Set a 3-second timeout to simulate loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, []);

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    const cards = document.querySelectorAll(".scroll-card");
    cards.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < triggerBottom) {
        card.classList.add("show");
      } else {
        card.classList.remove("show");
      }
    });
  };

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  return (
    <div>
      <section id="black">
        <OnscrollHeader />
        <Mobileuser />
        <section className="sm:hidden">
          <h1 className="hidden sm:text-[50px] bg-gradient-to-r from-[#fbfbfb] to-[#668bc2] text-[16px] font-bold p-2 text-white text-center mb-0">
            Trade your <span className="text-[#161D6F]">Gift Card</span> all in <br /> one place
          </h1>
          <h1 className="sm:text-[50px] bg-[#161D6F] text-[14px] font-bold p-2 pt-5 text-white text-center mb-0">
            Trade your Gift Card all in one place
          </h1>
          <div className="flex-col justify-center items-center pb-5 bg-[#161D6F] rounded-b-lg mb-3 ">
            <SearchBar />
          </div>

          <div className="sm:hidden mx-4">
            <Carousel />
          </div>
        </section>

        <div className="card hidden sm:flex">
          <div className="top-section ">
            <div className="border"></div>
            <div className="icons">
              <div className="logo">
                <Mylogo />
              </div>
              <Navbar />
              <Username />
            </div>
            <div className="flex flex-col justify-center items-center w-full p-10 my-14">
              <h1 className="sm:text-[50px] text-[16px] font-bold pt-8 text-white mb-4 text-center">
                Trade your <span className="text-[#E7500F] underline">Gift Card</span> all in <br /> one place
              </h1>
              <SearchBar />
            </div>
          </div>
        </div>
      </section>
      <div className="mb-3">
        <h1 className="px-5 pt-3 pb-1 text-xl sm:text-2xl text-[#161D6F]">Category</h1>
        <GiftCardCategories />
      </div>
      <section>
        <div className="section-title flex justify-center items-center bg-[#161D6F] sm:w-[20%] w-[60%] shadow-md shadow-slate-500 m-auto rounded-md p-3 mb-3">
          <h1 className="font-bold text-[12px] sm:text-[14px] text-white">Gift Cards</h1>
        </div>
      </section>
      <section className="section min-h-screen bg-[#F5F5FA] sm:rounded-[40px] rounded-xl m-auto sm:w-[98%] mb-8 pb-14 sm:p-0">
            <div className="flex flex-wrap sm:justify-evenly justify-center items-center sm:gap-8 gap-5 sm:py-8 py-4 mt-4 ">
        {loading ? (
          <div className="flex-col justify-center items-center mt-52">
            <div className="loader w-[20px] h-[20px] flex justify-center items-center mx-auto rounded-full border-2 border-t-[#161D6F] animate-spin"></div>
            <p className="text-[10px] sm:text-[16px] text-center">Cards Loading...</p>
          </div>
        ) : (
          <>
              {cards?.map((card) => (
                <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
                  <div className="relative group sm:mt-2 sm:mr-2 p-1 sm:p-0">
                    <img src={card.imageUrl} alt="Product Image" className="w-full h-30 sm:h-42 object-cover sm:rounded-lg" />
                    <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <h1 className="text-white text-[16px] font-semibold">{card.name} Gift Card</h1>
                      <div className="flex justify-center items-center">
                        <img
                          className="w-8 pt-2 pr-1"
                          src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740810/tag_m6zbjc.png"
                          alt=""
                        />
                        <p className="text-white mt-2 font-bold">
                          1{card.rates[0].rateDetails.currencySymbol} = ₦{card.rates[0].rate}
                        </p>
                      </div>
                      <Link
                        to={"/sell"}
                        className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out"
                      >
                        Sell
                      </Link>
                    </div>
                  </div>
                  <div className="flex-col sm:hidden justify-center items-center bg-[#161D6F] w-full py-2 px-2 mb-1">
                    <div className="">
                      <h1 className="text-white text-[14px] ">{card.name} Gift Card</h1>

                      <div className="flex items-center pt-2 pb-2">
                      {isLoading ? (
                             <>
                               <div className="loader w-[20px] h-[20px] mx-auto rounded-full border-2 border-t-white animate-spin"></div>
                               {/* <p className="text-[10px]">loading...</p> */}
                             </>
                          ) : (
                        <img
                          className="w-5 h-4"
                          src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740810/tag_m6zbjc.png"
                          alt=""
                        />
                          )}
                        <p className="flex text-white text-[16px]">
                          1{card.rates[0].rateDetails.currencySymbol} = ₦{card.rates[0].rate}
                        </p>
                      </div>
                      <Link to={"/sell"}>
                        <p className="mt-2 bg-[#86a4d3] text-white py-2 rounded-lg text-center">Sell</p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              <p className="sm:hidden text-5 text-gray-500 pt-2">No More Data</p>
              </>
            )}
            </div>
      </section>
      <WhatsAppButton />
      <div className="hidden sm:block">
        <Footer />
      </div>

      <div className="sm:hidden block">
        <Mobilefooter />
      </div>
    </div>
  );
};

export default Home;
