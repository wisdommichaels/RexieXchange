import Header from "../components/Header";
import Countryrates from "../components/Countryrates";
import Footer from "../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import Username from "../components/Username";
import Mobilefooter from "../components/Mobilefooter";
import { Card, useCardStore } from "../store/cardStore";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import CardNotFound from "../components/CardNotFound";
import OnscrollHeader from "../components/OnscrollHeader";
// import Signup from "../components/Signup"

const Rates = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  useEffect(scrollToTop,[])

  const { cards } = useCardStore();
  const { name } = useParams();
  const [pageCard, setPageCard] = useState<Card | null>(null); // Define pageCard with the Card interface
  const [isLoading, setIsLoading] = useState<boolean>(true); // Add loading state
  const navigate = useNavigate(); // Import useNavigate
  useEffect(() => {
    if (cards) {
      // Set a timeout to simulate loader delay
      const timer = setTimeout(() => {
        setPageCard(
          cards.find(
            (card) => card.name.toLocaleLowerCase() === name?.toLocaleLowerCase()
          ) || null
        );
        setIsLoading(false); // Stop loading after timeout
      }, 3000); // Delay for 2 seconds

      // Cleanup the timeout on component unmount
      return () => clearTimeout(timer);
    }
  }, [cards, name]);

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const handleGoBack = () => {
    navigate(-1); // Navigate 1 step back in history
  };

  return cards ? (
    pageCard ? (
      <div>
        <OnscrollHeader />
        <section id="black">
          <nav className="bg-[#161D6F] shadow-lg flex sm:gap-5 gap-[65px] items-center py-3">
          <button
          onClick={handleGoBack}
          className="back-button sm:rounded-2xl sm:px-4 sm:py-1 flex justify-center sm:ml-6 ml-2 items-center text-[11px] p-3 "
        >
        <img src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1733961385/arrow-_xye6xf.png" alt="" />
        </button>

            <h2 className=" sm:text-[24px] text-[18px] text-white pt-3 w-full">
              {pageCard?.name} Gift Card
            </h2>

            <div className="hidden sm:block">
              <Username />
            </div>
          </nav>
          <div className="flex justify-center items-center p-5 bg-[#161D6F] m-3 rounded-md sm:hidden">

                <div className="w-1/2">
                  <h2 className="text-[16px] font-bold text-white mb-1">
                    {pageCard?.name} Gift Card
                  </h2>
                  <p className="text-white line-clamp-3 text-[14px]">{pageCard?.desc}</p>
                  {/* <ul className="list-disc list-inside text-white">
                    {pageCard?.subDesc.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul> */}
                </div>
                <div className="w-[45%] ml-5">
                  <img
                    className="w-[400px] rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-xl"
                    src={pageCard?.imageUrl}
                    alt="Gift Card Image"
                  />
                </div>
              </div>
          <div className="hidden sm:block">
            <Header>
              <div className="flex justify-center items-center mx-auto p-10 mt-[50px] my-10">
                <div className="w-[45%] ml-5">
                  <img
                    className="w-[400px] rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-xl"
                    src={pageCard?.imageUrl}
                    alt="Gift Card Image"
                  />
                </div>

                <div className="w-1/2 pl-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {pageCard?.name} Gift Card
                  </h2>
                  <p className="text-white mb-4">{pageCard?.desc}</p>
                  <ul className="list-disc list-inside text-white">
                    {pageCard?.subDesc.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Header>
          </div>
        </section>
        <h2 className="md:text-2xl text-[13px] bg-[#FFFFFF] font-bold text-gray-800  text-center sm:shadow-lg rounded-t-lg w-[95%] sm:w-[98%] mx-auto pt-8">
          Countries Trading {pageCard?.name} Gift Cards and Their Rates
        </h2>
        <Countryrates data={pageCard} />
        <Mobilefooter />
        <div className="hidden sm:block">
          <Footer />
        </div>
      </div>
    ) : (
      <div>
        <CardNotFound/>
      </div>
    )
  ) : null;
};

export default Rates;
