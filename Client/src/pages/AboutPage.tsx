import { Link } from "react-router-dom";


const AboutPage = () => {
    return (
        <div>
            <nav className="bg-[#161D6F] shadow-lg flex sm:gap-3 gap-[90px] items-center py-3">
        <Link
          to={"/"}
          className="back-button sm:rounded-2xl sm:px-4 sm:py-1 flex justify-center sm:ml-6 ml-2 items-center gap-2 text-[11px] p-3 "
        >
        <img src="src/assets/arrow-.png" alt="" />
        </Link>

        <h2 className="sm:text-[20px] text-[18px] text-white text-center">
          About Us
        </h2>
      </nav>
      <section className=" mx-auto p-10 my-8 w-[70%] bg-[#ffffff] rounded-lg text-center text-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-[#161D6F]">About Us</h1>
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
        <div className="w-[60%] flex justify-center items-center mx-auto gap-10 p-2 mt-6">
            <div className="w-1/2 h-1 bg-[#161D6F] rounded-lg"></div>
            <div className="w-1/2 h-1 bg-[#161D6F] rounded-lg"></div>
        </div>
        <p className="text-center text-[#161D6F] font-bold mt-3">THANKS FOR CHOOSING GIFTHUB</p>
      </section>
      </div>
    );
  };
  
  export default AboutPage;
  