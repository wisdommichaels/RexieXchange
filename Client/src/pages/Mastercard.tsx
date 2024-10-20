import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import Username from "../components/Username"
import Mobilefooter from "../components/Mobilefooter"

const Mastercard = () => {
  return (
    <div>
          <nav className="bg-[#161D6F] shadow-lg flex sm:justify-between items-center py-3 sm:hidden">
        <Link
          to={"/"}
          className="signup-button rounded-full sm:rounded-md sm:px-5 sm:py-0 flex justify-center ml-6 items-center gap-2 text-[11px] p-3 "
        >
          <svg className="sm-w-10 sm:h-10"
            fill="#000000"
            width="14px"
            height="14px"
            viewBox="0 0 52 52"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z" />
          </svg>
          <span className="hidden sm:block">BACK</span>
        </Link>

        <h2 className=" sm:text-[24px] text-[18px] text-white sm:ml-28 pt-3 pl-20 ">
          Mastercard Gift Card
        </h2>

        <div className="hidden sm:block">
          <Username />
        </div>
</nav>
      <div className="hidden sm:block">
    <Header>
    <div  className="flex flex-col md:flex-row justify-center items-center mx-auto p-4 mt-[70px]">
            <div  className="w-full md:w-[45%] ml-0 md:ml-5 mb-4 md:mb-0">
              <img
                 className="w-full md:w-[400px] rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-xl"
                src="src/assets/SVG/mastercardpng.svg"
                alt="Gift Card Image"
              />
            </div>

            <div  className="w-full md:w-1/2 pl-0 md:pl-8 text-center md:text-left">
              <h2  className="text-2xl md:text-3xl font-bold text-white mb-4">
                Mastercard Gift Card
              </h2>
              <p  className="hidden md:block text-base md:text-lg text-white mb-4">
                The Mastercard Gift Card is a versatile prepaid card that can be
                used anywhere Mastercard is accepted.
              </p>
              <ul  className="hidden md:block list-disc list-inside text-base md:text-lg text-white">
                <li>Available in various denominations.</li>
                <li>Can be traded both with physical Card or E-code.</li>
                <li>Redeemable at any Mastercard location and on GiftHub.</li>
              </ul>
            </div>
          </div>
    </Header>
    </div>
    <h2  className="md:text-2xl text-[14px] bg-[#FFFFFF] font-bold text-gray-800  text-center sm:shadow-lg sm:rounded-t-lg w-full sm:w-[98%] mx-auto pt-8">
        Countries Trading Mastercard Gift Cards and Their Rates
      </h2>
    <Countryrates/>
    <Mobilefooter/>
    <div className="hidden sm:block">
    <Footer/>
    </div>
    </div>
  )
}

export default Mastercard