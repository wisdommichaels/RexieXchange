import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import Mylogo from "../components/Mylogo"
import Username from "../components/Username"


const Mastercard = () => {
  return (
    <div>
 <section id="black">
      <nav  className="bg-[#161D6F] p-4 rounded-b-lg sm:hidden pt-8">
        <div  className="flex justify-between items-center ml-3">
          <span  className="text-white text-xl font-semibold ml-">GiftHub</span>
          <img src="https://via.placeholder.com/150" alt="User Image"  className=" w-10 mr-3 h-10 rounded-full object-cover"/>
        </div>
        <div id="menu"  className="mt-4 flex justify-center gap-5 text-[14px] items-center text-white">
        <Link to={'/'}  className="   font-bold hover:text-gray-300 underline underline-offset-2 text-[#E7500F]">Home</Link>
        <Link to={'/sell'}   className=" text-white  hover:text-gray-300"> Sell Gift Card</Link>
        <Link to={'/dashboard'} className=" text-white  hover:text-gray-300">Dashboard</Link>
        </div>
      </nav>
      <div  className="card hidden sm:flex">
        <div  className="top-section rounded-none">
          <div  className="border"></div>
          <div  className="icons">
            <div  className="logo">
                <Mylogo/>
            </div>
           <Header/>
            <Username/>
          </div>

         
          <div  className="flex flex-col md:flex-row justify-center items-center mx-auto p-4 md:p-10">
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
        </div>
      </div>
    </section>
    <Countryrates/>
    <Footer/>
    </div>
  )
}

export default Mastercard