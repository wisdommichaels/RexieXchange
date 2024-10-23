import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import Username from "../components/Username"
import Mobilefooter from "../components/Mobilefooter";
import { useAuthStore } from "../store/authStore";

const Settings = () => {
  const { user } = useAuthStore()
    const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
         
        }
      };
  return (
    <div>
   <nav className="bg-[#161D6F] shadow-lg flex sm:justify-between items-center py-3">
        <Link
          to={"/"}
          className="signup-button rounded-full sm:rounded-md sm:px-5 sm:py-0 flex justify-center ml-6 items-center gap-2 text-[11px] p-3 "
        >
          <svg className="sm-w-10 sm:h-10"
            fill="#000000"
            width="14px"
            height="14px"
            viewBox="0 0 52 52"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z" />
          </svg>
          <span className="hidden sm:block">BACK</span>
        </Link>

        <h2 className=" sm:text-[24px] text-[18px] text-white sm:ml-20 pt-3 pl-24 sm:pl-0 ">
          Account Settings
        </h2>

        <div className="hidden sm:block">
          <Username />
        </div>
      </nav>
      {/* <div className=" hidden sm:flex items-center space-x-1 mt-1">
        <img id="profile-pic" src="https://via.placeholder.com/50x50" alt="Profile Pic" className="h-12 w-12 mt-2 rounded-full"/>
        <span className="md:inline text-white pt-3">Wisdom Michael</span>
      </div> */}

  <section className="flex flex-col md:flex-row justify-center p-3">
    <div className=" m-auto sm:w-[35%] w-full sm:mt-10 mb-4">
        <div className="flex-col justify-center items-center shadow-xl  m-auto w-full bg-gradient-to-r from-[#a2bae3] to-[#668bc2]  sm:rounded-lg rounded-lg">
          <h1 className="text-center p-6 text-2xl text-[#161D6F]">MY PROFILE</h1>
          <div className="flex justify-center items-center">
          <img id="profile-pic" className="h-[120px] w-[120px] rounded-full object-cover mb-2" src="https://via.placeholder.com/150" alt="Profile Picture"/>
          </div>
          <div className="flex justify-center items-center bg-white w-fit mx-auto px-4 py-1 rounded-md">
            <div className="flex justify-center items-center">
            <img className="w-4 h-4" src="src\assets\editicon.png" alt="" />
            <label htmlFor="profile-pic-upload" className="text-[#161D6F] cursor-pointer">Edit</label>
            </div>
            <input type="file" id="profile-pic-upload" className="hidden underline-offset-0" accept="image/*" onChange={(event: React.ChangeEvent<HTMLInputElement>) => loadFile(event)}/>
          </div>
          <div className="flex-col justify-center items-center pb-10 pt-3 m-auto text-center">
          <h1 id="username" className="font-bold text-20 text-[#161D6F]">{user?.username}</h1>
          <h2 id="email" className="text-14 text-[#161D6F] mt-1">{user?.email}</h2>
          </div>
        </div>
        <div className="flex-col justify-center items-center shadow-xl  m-auto w-full text-center mt-4 sm:mt-8  p-8 bg-gradient-to-r from-[#a2bae3] to-[#668bc2]  sm:rounded-lg rounded-lg">
          <h1 className=" text-2xl text-[#161D6F] pb-5">ACCOUNT DETAILS</h1>
          <div className="flex justify-center items-center mb-5 gap-3">
            <p className="text-[#161D6F] font-bold ">Account Number :</p>
            <p className="underline">09967636849</p>
          </div>
          <div className="flex justify-center items-center mb-5 gap-3">
            <p className="text-[#161D6F] font-bold ">Account Name :</p>
            <p  className="underline">osaghale Christiana</p>
          </div>
          <div className="flex justify-center items-center mb-5 gap-3">
            <p className="text-[#161D6F] font-bold ">Bank Name  :</p>
            <p  className="underline">Kuda Bank</p>
          </div>
        </div>
        </div>
        
        <div className="w-full sm:p-0 sm:w-[60%] flex-col justify-center items-center sm:my-10 mb-20  m-auto">
           <div className="bg-gradient-to-r from-[#a2bae3] to-[#668bc2]  shadow-xl rounded-lg  w-full pb-8 px-5 flex-col justify-center items-center">
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
    </div>
  </section>
  <div className="hidden sm:block">
  <Footer/>
  </div>
  <Mobilefooter/>
  

  {/* <script>
   // JavaScript to update profile picture preview
   const loadFile = (event) => {
      const output = document.getElementById('profile-pic');
      output.src = URL.createObjectURL(event.target.files[0]);
      output.onload = function() {
        URL.revokeObjectURL(output.src)
      }
    };
  </script> */}
    </div>
  )
}

export default Settings