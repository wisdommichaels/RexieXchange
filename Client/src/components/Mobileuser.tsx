import { Link } from "react-router-dom"
import { useAuthStore } from "../store/authStore"

const Mobileuser = () => {
  const {user} = useAuthStore()
  return (
    <div>
   <div className="flex justify-between items-center w-full sm:hidden bg-[#161D6F] py-4 px-4">

  <div className="flex items-center gap-2">
    <img
      id="profile-pic"
      src="https://via.placeholder.com/150"
      alt="User Image"
      className="sm:w-12 w-12 sm:h-12 h-12 mt-2 rounded-full object-cover"
    />
    <span id="username" className="text-white text-[16px] font-bold pt-3 leading-4">
      {user?.username}
    </span>
  </div>


  <div className="group relative">
    <div className="flex cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 pt-3 text-white"
        fill="none"
        viewBox="0 0 20 20"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </div>

  
    <div className="absolute right-0 bg-[#DDE4EF] mt-2 dropdown-menu shadow-lg rounded-lg hidden group-hover:block group-hover:transition group-hover:duration-300 group-hover:ease-in-out w-40 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-3">
      <ul className="py-2">
        <li>
          <Link
            to={'/settings'}
            className="flex items-center gap-3 px-4 text-[16px] w-full text-center py-2 text-[#161D6F] hover:bg-gray-100"
          >
             <img className="w-[20px] h-[20px] text-[#161D6F]" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729743643/icons8-user-50_1_n4nhpf.png" alt=""/>
            My Profile
          </Link>
        </li>
        <li>
          <Link
            to={'/'}
            className="flex gap-3 items-center w-full px-4 py-2 text-[#161D6F] hover:bg-gray-100"
          >
            <img className="w-5 h-5" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740808/logouticon_bs56u0.png" alt="" />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  </div>
</div>

</div>
  )
}

export default Mobileuser