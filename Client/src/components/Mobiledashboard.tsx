import { Link } from "react-router-dom"
import { useAuthStore } from "../store/authStore"
const Mobiledashboard = () => {
  const {user} = useAuthStore()
  return (
    <div>
          <div  className="flex sm:hidden items-center justify-center m-3">
          <div className="flex-col justify-center items-center shadow-xl w-full m-auto p-8 bg-gradient-to-r from-[#a2bae3] to-[#668bc2]  sm:rounded-lg rounded-lg">
          <div className="flex justify-between">
          <h1 className=" text-2xl text-[#161D6F] pb-5">ACCOUNT DETAILS</h1>
          <Link to={"/userprofile"}>
          <img className="w-5 h-5" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1733924549/editicon_t86kb0.png" alt="profile edit icon" />
          </Link>
          </div>
          <div className="flex  items-center mb-3 gap-3">
            <p className="text-[#161D6F]  ">Account Name :</p>
            <p  className="underline">{user?.accountDetails?.accountName || "Not Set"}</p>
          </div>
          <div className="flex  mb-3 gap-3">
            <p className="text-[#161D6F] ">Account Number :</p>
            <p className="underline">{user?.accountDetails?.accountNumber || "Not Set"}</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[#161D6F] ">Bank Name  :</p>
            <p  className="underline">{user?.accountDetails?.bankName || "Not Set"}</p>
          </div>
        </div>
                {/* <div  className="bg-white shadow-lg w-[95%] sm:w-[50%] p-6 sm:m-8 sm:mb-10 sm:rounded-lg rounded-lg bg-gradient-to-r from-[#a2bae3] to-[#668bc2]">
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
                </div> */}
            </div>
    </div>
  )
}

export default Mobiledashboard