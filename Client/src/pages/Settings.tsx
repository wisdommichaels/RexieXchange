import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import Username from "../components/Username"
import Mobilefooter from "../components/Mobilefooter";

const Settings = () => {
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

  <section className="flex flex-col md:flex-row justify-center p-3 ">
        <div className="flex-col justify-center items-center  m-auto sm:w-[40%] w-full sm:h-[70vh] pb-10 sm:mt-8 bg-gradient-to-r from-[#a2bae3] to-[#668bc2]  sm:rounded-lg rounded-t-lg">
          <div className="flex justify-center items-center pt-8">
          <img id="profile-pic" className="h-[120px] w-[120px] rounded-full object-cover mb-2" src="https://via.placeholder.com/150" alt="Profile Picture"/>
          </div>
          <div className="flex justify-center items-center bg-white w-fit mx-auto px-4 py-1 rounded-md">
            <div className="flex justify-center items-center">
            <label htmlFor="profile-pic-upload" className="text-[#161D6F] cursor-pointer">Edit</label>
            <img className="w-3 h-3" src="src\assets\editicon.png" alt="" />
            </div>
            <input type="file" id="profile-pic-upload" className="hidden underline-offset-0" accept="image/*" onChange={(event: React.ChangeEvent<HTMLInputElement>) => loadFile(event)}/>
          </div>
          <div className="flex-col justify-center items-center mt-3 m-auto text-center">
          <h1 id="username" className="font-bold text-20 text-[#161D6F]">Wisdom Michael</h1>
          <h2 id="email" className="text-14 text-[#161D6F]">iamrexie83@gmail.com</h2>
          </div>
        </div>
    <div className="h-[80vh] bg-gradient-to-r from-[#a2bae3] to-[#668bc2] m-auto shadow-lg sm:rounded-lg sm:w-[50%] w-full sm:h-[100%] sm:my-10  py-10 px-5 flex-col justify-center items-center">
        <div className="mb-6 w-full flex-col justify-center items-center sm:w-[80%] m-auto">
          <label htmlFor="username" className="block text-[#161D6F] font-semibold mb-1 text-center">Edit Username</label>
            <input className="p-4 sm:p-3 input" type="text" id="username" placeholder="Enter your username"/>
        </div>
  
      
        <div className="mb-6 flex-col justify-center items-center sm:w-[80%] m-auto">
          <label htmlFor="current-password" className="block text-[#161D6F] font-semibold mb-1 text-center">Current Password</label>
          <input className="p-4 sm:p-3 input" type="password" id="current-password" placeholder="Enter current password"/>
        </div>
  
        <div className="mb-6 flex-col justify-center items-center sm:w-[80%] m-auto">
          <label htmlFor="new-password" className="block text-[#161D6F] text-center font-semibold mb-1">New Password</label>
          <input className="p-4 sm:p-3 input" type="password" id="new-password" placeholder="Enter new password"/>
        </div>
  
        <div className="mb-6 flex-col justify-center items-center sm:w-[80%] m-auto">
          <label htmlFor="confirm-password" className="block text-[#161D6F] font-semibold mb-1 text-center">Confirm New Password</label>
          <input className="p-4 sm:p-3 input" type="password" id="confirm-password" placeholder="Confirm new password"/>
        </div>
  
      
        <div className="flex justify-center items-center sm:w-[80%] m-auto">
          <button className="btn px-3 py-4 w-full">Save Changes</button>
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