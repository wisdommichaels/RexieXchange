import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Mylogo from "../components/Mylogo"
import Username from "../components/Username"
import Mobileheader from "../components/Mobileheader"


const Amazon = () => {
  return (
    <div>
<section id="black">
      <Mobileheader/>
      <Header>
          <div  className="flex justify-center items-center mx-auto p-10 mt-16">
            <div  className="w-[45%] ml-5">
              <img className="w-[400px] rounded-lg transform transition duration-500 hover:scale-110 hover:shadow-xl"
                src="src/assets/SVG/amazonpng.svg"
                alt="Gift Card Image"
              />
            </div>

            <div  className="w-1/2 pl-8">
              <h2  className="text-3xl font-bold text-white mb-4">
                Amazon Gift Card
              </h2>
              <p  className="text-white mb-4">
                The Amazon gift card is one of the most popular gift cards
                worldwide, with a high price rate only on GiftHub
              </p>
              <ul  className="list-disc list-inside text-white">
                <li>Available in various denominations.</li>
                <li>Can be traded both with physical Card or E-code.</li>
                <li>Amazon rates are always on high demand on GiftHub.</li>
              </ul>
            </div>
          </div>
    </Header>
</section>
<h2  className="md:text-2xl text-[14px] bg-[#FFFFFF] font-bold text-gray-800  text-center sm:shadow-lg sm:rounded-t-lg w-full sm:w-[98%] mx-auto pt-8">
        Countries Trading Amazon Gift Cards and Their Rates
      </h2>
    <Countryrates/>
    <Footer/>
    {/* <script>
      const additionalRows = document.getElementById("additionalRows");
      const showMoreButton = document.getElementById("showMoreButton");

      showMoreButton.addEventListener("click", () => {
        additionalRows. classNameList.toggle("hidden");
        if (additionalRows. classNameList.contains("hidden")) {
          showMoreButton.textContent = "View More";
        } else {
          showMoreButton.textContent = "View Less";
        }
      });
    </script> */}
    </div>
  )
}

export default Amazon