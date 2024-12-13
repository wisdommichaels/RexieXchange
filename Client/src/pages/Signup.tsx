import React, { useState } from 'react'
// import useSignup from "../hooks/useSignup";
import { toast, ToastContainer } from 'react-toastify';
// import Loader from '../components/Loader';
import { useAuthStore } from '../store/authStore';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

function Signup () {
  const {signup, checkAuth} = useAuthStore();

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");  // New state for confirm password
  const [isLoading, setIsLoading] = useState(false); 
  
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({username, email, password, confirmPassword});
    if (!validateSignupForm()) return;
    
    
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
  // const {signup, loading} = useSignup()
  // // const [isLoading, setIsLoading] = useState(false);
  // const [inputs, setInputs] = useState({
    //     username: "",
    //     email: "",
    //     password:"",
    //     confirmPassword:"",
    //     profilePic: ""
    //   })
    // const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
      //   e.preventDefault();
      //   if (!validateSignupForm()) return;
      
      //   // setIsLoading(true);
      //   try {
        //     await signup(inputs);
        //     const checkAuth = localStorage.getItem('token');
        //     setTimeout(() => {
          //       // setIsLoading(false);
          //       toast.success("Signup successful!", { position: "top-right" });
          //       setInputs({
            //         username: "",
            //         email: "",
            //         password:"",
            //         confirmPassword:"",
            //         profilePic: ""
            //       });
            //     }, 3000);
            //     return true;
            //     // reset form fields
            //   } catch (error) {
              //     console.log("Signup error:", error);
              //     // setIsLoading(false);
             
          //   }
          // };
          // signup functions ends....
          
          
          
          // Signup error validation
          // error interface
          const [errors, setErrors] = useState<ErrorType>({username:'', email: '', password: '', confirmPassword: ''});
          interface ErrorType {
        username?: string;
        email?: string;
        password?: string;
        confirmPassword?: string; 
      }
    
      const validateSignupForm = () => {
        const newErrors: ErrorType = {};
    
        if (!username || !email || !password || !confirmPassword ) {
          toast.error('Please fill in all fields!', { position: 'top-right' });
          return false;
        }
    
    
        if (!/\S+@\S+\.\S+/.test(email)) {
          toast.error('Email format is invalid!', { position: 'top-right' });
          newErrors.email = 'Email format is invalid!';
          setErrors(newErrors);
          return false;
    
        }
    
        if (password.length < 6) {
          toast.error('Password must be at least 8 characters!', { position: 'top-right' });
          newErrors.password = 'Password must be at least 8 characters!';
          setErrors(newErrors);
          return false;
        }
    
        if (password !== confirmPassword) {
          toast.error('Passwords do not match!', { position: 'top-right' });
          newErrors.confirmPassword = 'Passwords do not match';
          setErrors(newErrors);
          return false;
        }
    
        if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)) {
          toast.error('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character!', { position: 'top-right' });
          return false;
        }
    
    
        if (password && confirmPassword && password !== confirmPassword) {
          toast.error('Passwords do not match!', { position: 'top-right' });
          newErrors.confirmPassword = 'Passwords do not match';
          setErrors(newErrors);
          return false;
        }
        
        return true;
      };
      // Signup error validation ends....

       // Hide and show password function
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  // Hide and show password function ends....

  // const toggleForms = () => {
  //   const container = document.querySelector('.rotate-container') as HTMLElement | null;
  //   if (container) {
  //     container.classList.toggle('show-signup');
  //     // Change the route based on the current form
  //     // if (container.classList.contains('show-signup')) {
  //     //   navigate('/signup');
  //     // } else {
  //     //   navigate('/login');
  //     // }
  //   }
  // };
  
  return (
    <>
               {
                isLoading && <Loader/>

                }
                 <div className="flex justify-center items-center">
                <div className="photo hidden sm:flex">
          <img src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1734046844/anitaw_f0inmb.webp" alt=""/>
        </div>
                <div className=" flex flex-col justify-center items-center space-y-4 sm:w-1/2 w-full h-screen sm:mt-0">
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
                      onChange={(e) => setUsername( e.target.value.trim())}
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
                        type={confirmPasswordVisible ? "text" : "password"}
                        className={`focus:outline-none inpute w-full py-3 px-5 ${errors.confirmPassword ? 'border-red-500' : ''}`}
                        placeholder="Confirm your password" 
                        value={confirmPassword}
                      onChange={(e) => setConfirmPassword( e.target.value)}
                      />
                      <div
                        className="absolute inset-y-1 right-0 pr-6 flex items-center cursor-pointer"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        {confirmPasswordVisible ? (
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
              <Link
                  to={"/Login"} className="mt-4 text-[#161D6F] hover:underline">Already have an account? <span className=" hover:underline font-bold">Login</span>
                </Link>
            </div>
            </div>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />
            </>
  )
}

export default Signup