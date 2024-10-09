import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Mobileheader from "../components/Mobileheader"


const Mastercard = () => {
  return (
    <div>
    <Mobileheader/>
    <Header>
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
    </Header>
    <Countryrates/>
    <Footer/>
    </div>
  )
}

export default Mastercard