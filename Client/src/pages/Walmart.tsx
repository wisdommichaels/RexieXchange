import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import Mylogo from "../components/Mylogo"
import Username from "../components/Username"


const Walmart = () => {
  return (
    <div>
            <section id="black">
      <nav  className="bg-[#161D6F] p-4 rounded-b-lg sm:hidden pt-8">
        <div  className="flex justify-between items-center ml-3">
          <span  className="text-white text-xl font-semibold ml-">GiftHub</span>
          <img src="https://via.placeholder.com/150" alt="User Image"  className=" w-10 mr-3 h-10 rounded-full object-cover"/>
        </div>
        <div id="menu"  className="mt-4 flex justify-center gap-5 text-[14px] items-center text-white">
        <Link to={'/'} className="   font-bold hover:text-gray-300 underline underline-offset-2 text-[#E7500F]">Home</Link>
        <Link to={'/sell'}  className=" text-white  hover:text-gray-300"> Sell Gift Card</Link>
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
          <div  className="flex justify-center items-center mx-auto p-10">
            <div  className="w-[45%] ml-5">
              <img
                 className="w-[400px] rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-xl"
                src="src/assets/SVG/walmartgiftcardpng.svg"
                alt="Gift Card Image"
              />
            </div>

            <div  className="w-1/2 pl-8">
              <h2  className="text-3xl font-bold text-white mb-4">
                Walmart Gift Card
              </h2>
              <p  className="text-white mb-4">
                The Walmart Gift Card provides access to a wide variety of products, including groceries, electronics, clothing, household items, and much more. Whether you're shopping online or in-store, Walmart Gift Cards can be used across all Walmart locations and their website, making it the perfect gift for anyone. Convenient and easy to use, it gives you the flexibility to shop for whatever you need.
              </p>
              <ul  className="list-disc list-inside text-white">
                <li>Available in various denominations.</li>
                <li>Can be traded both with physical Card or E-code.</li>
                <li>Redeemable at any Walmart location or on Walmart's website.</li>
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

export default Walmart