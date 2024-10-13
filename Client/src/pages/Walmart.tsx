import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"
import Header from "../components/Header"


const Walmart = () => {
  return (
    <div>
            <section id="black">
            <Header>
          <div  className="flex justify-center items-center mx-auto p-10 mt-[50px]">
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
      </Header>
    </section>
    <h2  className="md:text-2xl text-[14px] bg-[#FFFFFF] font-bold text-gray-800  text-center sm:shadow-lg sm:rounded-t-lg w-full sm:w-[98%] mx-auto pt-8">
        Countries Trading Walmart Gift Cards and Their Rates
      </h2>
    <Countryrates/>
    <Footer/>
    </div>
  )
}

export default Walmart