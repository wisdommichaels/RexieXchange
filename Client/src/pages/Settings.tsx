import Footer from "../components/Footer"
import Header from "../components/Header";

const Settings = () => {
    const loadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
         
        }
      };
  return (
    <div>
        <nav className="bg-[#161D6F] shadow-lg rounded-b-lg sm:rounded-none">
    <div className="containe mx-auto px-4 py-3 flex justify-between items-center">
    <div className="flex items-center">
    <img className="w-[50px] h-[50px] pb-12" src="src\assets\mylogo.png" alt="" />
        <div className="flex-col justify-center items-center leading-4 pb-9">
        <h1 className="font-bold text-[24px] text-white">GiftHub</h1>
        <p className="text-[8px] text-white pl-1 font-bold">Exchange with Ease</p>
        </div>
    </div>

 
        <Header/>
      {/* <div className="hidden md:flex space-x-8">
        <a href="#" className="text-white  hover:text-[#FA4A00]">Home</a>
        <a href="#" className="text-white hover:text-[#FA4A00]">Giftcard</a>
        <a href="#" className="text-white  hover:text-[#FA4A00]">Blog</a>
        <a href="#" className="text-white hover:text-[#FA4A00]">Dashboard</a>
      </div> */}

     
      <div className="flex items-center space-x-4">
        <img id="profile-pic" src="https://via.placeholder.com/50x50" alt="Profile Pic" className="h-12 w-12 rounded-full"/>
        <span className="hidden md:inline text-gray-700 dark:text-gray-300">John Doe</span>
        <button className="signup-button">
          My Profile
        </button>
      </div>
    </div>

  
    <div id="menu" className="sm:hidden mt-2 pb-5 flex justify-center gap-5 text-[14px] items-center text-white">
        <a href="#home" className="   font-bold hover:text-gray-300 ">Home</a>
        <a href="#giftcard" className="  hover:text-gray-300"> Sell Gift Card</a>
        <a href="#Dashboard" className=" hover:text-gray-300">Dashboard</a>
      </div>
  </nav>

  <section className="flex-col justify-center items-center">
    <div className=" bg-gradient-to-r from-[#a2bae3] to-[#668bc2] m-auto shadow-lg rounded-lg sm:w-[50%] sm:h-[100%] sm:my-8 p-6 flex-col justify-center items-center">
       
        <div className="flex justify-center items-center space-x-4 mb-4">
          <img id="profile-pic" className="h-12 w-12 rounded-full object-cover" src="https://via.placeholder.com/150" alt="Profile Picture"/>
          <div>
            <label htmlFor="profile-pic-upload" className="text-[#161D6F] cursor-pointer hover:underline">Change Profile Picture</label>
            <input type="file" id="profile-pic-upload" className="hidden" accept="image/*" onChange={(event: React.ChangeEvent<HTMLInputElement>) => loadFile(event)}/>
          </div>
        </div>
  
      
        <div className="mb-4 w-full flex-col justify-center items-center sm:w-[50%] m-auto">
          <label htmlFor="username" className="block text-[#161D6F] font-semibold mb-1 text-center">Username</label>
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