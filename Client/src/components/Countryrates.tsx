import { Link } from "react-router-dom"
import { useState } from "react"
import { Card } from "../store/cardStore"

const Countryrates: React.FC<{data:Card|null|undefined}> = ({data}) => {

    // State to control whether the additional rows are shown or hidden
    const [isVisible, setIsVisible] = useState(false);
    const [showMore, setShowMore] = useState<number|undefined>(10);

    // Function to toggle visibility and button text
    const handleToggle = () => {
      setShowMore(showMore === 10? data?.rates.length : 10); // Toggle number of rows displayed
      setIsVisible(!isVisible); // Toggle visibility
    };
  return (
    <div>
    <section  className="w-[95%]  sm:w-[98%] mx-auto bg-white p-5 pt-5 sm:p-8 sm:shadow-lg rounded-b-lg ">
      <div  className="flex gap-5 justify-between sm:justify-normal items-center sm:mb-4 mb-1 text-[9px] sm:text-[16px] text-center sm:text-left">
        <div  className="font-bold text-gray-600 flex justify-start sm:w-[25%] sm:pl-8 ">Country</div>
        <div  className="font-bold text-gray-600 flex justify-center sm:w-[25%] sm:pl-6 pr-">Currency Code</div>
        <div  className="font-bold text-gray-600 flex justify-end sm:w-[25%] md:pr-2 pr-2">Gift Card Rate</div>
      </div>
    {data?.rates.slice(0,showMore).map((rate) =>
        <div  className="sm:space-y-4 sm:px-8 lg:px-10 sm:pt-3">
         <Link to={"/sell"}  className="flex sm:flex-row items-center justify-between sm:justify-between border-b-[1px] border-[#d2d2d5] sm:pb-3 pb-1">
            <div  className="w-[20%] sm:w-1/3 flex-col justify-center sm:justify-start text-[10px] sm:text-[16px]">
                
            <img src={rate.rateDetails.flag} alt="" />
            {rate.rateDetails.countryName}
          </div>
          <div  className="w-1/3 sm:pl-12 pl-12 text-[10px] sm:text-[16px]">{rate.rateDetails.currencyCode}</div>
          <div  className="w-1/3 flex justify-between items-center">
            <span  className="pl-10  text-[10px] sm:text-[16px]">{rate.rateDetails.currencySymbol}1 = ₦{rate.rate}</span>
                  <Link to={'/sell'} 
               className="hidden sm:block bg-[#161D6F] text-white sm:px-6   py-2 rounded-lg hover:bg-[#1522ad] ml-4 sm:ml-0 text-[10px] sm:text-[16px]"
              >
              Sell
            </Link>
          </div>
          </Link>
      </div>
      )
        }
</section>


      <div  className="text-center mt-4 mb-24 sm:mb-16">
        <button 
          id="showMoreButton" onClick={handleToggle}
           className="bg-[#161D6F] text-white sm:px-6 px-3 py-2 rounded-lg hover:bg-[#1522ad] text-[10px] sm:text-[16px]"
        >
           {isVisible ? 'View Less' : 'View More'}
        </button>
      </div>
    </div>
  )
}

export default Countryrates