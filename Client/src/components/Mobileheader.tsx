import Username from "./Username"
import { Link } from "react-router-dom"

const Mobileheader = () => {
  return (
    <div>
      <div className="bg-[#161D6F] px-4 py-6  sm:hidden  flex justify-between items-center">
        <Username/>
      </div>
      <div id="menu" className="bg-[#161D6F] flex sm:hidden justify-center gap-14 pl-2 mb-3 pb-4 rounded-b-md text-[16px] items-center text-white">
      <Link to={'/'} className="   font-bold hover:text-gray-300 underline underline-offset-2 text-[#E7500F]">Home</Link>
      <Link to={'/sell'} className=" hover:text-gray-300 "> Sell Gift Card</Link>
      <Link to={'/dashboard'} className=" text-white  hover:text-gray-300 ">Dashboard</Link>
     </div>
    </div>
  )
}

export default Mobileheader