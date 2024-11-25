
import Header from "../components/Header"
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Mobiledashboard from "../components/Mobiledashboard";
import Username from "../components/Username";
import Mobilefooter from "../components/Mobilefooter";
import { useAuthStore } from "../store/authStore";
import { useEffect, useState } from "react";
import api from "../utils/api";
import { api_url } from "../utils/constants";
import OnscrollHeader from "../components/OnscrollHeader";

interface Transaction {
  cardName: string;
  amount: string;
  date: string;
  status: string;
}

const Dashboard: React.FC = () => {
  const { user } = useAuthStore()
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Fetch transactions from API
  useEffect(() => {
    // Replace with your actual API endpoint URL
    const fetchTransactions = async () => {
      try {
        const response = await api.get(`${api_url}/transaction`);
        setTransactions(response.data); // Assuming response.data is an array of transactions
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);
  
  return (
    <div>
      <OnscrollHeader/>
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
        <Header>    
    <div className="hidden sm:block">
        <div  className="sm:flex-col items-center justify-center my-[75px] w-[85%] mx-auto p-8">
                <div className="flex-col justify-center items-center ml-8">
                  <h2  className="text-[16px] sm:text-[25px] font-bold pb-12 text-white">Hello, {user?.username}</h2>
                  <h2  className="text-[16px] sm:text-[18px] font-bold pb-2 text-white">Account Details</h2>
                </div>
                  <div className="flex justify-center items-center gap-5">
                <div  className="flex-col justify-center items-center shadow-lg w-[95%] sm:w-[30%] p-8 sm:rounded-lg rounded-lg bg-gradient-to-r from-[#a2bae3] to-[#668bc2]">
                      <p  className="text-gray-800 sm:text-[18px] text-[10px]">Bank Name</p>
                      <p  className="font-bold text-white sm:text-[20px] text-[16px]">Access Bank</p>
                </div>
                <div  className="flex-col justify-center items-center shadow-lg w-[95%] sm:w-[30%] p-8 sm:rounded-lg rounded-lg bg-gradient-to-r from-[#a2bae3] to-[#668bc2]">
                      <p  className="text-gray-800 sm:text-[18px] text-[10px]">Account Name</p>
                      <p  className="font-bold text-white sm:text-[20px] text-[16px]">wisdom michael</p>            
                </div>
                <div  className="flex-col justify-center items-center shadow-lg w-[95%] sm:w-[30%] p-8 sm:rounded-lg rounded-lg bg-gradient-to-r from-[#a2bae3] to-[#668bc2]">                
                      <p  className="text-gray-800 sm:text-[18px] text-[10px]">Account Number</p>
                      <p  className="font-bold text-white sm:text-[20px] text-[16px]">0123456789</p>                 
                </div>
                </div>
            </div>
     </div>
        </Header>
    </section>
    <section className="container mx-auto p-4 mb-5">
      <h1 className="text-2xl font-bold text-center mb-4 text-[#161D6F]">Transaction History</h1>

      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full bg-white border shadow-lg rounded-xl">
          <thead>
            <tr className="bg-[#668bc2] sm:bg-[#161D6F] text-[#161D6F] sm:text-white text-center text-[12px] leading-normal rounded-xl">
              <th className="py-4 px-4">Gift Card</th>
              <th className="py-3 px-1">Amount</th>
              <th className="py-3 px-8">Date</th>
              <th className="py-3 px-8">Status</th>
            </tr>
          </thead>
          <tbody className="text-black text-sm">
            {transactions.map((transaction, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 text-center text-sm">
                <td className="py-3 px-4">{transaction.cardName}</td>
                <td className="py-3 px-4">{transaction.amount}</td>
                <td className="py-3 px-4 text-[10px]">{transaction.date}</td>
                <td className="py-3 px-4">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-lg ${
                      transaction.status === 'Completed'
                        ? 'bg-green-200 text-green-800'
                        : transaction.status === 'Pending'
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
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