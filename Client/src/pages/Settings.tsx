import Footer from "../components/Footer"
import { Link } from "react-router-dom"

const Settings = () => {
    const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
         
        }
      };
  return (
    <div>
        <nav className="bg-[#161D6F] shadow-lg py-3">
    <div className="containe mx-auto px-4 py-3 flex justify-between items-center sm:mx-14">
    <Link to={"/"} className="signup-button px-5 flex justify-center items-center gap-2 text-[11px] py-2 ">
    <svg fill="#000000" width="10px" height="10px" viewBox="0 0 52 52" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z"/></svg>
          BACK
        </Link>
     
      <div className=" hidden sm:flex items-center space-x-1 mt-1">
        <img id="profile-pic" src="https://via.placeholder.com/50x50" alt="Profile Pic" className="h-12 w-12 mt-2 rounded-full"/>
        <span className="md:inline text-white pt-3">Wisdom Michael</span>
      </div>
    </div>
  </nav>

  <section className="flex-col justify-center items-center">
    <div className=" bg-gradient-to-r from-[#a2bae3] to-[#668bc2] m-auto shadow-lg sm:rounded-lg sm:w-[50%] sm:h-[100%] sm:my-8 p-6 flex-col justify-center items-center">
        <div className="flex justify-center items-center space-x-4 mb-4">
          <img id="profile-pic" className="h-12 w-12 rounded-full object-cover" src="https://via.placeholder.com/150" alt="Profile Picture"/>
          <div>
            <label htmlFor="profile-pic-upload" className="text-[#161D6F] cursor-pointer hover:underline">Change Profile Picture</label>
            <input type="file" id="profile-pic-upload" className="hidden" accept="image/*" onChange={(event: React.ChangeEvent<HTMLInputElement>) => loadFile(event)}/>
          </div>
        </div>
  
      
        <div className="mb-4 w-full flex-col justify-center items-center sm:w-[50%] m-auto">
          <label htmlFor="username" className="block text-[#161D6F] font-semibold mb-1 text-center">Edit Username</label>
            <input className="p-3 input" type="text" id="username" placeholder="Enter your username"/>
        </div>
  
      
        <div className="mb-4 flex-col justify-center items-center sm:w-[50%] m-auto">
          <label htmlFor="current-password" className="block text-[#161D6F] font-semibold mb-1 text-center">Current Password</label>
          <input className="p-3 input" type="password" id="current-password" placeholder="Enter current password"/>
        </div>
  
        <div className="mb-4 flex-col justify-center items-center sm:w-[50%] m-auto">
          <label htmlFor="new-password" className="block text-[#161D6F] text-center font-semibold mb-1">New Password</label>
          <input className="p-3 input" type="password" id="new-password" placeholder="Enter new password"/>
        </div>
  
        <div className="mb-4 flex-col justify-center items-center sm:w-[50%] m-auto">
          <label htmlFor="confirm-password" className="block text-[#161D6F] font-semibold mb-1 text-center">Confirm New Password</label>
          <input className="p-3 input" type="password" id="confirm-password" placeholder="Confirm new password"/>
        </div>
  
      
        <div className="flex justify-center items-center sm:w-[50%] m-auto">
          <button className="btn px-3 py-3 w-full">Save Changes</button>
        </div>
    </div>
  </section>
  <Footer/>

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