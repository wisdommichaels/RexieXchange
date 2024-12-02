import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { toast, ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';
import Loader from "../components/Loader";


interface ErrorType {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string; 
  }
function LoginSignup() {
  // login function starts
  const { login, signup, checkAuth } = useAuthStore();  
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");  // New state for confirm password
  const [errors, setErrors] = useState<ErrorType>({ email: '', password: '',});
  

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateLoginForm()) return;

    setIsLoading(true);
    try {
      const success = await login(email, password);
      setTimeout(() => {
        setIsLoading(false);
        if (success) {
          checkAuth();
          navigate("/");
          toast.success("Login successful!", { position: "top-right" });
        } else {
          toast.error("Invalid Username or Password!", { position: "top-right" });
        }
      }, 3000);
    } catch (error) {
      console.log("Login error:", error);
      setIsLoading(false);    
    }
  };
  // logins funtion ends....


  // signup function starts
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!validateSignupForm()) return;
    
    setIsLoading(true);
    try {
      const success = await signup({username, email, password, confirmPassword});
      setTimeout(() => {
        setIsLoading(false);
        if (success) {
          checkAuth();
          navigate("/");
          toast.success("Signup successful!", { position: "top-right" });
        } else {
          toast.error("An error occurred, please try again!", { position: "top-right" });
        }
      }, 3000);
    } catch (error) {
      console.log("Signup error:", error);
      setIsLoading(false);
    }
  }

  
  //  Login error validation
  const validateLoginForm = () => {
    const newErrors: ErrorType = {};
  
    if (!email || !password) {
      toast.error('Please enter both email and password', { position: 'top-right' });
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Email format is invalid!', { position: 'top-right' });
      newErrors.email = 'Email format is invalid!';
      setErrors(newErrors);
      return false;

    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters!', { position: 'top-right' });
      newErrors.password = 'Password must be at least 6 characters!';
      setErrors(newErrors);
      return false;
    }
    return true;
  };
// Login error validation ends.... 




  // Hide and show password function
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  // Hide and show password function ends....


  // rotate form funtion
 // rotate form function
