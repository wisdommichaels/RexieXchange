import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Vanilla = () => {
  return (
    <div>
 <section id="black">
    <Header>
          <div  className="flex justify-center items-center mx-auto p-10">
            <div  className="w-[45%] ml-5">
              <img
                 className="w-[400px] rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-xl"
                src="src/assets/SVG/vanillapng.svg"
                alt="Gift Card Image"
              />
            </div>

            <div  className="w-1/2 pl-8">
              <h2  className="text-3xl font-bold text-white mb-4">
                Vanilla Gift Card
              </h2>
              <p  className="text-white mb-4">
                The Vanilla Gift Card is a prepaid card that provides flexible and convenient spending power. It can be used wherever major debit cards are accepted, making it a great choice for gift giving or personal use. With no fees after purchase and easy access, the Vanilla Gift Card allows you to shop online, in-store, or even over the phone.
              </p>
              <ul  className="list-disc list-inside text-white">
                <li>Available in various denominations.</li>
                <li>Can be traded both with physical Card or E-code.</li>
                <li>Redeemable at any Vanilla location and on GiftHub.</li>
              </ul>
            </div>
          </div>
      </Header>
    </section>
    <h2  className="md:text-2xl text-[14px] bg-[#FFFFFF] font-bold text-gray-800  text-center sm:shadow-lg sm:rounded-t-lg w-full sm:w-[98%] mx-auto pt-8">
        Countries Trading Vanilla Gift Cards and Their Rates
      </h2>
    <Countryrates/>
    <Footer/>
    </div>
  )
}

export default Vanilla