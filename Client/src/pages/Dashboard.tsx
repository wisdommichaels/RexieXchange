
import Header from "../components/Header"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Mobiledashboard from "../components/Mobiledashboard";
import Username from "../components/Username";
import Mobilefooter from "../components/Mobilefooter";
import { useAuthStore } from "../store/authStore";

const Dashboard = () => {
  const { user } = useAuthStore()
  return (
    <div>
        <nav className="bg-[#161D6F] shadow-lg sm:hidden flex sm:justify-between items-center py-3">
        <Link
          to={"/"}
          className="back-button sm:rounded-2xl sm:px-4 sm:py-1 flex justify-center sm:ml-6 ml-2 items-center gap-2 text-[11px] p-3 "
        >
        <img src="src/assets/arrow-.png" alt="" />
        </Link>

        <h2 className=" sm:text-[24px] text-[18px] text-white sm:ml-28 pt-3 pl-24 ">
          DashBoard
        </h2>

        <div className="hidden sm:block">
          <Username />
        </div>
      </nav>
      <Mobiledashboard/>

   <section id="black">
    <div className="hidden sm:block">
        <Header>    
        <div  className="sm:flex items-center justify-center sm:mt-24 mt-2">
                <div  className="bg-white shadow-lg w-[95%] sm:w-[50%] p-6 sm:m-8 sm:mb-10 sm:rounded-lg rounded-lg bg-gradient-to-r from-[#a2bae3] to-[#668bc2]">
                  <h2  className="text-[16px] sm:text-[25px] font-bold py-4 sm:mx-10 ">Hello {user?.username}</h2>
                  <div  className="flex items-center justify-between space-x-2 mb-6 sm:mx-10 ">
                    <div  className="flex-col justify-center items-center">
                      <p  className="text-gray-800 sm:text-[16px] text-[10px]">Total Balance: <span></span></p>
                      <p  className="font-bold text-white sm:text-[20px] text-[16px]">₦10,250.00</p>
                    </div>
                    <Link to={"/"} className="sm:w-[25%] flex justify-center items-center w-[30%] text-[12px] sm:text-[14px] bg-[#161D6F] text-white font-semibold sm:py-2 py-3 rounded-lg hover:bg-[#1823a0] transition duration-200 ease-in-out">
                      Withdraw <span  className="sm:block hidden">Funds</span> 
                    </Link>
                  </div>
                </div>
            </div>
        </Header>
     </div>
    </section>
    <section  className="container mx-auto p-4 mb-5">
        <h1  className="text-2xl font-bold text-center mb-4 text-[#161D6F]">Transaction History</h1>
    
        <div  className="overflow-x-auto rounded-xl">
          <table  className="min-w-full bg-white border shadow-lg rounded-xl">
            <thead>
              <tr  className="bg-[#668bc2] text-[#161D6F] text-center text-[12px] leading-normal rounded-xl">
                  <th  className="py-4 px-4">Gift Card</th>
                  <th  className="py-3 px-1">Amount</th>
                  <th  className="py-3 px-8">Date</th>
                <th  className="py-3 px-8">Status</th>
              </tr>
            </thead>
            <tbody  className="text-black text-sm">
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">Amazon</td>
                  <td  className="py-3 px-4">$100</td>
                  <td  className="py-3 px-4 text-[10px]">2024-09-20</td>
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
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">Vanilla</td>
                  <td  className="py-3 px-4">$10</td>
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
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">Vanilla</td>
                  <td  className="py-3 px-4">$10</td>
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
              <tr  className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm ">
                  <td  className="py-3 px-4">Vanilla</td>
                  <td  className="py-3 px-4">$10</td>
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
      <Mobilefooter/>

      <div className="hidden sm:block">
        <Footer/>  
      </div>

    </div>
  )
}

export default Dashboard