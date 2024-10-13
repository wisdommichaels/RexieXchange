
import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"
import Header from "../components/Header"

const American = () => {
  return (
    <div>
<section id="black">
     <Header>
          <div  className="flex justify-center items-center mx-auto p-10 mt-14">
            <div  className="w-[45%] ml-5">
              <img
                 className="w-[400px] rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-xl"
                 src="src/assets/SVG/americanexpresspng.svg"
                 alt="Gift Card Image"
                 />
            </div>

            <div  className="w-1/2 pl-8">
              <h2  className="text-3xl font-bold text-white mb-4">
                American Express Gift Card
              </h2>
              <p  className="text-white mb-4">
                The American Express Gift Card is a versatile prepaid card that offers a world of shopping opportunities. It is accepted wherever American Express is accepted, including both online and in-store purchases. With no fees after purchase, it is a great way to give the gift of choice, allowing recipients to shop at millions of locations worldwide.
              </p>
              <ul  className="list-disc list-inside text-white">
                <li>Available in various denominations.</li>
                <li>No monthly fees or expiration dates.</li>
                <li>Can be traded both with physical Card or E-code.</li>
                <li>Redeemable at any American Express location and on GiftHub.</li>
              </ul>
            </div>
          </div>
      </Header>
    </section>
    <h2  className="md:text-2xl text-[14px] bg-[#FFFFFF] font-bold text-gray-800  text-center sm:shadow-lg sm:rounded-t-lg w-full sm:w-[98%] mx-auto pt-8">
        Countries Trading American Gift Cards and Their Rates
      </h2>
    <Countryrates/>
    <Footer/>
    </div>
  )
}

export default American