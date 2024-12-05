
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore"
import useLogout from "../hooks/useLogOut";
import Loader from "./Loader";

const Username = () => {
  const { user } = useAuthStore()
  
  const {loading, logout}= useLogout()

  return (
    <>
    {loading && <Loader />}
    <div>
        <div className="group logins hidden  sm:flex justify-between items-center gap-2 sm:mr-6">
  <img id="profile-pic" src={user?.profilePic?user.profilePic:"https://via.placeholder.com/150"} alt="User Image" className="sm:w-10 w-10 sm:h-10 mt-2 h-10 rounded-full" />
  <div className=" relative">
    <div className="group relative dropdown flex">
      <div className="flex cursor-pointer">
        <span className="text-white text-[13px] pt-3 font-semibold leading-4">{user?.username}</span>
        <svg className="w-[25px] h-[25px] pt-3 text-white font-bold hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 ml-[215px] pt-3 text-white sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>
    </div>
      <div className="absolute left-0 top-8  bg-[#C9D8F0] min-w-32 w-full dropdown-menu shadow-lg rounded-lg hidden group-hover:block group-hover:transition group-hover:duration-300 group-hover:ease-in-out  opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-3">
        <ul className="py-2">
          <li>
            <Link to={'/userprofile'} className="flex gap-3 items-center text-nowrap text-[14px] text-left px-3 py-2  text-[#161D6F] hover:bg-gray-100">
              <img className="w-[20px] h-[20px] text-[#161D6F]" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729743643/icons8-user-50_1_n4nhpf.png" alt=""/>
              My Profile
            </Link>
          </li>
          <li>
            <p onClick={logout} className="flex gap-4 items-center  text-[14px] w-full px-4 py-2 text-[#161D6F] hover:bg-gray-100 cursor-pointer">
              <img className="w-4 h-4" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740808/logouticon_bs56u0.png" alt="" />
              Logout
            </p>
          </li>
        </ul>
      </div>
  </div>
        </div>

    </div>
    </>
  )
}

export default Username