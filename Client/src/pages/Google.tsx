
import Header from "../components/Header"
import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"

const Google = () => {
  return (
    <div>
  <section id="black">
      <Header>
          <div  className="flex justify-center items-center mx-auto p-10 mt-[50px]">
            <div  className="w-[45%] ml-5">
              <img
                 className="w-[400px] rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-xl"
                src="src/assets/SVG/googleplaypng.svg"
                alt="Gift Card Image"
              />
            </div>

            <div  className="w-1/2 pl-8">
              <h2  className="text-3xl font-bold text-white mb-4">
                Google Play Gift Card
              </h2>
              <p  className="text-white mb-4">
                The Google Play Gift Card is your gateway to a vast array of apps, games, movies, music, and more available on the Google Play Store. Whether you're looking to download the latest mobile games, purchase e-books, or rent movies, the Google Play Gift Card provides an easy and flexible way to access premium content on Android devices.
              </p>
              <ul  className="list-disc list-inside text-white">
                <li>Available in various denominations.</li>
                <li>Can be traded both with physical Card or E-code.</li>
                <li>Redeemable at any Google location and on GiftHub.</li>
              </ul>
            </div>
          </div>
      </Header>
    </section>
    <h2  className="md:text-2xl text-[14px] bg-[#FFFFFF] font-bold text-gray-800  text-center sm:shadow-lg sm:rounded-t-lg w-full sm:w-[98%] mx-auto pt-8">
        Countries Trading Google Gift Cards and Their Rates
      </h2>
    <Countryrates/>
    <Footer/>
    </div>
  )
}

export default Google