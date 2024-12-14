import { useAuthStore } from "../store/authStore"
import HamburgerMenu from "./Hamburger"


const Mobileuser = () => {

  const {user} = useAuthStore()
  return (
    <div>
   <div className="flex justify-between items-center w-full sm:hidden bg-[#161D6F] py-5 px-4">

  <div className="flex items-center gap-2">
    <img
      id="profile-pic"
      src={user?.profilePic?user.profilePic:"https://via.placeholder.com/150"}
      alt="User Image"
      className="sm:w-12 w-12 sm:h-12 h-12 mt-2 rounded-full object-cover"
    />
    <span id="username" className="text-white text-[12px] pt-3 leading-4 flex-col">
     <h1 className="text-[14px]  font-bold "> Hello! </h1>
      {user?.username}
    </span>
  </div>
 <HamburgerMenu />
</div>
</div>
  )
}

export default Mobileuser