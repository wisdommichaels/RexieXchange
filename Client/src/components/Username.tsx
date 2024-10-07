import { Link } from "react-router-dom"

const Username = () => {
  return (
    <div>
         <div  className="logins flex justify-between items-center gap-2 mr-6">
                 <img id="profile-pic" src="https://via.placeholder.com/150" alt="User Image"  className="sm:w-12 w-10 sm:h-12 mt-2  h-10 rounded-full object-cover"/>
            <div  className="group relative  ">
            <div  className=" group relative dropdown flex">
              <div className="flex cursor-pointer ">
                 <span  className="text-white text-[14px] font-bold pt-3 leading-4">Wisdom Michael</span>
                 <svg className="w-[25px] h-[25px] pt-3 text-white font-bold hidden sm:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 ml-[215px] pt-3 text-white sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </div>
              <div  className="absolute right-0 mt-12 bg-[#DDE4EF] dropdown-menu shadow-lg rounded-lg hidden group-hover:block w-48">
                <ul  className="py-2">
                  <li>
                  <Link to={'/settings'}  className="block w-full text-left px-4 py-2 text-[#161D6F] hover:bg-gray-100">
                      Account Settings
                      </Link>
                  </li>
                  <li>
                  <Link to={'/'}  className="block w-full px-4 py-2 text-[#161D6F] hover:bg-gray-100 ">
                      Logout
                      </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            </div>
    </div>
  )
}

export default Username