const toggleForms = () => {
  const container = document.querySelector('.rotate-container') as HTMLElement | null;
  if (container) {
    container.classList.toggle('show-signup');
    // Change the route based on the current form
    // if (container.classList.contains('show-signup')) {
    //   navigate('/signup');
    // } else {
    //   navigate('/login');
    // }
  }
};

  // rotate form funtion ends....


  return (
    <div>
    <div className="bg-[#101035]">
      <div className="login-div">
        {
        isLoading && <Loader/>
      }

        <div className="photo hidden sm:flex">
          <img src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740810/LOGINPHOTO_kx9dwl.png" alt=""/>
        </div> 

        <div className="w-full sm:w-1/2 m-auto flex items-center justify-center">
          <div className="rotate-container w-full sm:w-1/2 form-container bg-[#C9D8F0] shadow-lg flex justify-center items-center">
          {/* <div className="rotate-container sm:bg-none bg-[url('https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740810/LOGINPHOTO_kx9dwl.png')] bg-cover bg-center w-full sm:w-1/2 form-container bg-[#DDE4EF] shadow-lg flex justify-center items-center"> */}
          {/* <div className="absolute inset-0 bg-[#161D6F]  bg-opacity-40 backdrop-blur-sm"></div> */}
            <div className="login relative flex flex-col justify-center items-center space-y-4 w-full">
              <h1 className="sm:text-2xl text-xl  font-semibold text-[#161D6F] text-center pt-7">Hello, Welcome Back to GiftHub</h1>
              <h2 className="text-[16px] text-[#161D6F] pb-3">Please enter your login details to continue!</h2>
              {/* <span className="text-[12px] text-[#292a2b]">or Login with</span> */}
              {/* <div className="social-icons">
                <Link to={'/'} className="media-icons"><i className="fa-brands fa-google-plus-g"></i></Link>
                <Link to={'/'} className="media-icons"><i className="fa-brands fa-apple text-white"></i></Link>
                <Link to={'/'} className="media-icons"><i className="fa-brands fa-facebook-f text-white"></i></Link>
              </div> */}
              <form onSubmit={handleLogin} className="w-full flex flex-col justify-center items-center">
                <div className="w-[85%] sm:w-[75%] flex flex-col justify-center items-center">
                  <label className="text-[#161D6F] text-[14px]">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your E-mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className={`w-full py-3 px-5 inpute ${errors.email ? 'border-red-500' : ''}`}
                  />
             
                </div>
                <div className="w-[85%] sm:w-[75%] flex flex-col justify-center items-center">
                  <label className="text-[#161D6F] text-[14px] mt-2">Password</label>
                  <div className="relative w-full">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      className={`focus:outline-none inpute w-full py-3 px-5 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="Enter your password" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div
                      className="absolute inset-y-1 right-0 pr-6 flex items-center cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? (
                        <img className='w-5 h-5' src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1731338477/showpasswordicon_ifwaqc.png" alt="" />
                      ) : (
                        <img className='w-5 h-5' src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1731338477/hidepasswordicon_vyhpyw.png" alt="" />
                      )}
                    </div>
                  </div>
                </div>
                {/* {error && <p className="text-red-500">{error}</p>} */}
                <Link to={"/forgotpassword"} className="text-[#161D6F] text-[12px] pt-3 hover:underline">
                Forgot your password?
                </Link>
                <button type="submit" className="btnn w-[85%] sm:w-[75%]">Login</button>
                <span className="text-[12px] text-[#161D6F] font-bold ">OR</span>
                <div className=" flex justify-center items-center btnnn w-[85%] sm:w-[75%] border-2 border-[#161D6F] hover:border-[#DDE4EF]">
                <img className="w-8 h-8" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1730212714/7123025_logo_google_g_icon_x1edae.svg" alt="" />
                <div>LOGIN WITH GOOGLE</div>
                </div>
              </form>
              <button onClick={toggleForms} className="mt-4 pb-5 text-[#161D6F] hover:underline">Don't have an account? <span className="font-bold">Sign Up</span></button>
            </div>
            
             <div className="signup absolute inset-0 flex flex-col justify-center items-center space-y-4">
             <div className=" flex flex-col justify-center items-center space-y-4 w-full">
              <h1 className="text-2xl font-semibold text-[#161D6F] text-center mt-5">Create Account</h1>
              <h2 className="text-12px text-[#161D6F] pb-3">Please enter your details bellow to get started!</h2>
              {/* <span className="text-[12px] text-[#292a2b] m-5">or Sign Up with</span>  */}
              {/* <div className="social-icons">
                <Link to={'/'} className="media-icons"><i className="fa-brands fa-google-plus-g text-white p-4"></i></Link>
                <Link to={'/'} className="media-icons"><i className="fa-brands fa-apple text-white"></i></Link>
                <Link to={'/'} className="media-icons"><i className="fa-brands fa-facebook-f text-white"></i></Link>
              </div> */}
              <form onSubmit={handleSignup}  className="w-full flex flex-col justify-center items-center">
                <div className="sm:flex justify-center items-center gap-5 w-[90%]">
                  <div className="mb-4 w-full sm:w-1/2 flex flex-col justify-center items-center">
                    <label className="text-[#161D6F] text-[14px]">Username</label>
                    <input 
                      type="text" 
                      placeholder="Enter your Username"  
                      className={`w-full py-3 px-5 inpute ${errors.username ? 'border-red-500' : ''}`}
                      value={username}
                      onChange={(e) => setUsername( e.target.value)}
                    />
                  </div>
                  <div className="mb-4 w-full sm:w-1/2 flex flex-col justify-center items-center">
                    <label className="text-[#161D6F] text-[14px]">Email</label>
                    <input 
                      type="email" 
                      placeholder="Enter your E-mail" 
                      className={`w-full py-3 px-5 inpute ${errors.email ? 'border-red-500' : ''}`} 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:flex justify-center items-center gap-5 w-[90%]">
                  <div className="mb-4 w-full sm:w-1/2 flex flex-col justify-center items-center">
                    <label className="text-[#161D6F] text-[14px]">Password</label>
                    <div className="relative w-full">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className={`focus:outline-none inpute w-full py-3 px-5 ${errors.password ? 'border-red-500' : ''}`}
                        placeholder="Enter your password" 
                        value={password}
                        onChange={(e) => setPassword( e.target.value)}
                      />
                      <div
                        className="absolute inset-y-1 right-0 pr-6 flex items-center cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <img className='w-5 h-5' src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1731338477/showpasswordicon_ifwaqc.png" alt="" />
                        ) : (
                          <img className='w-5 h-5' src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1731338477/hidepasswordicon_vyhpyw.png" alt="" />
                        )}
                      </div>
                    </div>
                   
                  </div>

                  <div className="mb-4 w-full sm:w-1/2 flex flex-col justify-center items-center">
                    <label className="text-[#161D6F] text-[14px]">Confirm Password</label>
                    <div className="relative w-full">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        className={`focus:outline-none inpute w-full py-3 px-5 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                        placeholder="Confirm your password" 
                        value={confirmPassword}
                      onChange={(e) => setConfirmPassword( e.target.value)}
                      />
                      <div
                        className="absolute inset-y-1 right-0 pr-6 flex items-center cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <img className='w-5 h-5' src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1731338477/showpasswordicon_ifwaqc.png" alt="" />
                        ) : (
                          <img className='w-5 h-5' src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1731338477/hidepasswordicon_vyhpyw.png" alt="" />
                        )}
                      </div>
                    </div>
    
                  </div>
                </div>

                <div className={`sm:flex justify-center items-center w-[90%] ${isLoading && "opacity-25"}`}>
                  <button type="submit" className="btnn w-full">Sign Up</button>
                </div>
                <span className="text-[12px] py-1 font-bold text-[#161D6F]">OR</span>
                <div className={`sm:flex justify-center items-center w-[90%]`}>
                  <button className="btnnn w-full flex justify-center items-center  border-2 border-[#161D6F] hover:border-[#DDE4EF]">
                    <div className="flex justify-center items-center">
                    <img className="w-8 h-8" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1730212714/7123025_logo_google_g_icon_x1edae.svg" alt="" />
                    Sign Up with Google
                    </div>
                  </button>
                </div>
              </form>
              {/* <button onClick={toggleForms} className="mt-4 text-[#161D6F] hover:underline">Already have an account? <span className=" hover:underline font-bold">Login</span></button> */}
            </div>
            <button onClick={toggleForms} className="mt-4 text-[#161D6F] hover:underline">Already have an account? <span className=" hover:underline font-bold">Login</span></button>
            </div>
    </div>

<ToastContainer position="top-right" autoClose={3000}/>
  </div>
</div>

</div>
</div>
  )
}

export default LoginSignup
