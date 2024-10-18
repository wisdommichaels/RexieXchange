import { Link } from "react-router-dom"

const Mobileuser = () => {
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
      Wisdom Michael
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

  
    <div className="absolute right-0 bg-[#DDE4EF] dropdown-menu shadow-lg rounded-lg hidden group-hover:block group-hover:transition group-hover:duration-300 group-hover:ease-in-out w-40 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 -translate-y-3">
      <ul className="py-2">
        <li>
          <Link
            to={'/settings'}
            className="block text-[16px] w-full text-center py-2 text-[#161D6F] hover:bg-gray-100"
          >
            Account Settings
          </Link>
        </li>
        <li>
          <Link
            to={'/'}
            className="flex w-full gap-3 px-4 py-2 text-[#161D6F] hover:bg-gray-100"
          >
            Logout
            <img className="w-6 h-6" src="src\assets\logouticon.png" alt="" />
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