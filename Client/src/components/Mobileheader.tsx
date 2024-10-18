import Mobileuser from "./Mobileuser"
import { Link } from "react-router-dom"

const Mobileheader = () => {
  return (
    <div>

      <Mobileuser/>
      
      <div id="menu" className="bg-gradient-to-r from-[#a2bae3] to-[#668bc2] flex sm:hidden justify-center gap-10 pl-2 pb-4 pt-4 text-[16px] items-center text-white">
      <Link to={'/'} className=" font-semibold text-[14px] hover:text-gray-300 bg-[#161D6F] py-1 px-3 rounded-md">Home</Link>
      <Link to={'/sell'} className=" font-semibold text-[14px] hover:text-gray-300 bg-[#161D6F] py-1 px-3 rounded-md"> Sell Card</Link>
      <Link to={'/dashboard'} className=" font-semibold text-[14px] text-white  hover:text-gray-300 bg-[#161D6F] py-1 px-3 rounded-md ">Dashboard</Link>
     </div>
    </div>
  )
}

export default Mobileheader