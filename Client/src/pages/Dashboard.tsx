
import Header from "../components/Header"
import Footer from "../components/Footer";
import Mylogo from "../components/Mylogo";
import Username from "../components/Username";
import Mobileheader from "../components/Mobileheader";

const Dashboard = () => {
  return (
    <div>
   <section id="black">
        <Mobileheader/>
          <section  className="sm:hidden w-full">
            <div  className="shadow-lg p-6 rounded-lg mx-3 bg-gradient-to-r from-[#a2bae3] to-[#668bc2]">
                <h2  className="text-[20px] sm:text-[25px] font-bold py-4 sm:mx-10 ">Hello John Doe</h2>
                <div  className="flex items-center justify-between space-x-2 mb-6 sm:mx-10">
                  <div  className="flex-col justify-center items-center">
                    <p  className="text-gray-800 sm:text-[16px] text-[12px]">Total Balance: <span></span></p>
                    <p  className="font-bold text-white sm:text-[20px] text-[16px]">₦10,250.00</p>
                  </div>
                  <button  className="sm:w-[25%] flex justify-center items-center w-[30%] text-[14px] sm:text-[14px] bg-[#161D6F] text-white font-semibold py-4 rounded-lg hover:bg-[#1823a0] transition duration-200 ease-in-out">
                    Withdraw <span  className="sm:block hidden">Funds</span> 
                  </button>
                </div>
              </div>
          </section>
        <div  className="card hidden sm:flex">
          <div  className="top-section">
            <div  className="border"></div>
            <div  className="flex items-center justify-center">
                <div  className="bg-white shadow-lg w-full sm:w-[50%] p-6 sm:m-8 sm:mb-10 sm:rounded-lg rounded-b-lg bg-gradient-to-r from-[#a2bae3] to-[#668bc2]">
                  <h2  className="text-[14px] sm:text-[25px] font-bold py-4 sm:mx-10 ">Hello John Doe</h2>
                  <div  className="flex items-center justify-between space-x-2 mb-6 sm:mx-10 ">
                    <div  className="flex-col justify-center items-center">
                      <p  className="text-gray-800 sm:text-[16px] text-[10px]">Total Balance: <span></span></p>
                      <p  className="font-bold text-white sm:text-[20px] text-[14px]">₦10,250.00</p>
                    </div>
                    <button  className="sm:w-[25%] flex justify-center items-center w-[30%] text-[10px] sm:text-[14px] bg-[#161D6F] text-white font-semibold sm:py-2 rounded-lg hover:bg-[#1823a0] transition duration-200 ease-in-out">
                      Withdraw <span  className="sm:block hidden">Funds</span> 
                    </button>
                  </div>
                </div>
              </div>
        <div  className="icons">
          <div  className="logo">
            <Mylogo/>
          </div>
           <Header/>
            <Username/>   
          </div>
        </div>
      </div>
    </section>

    <section  className="bg-gradient-to-r from-[#a2bae3] to-[#668bc2] sm:flex justify-center items-center w-[95%] sm:w-full m-auto mt-2 rounded-lg sm:rounded-none sm:p-7">
      <div  className="sm:w-1/2  mx-auto p-4">
           <h2  className="sm:text-2xl text-[16px] font-bold text-center text-[#161D6F] mb-4">RATE CALCULATOR</h2>
        <form id="currency- htmlForm"  className="space-y-4 w-full">
          
          <div  className="flex flex-col mb-4">
            <label  htmlFor="amount"  className="mb-1 text-sm m-auto text-[#161D6F] text-[10px] sm:text-[16px]">Enter Amount</label>
            <input  className="custom-select custom-arrow cursor-text w-full sm:w-1/2" type="text" id="amount" placeholder="Amount in Foreign currency"/>
          </div>
          
         
          <div  className="flex flex-col mb-4">
            <label  htmlFor="currency"  className="mb-1 text-sm m-auto  text-[#161D6F] text-[10px] sm:text-[16px]">Select Currency:</label>
            <select id="currency"  className="custom-select custom-arrow w-full sm:w-1/2 py-8">
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
            <button  className="btnn text-[14px] sm:text-[16px] w-full sm:w-1/2" type="submit" >
              Convert to Naira
            </button>
          </div>
        </form>
      </div>
    
      <div  className="sm:w-1/2 mx-auto p-4 sm:pr-24 ">
        <h2  className="sm:text-2xl text-[16px] font-bold text-[#161D6F] text-center mb-4">GIFT CARD DETAILS</h2>
    
        <form id="gift-card- htmlForm"  className="w-full space-y-4 ">
        <div  className="sm:flex justify-center items-center gap-5">
          <div  className="sm:mb-0 mb-2 text-center sm:w-1/2">
            <label  htmlFor="category"  className="text-sm text-center text-[#161D6F] sm:text-[16px]">Gift Card Category</label>
            <select id="category" name="category"  className="custom-select custom-arrow w-full">
              <option value="">Select Category</option>
              <option value="Razer">Razer Gift Card</option>
              <option value="Amazon">Amazon</option>
              <option value="iTunes">Apple&iTunes</option>
              <option value="Google Play">Google Play</option>
              <option value="Steam">Steam</option>
              <option value="Walmart">Walmart</option>
              <option value="MasterCard">MasterCard</option>
              <option value="PlayStation">PlayStation</option>
              <option value="eBay">eBay Gift card</option>
              <option value="American Express">American Express</option>
              <option value="Vanilla">Vanilla</option>
              <option value="Visa">Visa</option>
            </select>
          </div>
    
          
          <div  className="sm:mb-0 mb-2 text-center sm:w-1/2">
            <label  htmlFor="country"  className="text-sm text-[#161D6F] sm:text-[16px]  text-center">Country</label>
            <select id="country" name="country"  className="custom-select custom-arrow w-full">
              <option value="">Select Country</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Germany">Germany</option>
              <option value="Japan">Japan</option>
            </select>
          </div>
        </div>
    
        <div  className="sm:flex justify-center items-center w-full gap-5">
    
          <div  className="sm:mb-0 mb-2  text-center sm:w-1/2">
            <label  htmlFor="cardNumber"  className="text-sm text-[#161D6F] sm:text-[16px]">Gift Card Number</label>
            <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter Gift Card Number"  className=" custom-select custom-arrow w-full cursor-text"/>
          </div>
         
          <div  className="sm:mb-0 mb-2  text-center sm:w-1/2">
            <label  htmlFor="giftCardImage"  className="text-sm m-auto text-[#161D6F] sm:text-[16px]">Gift Card Image</label>
            <input type="file" id="giftCardImage" name="giftCardImage" accept="image/*"  className=" custom-select custom-arrow cursor-text w-full"/>
          </div>
        </div>
        
          <div  className="text-center">
            <button type="submit"  className="btnn text-[14px] sm:text-[16px] w-full">Sell</button>
          </div>
        </form>
      </div>
    
    </section>  

    <section  className="container mx-auto p-4">
        <h1  className="text-2xl font-bold text-center mb-6 text-[#161D6F]">Transaction History</h1>
    
        <div  className="overflow-x-auto rounded-xl">
          <table  className="min-w-full bg-white border shadow-lg rounded-xl">
            <thead>
              <tr  className="bg-[#161D6F] text-white text-center text-sm leading-normal rounded-xl">
                  <th  className="py-3 px-4">Gift Card</th>
                  <th  className="py-3 px-1">Amount</th>
                  <th  className="py-3 px-8">Date</th>
                <th  className="py-3 px-8">Status</th>
              </tr>
            </thead>
            <tbody  className="text-black text-sm">
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">Amazon</td>
                  <td  className="py-3 px-4">$100</td>
                  <td  className="py-3 px-4">2024-09-20</td>
                <td  className="py-3 px-4">
                  <span  className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-lg">Completed</span>
                </td>
              </tr>
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">iTunes</td>
                  <td  className="py-3 px-4">$50</td>
                  <td  className="py-3 px-4">2024-09-18</td>
                <td  className="py-3 px-4">
                  <span  className="bg-yellow-200 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-lg">Pending</span>
                </td>
              </tr>
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">Google Play</td>
                  <td  className="py-3 px-4">$25</td>
                  <td  className="py-3 px-4">2024-09-15</td>
                <td  className="py-3 px-4">
                  <span  className="bg-red-200 text-red-800 text-xs font-semibold px-2 py-1 rounded-lg">Failed</span>
                </td>
              </tr>
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">Walmart</td>
                  <td  className="py-3 px-4">$250</td>
                  <td  className="py-3 px-4">2024-09-12</td>
                <td  className="py-3 px-4">
                  <span  className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-lg">Completed</span>
                </td>
              </tr>
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">Razer Gold</td>
                  <td  className="py-3 px-4">$150</td>
                  <td  className="py-3 px-4">2024-09-12</td>
                <td  className="py-3 px-4">
                  <span  className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-lg">Completed</span>
                </td>
              </tr>
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">Steam</td>
                  <td  className="py-3 px-4">$1000</td>
                  <td  className="py-3 px-4">2024-09-12</td>
                <td  className="py-3 px-4">
                  <span  className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-lg">Completed</span>
                </td>
              </tr>
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">Vanilla</td>
                  <td  className="py-3 px-4">$10</td>
                  <td  className="py-3 px-4">2024-09-12</td>
                  <td  className="py-3 px-4">
                  <span  className="bg-green-200 text-green-800 text-xs font-semibold px-2 py-1 rounded-lg">Completed</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Dashboard