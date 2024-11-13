import { Link, useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/authStore"

const Username = () => {
  const { user } = useAuthStore()
  const navigate = useNavigate()
  const logout = () => {
    // Implement logout logic here
    localStorage.removeItem('token');
    navigate('/landingpage');
  }

  return (
    <div>
        <div className="logins hidden  sm:flex justify-between items-center gap-2 sm:mr-6">
  <img id="profile-pic" src="https://via.placeholder.com/150" alt="User Image" className="sm:w-12 w-10 sm:h-12 mt-2 h-10 rounded-full object-cover" />
  <div className="group relative">
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
      <div className="absolute right-0  bg-[#DDE4EF] dropdown-menu shadow-lg rounded-lg hidden group-hover:block group-hover:transition group-hover:duration-300 group-hover:ease-in-out w-[153px] opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-3">
        <ul className="py-2">
          <li>
            <Link to={'/settings'} className="flex gap-3 items-center text-16 w-full text-left px-4 py-2  text-[#161D6F] hover:bg-gray-100">
              <img className="w-[20px] h-[20px] text-[#161D6F]" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729743643/icons8-user-50_1_n4nhpf.png" alt=""/>
              My Profile
            </Link>
          </li>
          <li>
            <p onClick={logout} className="flex gap-4 items-center w-full px-4 py-2 text-[#161D6F] hover:bg-gray-100 cursor-pointer">
              <img className="w-4 h-4" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740808/logouticon_bs56u0.png" alt="" />
              Logout
            </p>
          </li>
        </ul>
      </div>
  </div>
        </div>

    </div>
  )
}

export default Username