import Countryrates from "../components/Countryrates"
import Footer from "../components/Footer"
import Header from "../components/Header"

import Mylogo from "../components/Mylogo"
import Username from "../components/Username"
import Mobileheader from "../components/Mobileheader"

const Apple = () => {
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
        </div>
      </div>
    </section>
    <Countryrates/>
    <Footer/>
    {/* <script>
      const additionalRows = document.getElementById("additionalRows");
      const showMoreButton = document.getElementById("showMoreButton");

      showMoreButton.addEventListener("click", () => {
        additionalRows.classList.toggle("hidden");
        if (additionalRows.classList.contains("hidden")) {
          showMoreButton.textContent = "View More";
        } else {
          showMoreButton.textContent = "View Less";
        }
      });
    </script> */}

    </div>
  )
}

export default Apple