import Footer from "../components/Footer"
import { Link } from "react-router-dom"
// import Username from "../components/Username"
import Mobilefooter from "../components/Mobilefooter";
import { useAuthStore } from "../store/authStore";
import CustomerReviewForm from "../components/CustomerReview";

const UserProfile = () => {
  const { user } = useAuthStore()
    const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
         
        }
      };

      const logout = () => {
        // Implement logout logic here
        localStorage.removeItem('token');
        window.location.reload()
      }
  return (
    <div>
   <nav className="bg-[#161D6F] shadow-lg flex gap-5 items-center py-3">
   <Link
          to={"/"}
          className="back-button sm:rounded-2xl sm:px-4 sm:py-1 flex justify-center sm:ml-6 ml-2 items-center gap-2 text-[11px] p-3 "
        >
        <img src="src/assets/arrow-.png" alt="" />
        </Link>

        <h2 className=" sm:text-[20px] text-[18px] text-white pl-12 sm:pl-0 text-center ">
          Account Settings
        </h2>

        <div className="sm:hidden pl-4">
        <p onClick={logout} className="flex gap-2 items-center text-[18px] w-full px-4 py-2 text-white hover:bg-gray-100 cursor-pointer">
              Logout
              <img className="w-4 h-4" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1731945322/icons8-logout-50_y7a0cu.png" alt="" />
            </p>
        </div>
    </nav>
      {/* <div className=" hidden sm:flex items-center space-x-1 mt-1">
        <img id="profile-pic" src="https://via.placeholder.com/50x50" alt="Profile Pic" className="h-12 w-12 mt-2 rounded-full"/>
        <span className="md:inline text-white pt-3">Wisdom Michael</span>
      </div> */}

  <section className="flex flex-col md:flex-row justify-center p-3">
    <div className=" m-auto sm:w-[35%] w-full mb-4">
        <div className="flex-col justify-center items-center shadow-xl  m-auto w-full bg-gradient-to-r from-[#a2bae3] to-[#668bc2]  sm:rounded-lg rounded-lg">
          <h1 className="text-center p-6 text-2xl text-[#161D6F]">MY PROFILE</h1>
          <div className="flex justify-center items-center">
          <img id="profile-pic" className="h-[120px] w-[120px] rounded-full object-cover mb-2" src="https://via.placeholder.com/150" alt="Profile Picture"/>
          </div>
          <div className="flex justify-center items-center bg-white w-fit mx-auto px-4 py-1 rounded-md">
            <div className="flex justify-center items-center gap-1">
            <label htmlFor="profile-pic-upload" className="text-[#161D6F] cursor-pointer">Edit profile picture</label>
            <img className="w-4 h-4" src="src\assets\editicon.png" alt="" />
            </div>
            <input type="file" id="profile-pic-upload" className="hidden underline-offset-0" accept="image/*" onChange={(event: React.ChangeEvent<HTMLInputElement>) => loadFile(event)}/>
          </div>
          <div className="flex-col justify-center items-center pb-10 pt-3 m-auto text-center">
          <h1 id="username" className="font-bold text-[20px] text-[#161D6F]">{user?.username}</h1>
          <h2 id="email" className="text-[18px] text-[#161D6F] mt-1">{user?.email}</h2>
          </div>
        </div>
        <div className="flex-col justify-center items-center shadow-xl  m-auto w-full text-center mt-4 sm:mt-8  p-8 bg-gradient-to-r from-[#a2bae3] to-[#668bc2]  sm:rounded-lg rounded-lg">
          <h1 className=" text-2xl text-[#161D6F] pb-4">CHANGE ACCOUNT DETAILS</h1>
          <div className="mb-4 flex-col justify-center items-center sm:w-[80%] m-auto">
          <label htmlFor="current-password" className="block text-[#161D6F]  text-center">Edit Account Number</label>
          <input className="p-4 sm:p-3 input" type="text"  placeholder="Enter current password"/>
        </div>
  
        <div className="mb-4 flex-col justify-center items-center sm:w-[80%] m-auto">
          <label htmlFor="new-password" className="block text-[#161D6F] text-center ">Edit Account Name</label>
          <input className="p-4 sm:p-3 input" type="text"  placeholder="Enter new password"/>
        </div>
  
        <div className="mb-4 flex-col justify-center items-center sm:w-[80%] m-auto">
          <label htmlFor="confirm-password" className="block text-[#161D6F]  text-center">Edit Bank Name</label>
          <input className="p-4 sm:p-3 input" type="text" placeholder="Confirm new password"/>
        </div>

        <div className="flex justify-center items-center sm:w-[80%] m-auto">
          <button className="btn px-3 py-4 w-full">Save Changes</button>
        </div>
        </div>
        </div>
        
        
           <div className="bg-gradient-to-r from-[#a2bae3] to-[#668bc2] shadow-xl rounded-lg  w-full sm:w-[60%] pb-8 px-5 flex-col justify-center items-center">
            <h1 className="text-2xl text-[#161D6F] text-center p-6">EDIT PROFILE</h1>
        <div className="mb-6 w-full flex-col justify-center items-center sm:w-[80%] m-auto">
          <label htmlFor="username" className="block text-[#161D6F]   text-center">Edit Username</label>
            <input className="p-4 sm:p-3 input" type="text" id="username" placeholder="Enter your username"/>
        </div>
  
      
        <div className="mb-6 flex-col justify-center items-center sm:w-[80%] m-auto">
          <label htmlFor="current-password" className="block text-[#161D6F]  text-center">Current Password</label>
          <input className="p-4 sm:p-3 input" type="password" id="current-password" placeholder="Enter current password"/>
        </div>
  
        <div className="mb-6 flex-col justify-center items-center sm:w-[80%] m-auto">
          <label htmlFor="new-password" className="block text-[#161D6F] text-center ">New Password</label>
          <input className="p-4 sm:p-3 input" type="password" id="new-password" placeholder="Enter new password"/>
        </div>
  
        <div className="mb-6 flex-col justify-center items-center sm:w-[80%] m-auto">
          <label htmlFor="confirm-password" className="block text-[#161D6F]  text-center">Confirm New Password</label>
          <input className="p-4 sm:p-3 input" type="password" id="confirm-password" placeholder="Confirm new password"/>
        </div>
  
      
        <div className="flex justify-center items-center sm:w-[80%] m-auto">
          <button className="btn px-3 py-4 w-full">Save Changes</button>
        </div>
    </div>
   
  </section>
  <section className="mb-[90px]">
  <CustomerReviewForm />
  </section>


  <div className="hidden sm:block">
  <Footer/>
  </div>
  <Mobilefooter/>
  
    </div>
  )
}

export default UserProfile