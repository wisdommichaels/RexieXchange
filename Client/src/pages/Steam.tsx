import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Mylogo from "../components/Mylogo"
import Username from "../components/Username"


const Steam = () => {
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
        <Link to={'/sell'}  className=" text-white  hover:text-gray-300"> Sell Gift Car</Link>
        <Link to={'/dashboard'}  className=" text-white  hover:text-gray-300">Dashboar</Link>
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
                src="src/assets/SVG/steampng.svg"
                alt="Gift Card Image"
              />
            </div>

            <div  className="w-1/2 pl-8">
              <h2  className="text-3xl font-bold text-white mb-4">
                Steam Gift Card
              </h2>
              <p  className="text-white mb-4">
                With the Steam Gift Card, you can purchase anything available on Steam, from the latest releases to  classNameic favorites, as well as exclusive content, add-ons, and much more. Whether you’re gifting it to a friend or using it yourself, the Steam Gift Card offers endless gaming possibilities.
              </p>
              <ul  className="list-disc list-inside text-white">
                <li>Available in various denominations.</li>
                <li>Can be traded both with physical Card or E-code with the best rate.</li>
                <li>Redeemable on the App Store, and also on GiftHub.</li>
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

export default Steam