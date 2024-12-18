import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FooterO from "../components/FooterO";
import Mobilefooter from "../components/Mobilefooter";

const AboutPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  useEffect(scrollToTop,[])

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); // Navigate 1 step back in history
  };

    return (
        <div>
            <nav className="bg-[#161D6F] shadow-lg flex sm:gap-3 gap-[83px] items-center py-3">
        <button
          onClick={handleGoBack}
          className="back-button sm:hover:bg-[#668bc2] sm:rounded-2xl sm:px-4 sm:py-1 flex justify-center sm:ml-6 ml-2 items-center gap-2 text-[11px] p-3 "
        >
        <img src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1733961385/arrow-_xye6xf.png" alt="" />
        </button>

        <h2 className="sm:text-[20px] text-[18px] text-white text-center">
          About Us
        </h2>
      </nav>
      <section className=" mx-auto sm:p-10 p-5 mt-6 sm:w-[70%] w-[95%] bg-[#ffffff] rounded-lg text-center text-lg">
        <h1 className="text-2xl font-bold text-center sm:mb-3 mb-2 text-[#161D6F]">About Us</h1>
        <p className=" text-black mb-6 leading-relaxed">
          Welcome to our Gift Card Trading Platform! We are passionate about providing a secure, easy-to-use, and efficient platform for trading gift cards. Whether you're looking to sell your gift card  at a profitable rate, our platform is designed to make the process seamless.
        </p>
        <p className=" text-black  mb-6 leading-relaxed">
          Our mission is to create a trusted marketplace where users can trade gift cards with confidence. With our user-friendly interface and strong commitment to customer satisfaction, we strive to make gift card trading an enjoyable experience for everyone.
        </p>
        <p className=" text-black  mb-6 leading-relaxed">
          We pride ourselves on transparency, reliability, and security. Our team works tirelessly to ensure that all transactions are processed smoothly and securely, so you can focus on what matters most: getting the most value out of your gift cards.
        </p>
        <p className=" text-black  mb-4 leading-relaxed">
          Thank you for choosing us as your go-to platform for gift card trading. We look forward to serving you and making your experience as rewarding as possible.
        </p>
        <div className="sm:w-[60%] w-[90%] flex justify-center items-center mx-auto sm:gap-10 gap-5 p-2 sm:mt-6">
            <div className="sm:w-1/2 w-[70%] h-1 bg-[#161D6F] rounded-lg"></div>
            <div className="sm:w-1/2 w-[70%] h-1 bg-[#161D6F] rounded-lg"></div>
        </div>
        <p className="sm:text-center text-[14px] text-[#161D6F] font-bold mt-3">THANKS FOR CHOOSING REXIEXCHANGE</p>
      </section>
      {/* leave a review button */}
      <Link to={"/customerReview"} className="btn sm:w-[20%] w-[80%] py-4 sm:py-3 mb-24 sm:mb-10">
        <p className="text-center text-[14px] sm:text-[16px]">Please Leave a Review</p>
      </Link>
      <div className="hidden sm:block">
      <FooterO />
      </div>
      <Mobilefooter />
   
      </div>
    );
  };
  
  export default AboutPage;
  