
import Header from "../components/Header"
import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"
import Mylogo from "../components/Mylogo"
import Username from "../components/Username"
import Mobileheader from "../components/Mobileheader"

const Ebay = () => {
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
                src="src/assets/SVG/ebaypng.svg"
                alt="Gift Card Image"
              />
            </div>

            <div  className="w-1/2 pl-8">
              <h2  className="text-3xl font-bold text-white mb-4">
                eBay Gift card
              </h2>
              <p  className="text-white mb-4">
                The eBay Gift Card is your gateway to millions of items from electronics to fashion, collectibles, and more. Whether you’re buying brand new products or unique second-hand finds, eBay offers a wide range of options for every shopper. The eBay Gift Card is the perfect gift for anyone who loves online shopping, as it provides the flexibility to choose from a vast selection of products available on the eBay platform.
              </p>
              <ul  className="list-disc list-inside text-white">
                <li>Available in various denominations.</li>
                <li>Can be traded both with physical Card or E-code.</li>
                <li>Redeemable at any ebay location or on ebay's website.</li>
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

export default Ebay