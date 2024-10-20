
import Header from "../components/Header"
import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"
import Mobilefooter from "../components/Mobilefooter"
import { Link } from "react-router-dom"
import Username from "../components/Username"
const Ebay = () => {
  return (
    <div>
         <section id="black">
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
          Ebay Gift Card
        </h2>

        <div className="hidden sm:block">
          <Username />
        </div>
</nav>
          <div className="hidden sm:block">
        <Header>
          <div  className="flex justify-center items-center mx-auto p-10 mt-[40px]">
            <div  className="w-[45%] ml-5">
              <img
                 className="w-[400px] rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-xl"
                src="src/assets/SVG/ebaypng.svg"
                alt="Gift Card Image"
              />
            </div>

            <div  className="w-1/2 pl-8">
              <h2  className="text-3xl font-bold text-white mb-4">
                eBay Gift card
              </h2>
              <p  className="text-white mb-4">
                The eBay Gift Card is your gateway to millions of items from electronics to fashion, collectibles, and more. Whether you’re buying brand new products or unique second-hand finds, eBay offers a wide range of options for every shopper. The eBay Gift Card is the perfect gift for anyone who loves online shopping, as it provides the flexibility to choose from a vast selection of products available on the eBay platform.
              </p>
              <ul  className="list-disc list-inside text-white">
                <li>Available in various denominations.</li>
                <li>Can be traded both with physical Card or E-code.</li>
                <li>Redeemable at any ebay location or on ebay's website.</li>
              </ul>
            </div>
          </div>
    </Header>
    </div>
    </section>
    <h2  className="md:text-2xl text-[14px] bg-[#FFFFFF] font-bold text-gray-800  text-center sm:shadow-lg sm:rounded-t-lg w-full sm:w-[98%] mx-auto pt-8">
        Countries Trading Ebay Gift Cards and Their Rates
      </h2>
    <Countryrates/>
    <Mobilefooter/>
    <div className="hidden sm:block">
    <Footer/>
    </div>
    </div>
  )
}

export default Ebay