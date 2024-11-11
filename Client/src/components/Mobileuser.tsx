import { Link } from "react-router-dom"
import { useAuthStore } from "../store/authStore"


const Mobileuser = () => {

  const {user} = useAuthStore()
  return (
    <div>
   <div className="flex justify-between items-center w-full sm:hidden bg-[#161D6F] py-5 px-4">

  <div className="flex items-center gap-2">
    <img
      id="profile-pic"
      src="https://via.placeholder.com/150"
      alt="User Image"
      className="sm:w-12 w-12 sm:h-12 h-12 mt-2 rounded-full object-cover"
    />
    <span id="username" className="text-white text-[16px] pt-3 leading-4 flex-col">
     <h1 className="text-[18px]  font-bold "> Hello! </h1>
      {user?.username}
    </span>
  </div>
  <Link to={"/settings"} className="flex flex-col justify-center items-center pr-2">
      <img className="w-[35px] h-[35px]" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740808/customericon_gq2lmh.png" alt=""/>
      {/* <p className="  text-[14px] ">My Profile</p> */}
  </Link>
</div>
</div>
  )
}

export default Mobileuser