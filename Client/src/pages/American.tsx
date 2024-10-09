
import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Mylogo from "../components/Mylogo"
import Username from "../components/Username"
import Mobileheader from "../components/Mobileheader"

const American = () => {
  return (
    <div>
<section id="black">
     <Mobileheader/>
     <Header>
      <div  className="card hidden sm:flex">
        <div  className="top-section rounded-none">
          <div  className="border"></div>
          <div  className="icons">
            <div  className="logo">
                <Mylogo/>
            </div>
            <Username/>
          </div>
          <div  className="flex justify-center items-center mx-auto p-10">
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
        </div>
      </div>
      </Header>
    </section>
    <Countryrates/>
    <Footer/>
    </div>
  )
}

export default American