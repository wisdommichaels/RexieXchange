import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"
import Header from "../components/Header"


const Playstation = () => {
  return (
    <div>
         <section id="black">
        <Header>
          <div  className="flex justify-center items-center mx-auto p-10 mt-[50px]">
            <div  className="w-[45%] ml-5">
              <img
                 className="w-[400px] rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-xl"
                src="src/assets/SVG/playstationpng.svg"
                alt="Gift Card Image"
              />
            </div>

            <div  className="w-1/2 pl-8">
              <h2  className="text-3xl font-bold text-white mb-4">
                PlayStation Gift Card
              </h2>
              <p  className="text-white mb-4">
                The PlayStation Gift Card is the ultimate gift for PlayStation gamers, offering access to a wide range of games, add-ons, and in-game purchases on the PlayStation Store. Whether you're looking to purchase the latest releases, extend your PlayStation Plus membership, or buy exclusive in-game content, the PlayStation Gift Card delivers an easy way to enjoy the best PlayStation has to offer.
              </p>
              <ul  className="list-disc list-inside text-white">
                <li>Available in various denominations.</li>
                <li>Can be traded both with physical Card or E-code.</li>
                <li>Redeemable at any Playstation location and on GiftHub.</li>
              </ul>
            </div>
          </div>
    </Header>
    </section>
    <h2  className="md:text-2xl text-[14px] bg-[#FFFFFF] font-bold text-gray-800  text-center sm:shadow-lg sm:rounded-t-lg w-full sm:w-[98%] mx-auto pt-8">
        Countries Trading Playstation Gift Cards and Their Rates
      </h2>
    <Countryrates/>
    <Footer/>
    </div>
  )
}

export default Playstation