import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Apple = () => {
  return (
    <div>
    <section id="black">
      <Header>
          <div  className="flex justify-center items-center mx-auto p-10 mt-14">
            <div  className="w-[45%] ml-5">
              <img
                 className="w-[400px] rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-xl"
                 src="src/assets/SVG/applecardpng.svg"
                 alt="Gift Card Image"
                 />
            </div>

            <div  className="w-1/2 pl-8">
              <h2  className="text-3xl font-bold text-white mb-4">
                Apple iTunes Gift Card
              </h2>
              <p  className="text-white mb-4">
                The Apple iTunes Gift Card is your gateway to an endless world of music, movies, TV shows, apps, games, books, and more on the App Store, iTunes, and Apple Music. this card offers a flexible and convenient way to make purchases across Apple platforms and the Apple ecosystem.
              </p>
              <ul  className="list-disc list-inside text-white">
                <li>Available in various denominations.</li>
                <li>Can be traded both with physical Card or E-code with the best rate.</li>
                <li>Redeemable on the App Store, and also on GiftHub.</li>
              </ul>
            </div>
          </div>
    </Header>
    </section>
    <h2  className="md:text-2xl text-[14px] bg-[#FFFFFF] font-bold text-gray-800  text-center sm:shadow-lg sm:rounded-t-lg w-full sm:w-[98%] mx-auto pt-8">
        Countries Trading Apple Gift Cards and Their Rates
      </h2>
    <Countryrates/>
    <Footer/>
    {/* <script>
      
    </script> */}

    </div>
  )
}

export default Apple