import { Link } from "react-router-dom"
function Login() {
  const toggleForms = () => {
  }
  return (
    <div className="bg-[#101035]">
          <div className="login-div">
        <div className="photo hidden sm:flex">
            <img src="src/assets/LOGINPHOTO.png" alt=""/>
        </div> 
   
  <div className="w-full sm:w-1/2 m-auto flex items-center justify-center">
    <div className="rotate-container w-full sm:w-1/2 form-container bg-[#DDE4EF] shadow-lg flex justify-center items-center">

      <div className="login flex flex-col justify-center items-center space-y-4 w-full">
        <h1 className="text-lg font-semibold text-[#161D6F] text-center mt-5">Hello, Welcome Back to GiftHub</h1>
        <h2 className="text-3xl font-bold text-[#161D6F]">Login</h2>
        <span className="text-[12px] text-[#292a2b] m-5">or Login with</span>
        <div className="social-icons">
        <Link to={'/'}className="media-icons"><i className="fa-brands fa-google-plus-g"></i></Link>
        <Link to={'/'} className="media-icons"><i className="fa-brands fa-apple text-white"></i></Link>
        <Link to={'/'} className="media-icons"><i className="fa-brands fa-facebook-f text-white"></i></Link>
        </div>
        <form className="w-full flex flex-col justify-center items-center">
          <div className="mb-4 w-[85%] flex flex-col justify-center items-center">
            <label className="text-[#161D6F] text-[14px]">Email</label>
            <input type="email" placeholder="Enter your E-mail" className="w-full sm:w-[50%] py-3 px-5 input"/>
          </div>
         <div className="w-[85%] sm:-w-[60%] flex flex-col justify-center items-center">
            <label className="text-[#161D6F] text-[14px]">Password</label>
            <input type="password" placeholder="Enter your Password"className="w-full sm:w-[50%] py-3 px-5 input"/>
          </div>
          <a className="text-[#161D6F] text-[12px] hover:underline" href="#">Forgot your password?</a>
          <button type="submit" className="btnn w-[85%] sm:w-[42%]">Login</button>
        </form>
        <button onClick={()=>toggleForms} className="mt-4 pb-5 text-[#161D6F]">Don't have an account? <span className=" hover:underline">Sign Up</span></button>
      </div>

    
      <div className="signup absolute inset-0 flex flex-col justify-center items-center space-y-4">
        <h1 className="text-2xl font-semibold text-[#161D6F] text-center mt-5">Create Account</h1>
        <span className="text-[12px] text-[#292a2b] m-5">or Sign Up with</span> 
        <div className="social-icons">
        <Link to={'/'} className="media-icons"><i className="fa-brands fa-google-plus-g text-white p-4"></i></Link>
        <Link to={'/'} className="media-icons"><i className="fa-brands fa-apple text-white"></i></Link>
        <Link to={'/'} className="media-icons"><i className="fa-brands fa-facebook-f text-white"></i></Link>
        </div>
        <form className="w-full flex flex-col justify-center items-center">
          <div className="sm:flex justify-center items-center w-[85%] gap-5">
         <div className="mb-4 w-full sm:w-1/2 flex flex-col justify-center items-center">
            <label className="text-[#161D6F] text-[14px]">Username</label>
            <input type="text" placeholder="Enter your Username"  className="w-full py-3 px-5 input"/>
          </div>
         <div className="mb-4 w-full sm:w-1/2 flex flex-col justify-center items-center">
            <label className="text-[#161D6F] text-[14px]">Email</label>
            <input type="email" placeholder="Enter your E-mail" className="w-full py-3 px-5 input"/>
          </div>
        </div>

        <div className="sm:flex justify-center items-center  w-[85%] gap-5">
         <div className="mb-4 w-full sm:w-1/2 flex flex-col justify-center items-center">
            <label className="text-[#161D6F] text-[14px]">Password</label>
            <input type="password" placeholder="Enter your Password" id="password"className="w-full py-3 px-5 input"/>
          </div>

         <div className="mb-4 w-full sm:w-1/2 flex flex-col justify-center items-center">
            <label className="text-[#161D6F] text-[14px]">Confirm-Password</label>
            <input type="password" placeholder="Enter your Password"  id="confirm_password" className="w-full py-3 px-5 input"/>
            <span className="text-red-800 error" id="message"></span>
          </div>
        </div>
        <div className="sm:flex justify-center items-center w-[85%]">
          <button type="submit" className="btnn w-full">Sign Up</button>
        </div>
        </form>
        <button onClick={()=>toggleForms} className="mt-4 text-[#161D6F] hover:underline">Already have an account? <span className=" hover:underline">Login</span></button>
      </div>

    </div>
  </div>
</div>
    </div>
  //    <script>
  //    function toggleForms() {
  //      const container = document.querySelector('.rotate-container');
  //      container.classList.toggle('show-signup');
  //    }
 
  //    function checkPasswordMatch() {
  //           const password = document.getElementById('password').value;
  //           const confirmPassword = document.getElementById('confirm_password').value;
  //           const message = document.getElementById('message');
              
  //           if (password !== confirmPassword) {
  //               message.textContent = "Passwords do not match!";
  //               return false; // Prevent form submission
  //           } else {
  //               message.textContent = ""; // Clear the error message
  //               return true; // Allow form submission
  //             }
  //           }
        
  //           // Optional: Check passwords in real-time as the user types
  //           document.getElementById('confirm_password').addEventListener('input', function() {
  //             checkPasswordMatch();
  //           });
  //  </script>
  )
}

export default Login