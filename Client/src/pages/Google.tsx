
import Header from "../components/Header"
import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"
import Mylogo from "../components/Mylogo"
import Username from "../components/Username"
import Mobileheader from "../components/Mobileheader"

const Google = () => {
  return (
    <div>
  <section id="black">
      <Mobileheader/>
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
        </div>
      </div>
    </section>
    <Countryrates/>
    <Footer/>
    </div>
  )
}

export default Google