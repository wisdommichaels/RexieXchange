import { Link } from "react-router-dom"
import Username from "../components/Username"
import Footer from "../components/Footer"
import Mobilefooter from "../components/Mobilefooter"

const Checkrate = () => {
  return (
    <div>
         <nav className="bg-[#161D6F] shadow-lg sm:flex justify-between items-center hidden">
            <div className="containe mx-auto px-4 py-3 flex justify-between items-center sm:mx-14 w-full">
                 <Link to={"/"} className="signup-button px-5 flex justify-center items-center gap-2 text-[11px] py-2 ">
                  <svg fill="#000000" width="10px" height="10px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z"/></svg>
                  BACK
               </Link>
             <Username/>
           </div>
        </nav>
        <nav className="bg-[#161D6F] shadow-lg flex sm:justify-between items-center py-3 sm:hidden">
        <Link
          to={"/"}
          className="signup-button rounded-full sm:rounded-md sm:px-5 sm:py-0 flex justify-center ml-6 items-center gap-2 text-[11px] p-3 "
        >
          <svg className="sm-w-10 sm:h-10"
            fill="#000000"
            width="14px"
            height="14px"
            viewBox="0 0 52 52"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z" />
          </svg>
          <span className="hidden sm:block">BACK</span>
        </Link>

        <h2 className=" sm:text-[24px] text-[18px] text-white sm:ml-28 pt-3 pl-24 ">
          Check Rate
        </h2>

        <div className="hidden sm:block">
          <Username />
        </div>
</nav>
        <section className="bg-gradient-to-r from-[#a2bae3] to-[#668bc2] h-[80vh] sm:h-[80vh] mx-3 mt-4 sm:m-0 rounded-md sm:rounded-none">
        <div  className="sm:w-1/2  mx-auto p-4 sm:pt-20 pt-48 ">
           <h2  className="sm:text-2xl text-[16px] font-bold text-center text-[#161D6F] mb-4">RATE CALCULATOR</h2>
        <form id="currency- htmlForm"  className="space-y-4 w-full">
          
          <div  className="flex flex-col mb-4">
            <label  htmlFor="amount"  className="mb-1 text-sm m-auto text-[#161D6F] text-[10px] sm:text-[16px]">Enter Amount</label>
            <input  className="custom-select custom-arrow cursor-text w-full sm:w-[80%]" type="text" id="amount" placeholder="Amount in Foreign currency"/>
          </div>
          
         
          <div  className="flex flex-col mb-4">
            <label  htmlFor="currency"  className="mb-1 text-sm m-auto  text-[#161D6F] text-[10px] sm:text-[16px]">Select Currency:</label>
            <select id="currency"  className="custom-select custom-arrow w-full sm:w-[80%]">
              <option value="">Select Currency</option>
              <option value="usd">USD - United States Dollar</option>
              <option value="eur">EUR - Euro</option>
              <option value="gbp">GBP - British Pound</option>
              <option value="cad">CAD - Canadian Dollar</option>
              <option value="aud">AUD - Australian Dollar</option>
              <option value="twd">TWD - Taiwan Dollar</option>
              <option value="sgd">SGD - Singapore Dollar</option>
              <option value="brl">BRL - Indian Rupee</option>
              <option value="hkd">HKD - Hong Kong Dollar</option>
              <option value="mxn">MXN - Mexican Peso</option>
              <option value="thb">THB - Thai Baht</option>
              <option value="jpy">JPY - Japanese Yen</option>
              <option value="nzd">NZD - New Zealand Dollar</option>
              <option value="sek">SEK - Swedish Krona</option>
              <option value="inr">INR - Indian Rupee</option>
              <option value="zar">ZAR - South African Rand</option>
              <option value="kes">KES - Kenyan Shilling</option>
              <option value="eur">EUR - Greece</option>
              <option value="dkk">DKK - Denmark</option>
              <option value="nok">NOK - Norway</option>
              <option value="eur">EUR - Germany</option>
              <option value="eur">EUR - France</option>
              <option value="eur">EUR - Italy</option>
              <option value="eur">EUR - Spain</option>
              <option value="eur">EUR - Netherlands</option>
              <option value="eur">EUR - Belgium</option>
              <option value="eur">EUR - Switzerland</option>
              <option value="eur">EUR - Austria</option>
              <option value="eur">EUR - Portugal</option>
              <option value="eur">EUR - Finland</option>
              <option value="eur">EUR - Sweden</option>
              <option value="aed">AED - United Arab Emirates</option>
              <option value="cny">CNY - China</option>
              <option value="pln">PLN - Poland</option>
            </select>
          </div>
    
          <div  className="custom-select hidden  custom-arrow sm:w-1/2 w-full  mt-4 text-lg font-semibold text-center text-[#161D6F]" id="result"></div>
         
          <div  className="text-center">
            <button  className="btnn text-[14px] sm:text-[16px] w-full sm:w-[80%]" type="submit" >
              Convert to Naira
            </button>
          </div>
        </form>
      </div>
      </section>
      <Mobilefooter/>
      <div className="hidden sm:block">
      <Footer/>
      </div>
      
    </div>
  )
}

export default Checkrate