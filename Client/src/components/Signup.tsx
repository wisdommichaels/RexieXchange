// import { Link } from "react-router-dom"
// import { useState } from "react"
// const Signup = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");  // New state for confirm password
//     interface ErrorType {
//         email?: string;
//         password?: string;
//         confirmPassword?: string;  // Error for confirm password
//         username?: string;
//       }
//       const [errors, setErrors] = useState<ErrorType>({});
    
//       const validateForm = () => {
//         const newErrors: ErrorType = {};
    
//         if (!email) {
//           newErrors.email = 'Email is required';
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//           newErrors.email = 'Email format is invalid';
//         }
    
//         if (!password) {
//           newErrors.password = 'Password is required';
//         } else if (password.length < 6) {
//           newErrors.password = 'Password must be at least 6 characters';
//         }
    
//         if (password && confirmPassword && password !== confirmPassword) {
//           newErrors.confirmPassword = 'Passwords do not match';
//         }
    
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//       };

//       const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         if (!validateForm()) return;
    

//       };

//       const [passwordVisible, setPasswordVisible] = useState(false);
//       const togglePasswordVisibility = () => {
//         setPasswordVisible(!passwordVisible);
//       };

//       const toggleForms = () => {
//         const container = document.querySelector('.rotate-container') as HTMLElement | null;
//         if (container) {
//           container.classList.toggle('show-signup');
//         }
//       };

//   return (
//     <div>
//         <div className="signup absolute inset-0 flex flex-col justify-center items-center space-y-4">
//               <h1 className="text-2xl font-semibold text-[#161D6F] text-center mt-5">Create Account</h1>
//               <span className="text-[12px] text-[#292a2b] m-5">or Sign Up with</span> 
//               <div className="social-icons">
//                 <Link to={'/'} className="media-icons"><i className="fa-brands fa-google-plus-g text-white p-4"></i></Link>
//                 <Link to={'/'} className="media-icons"><i className="fa-brands fa-apple text-white"></i></Link>
//                 <Link to={'/'} className="media-icons"><i className="fa-brands fa-facebook-f text-white"></i></Link>
//               </div>
//               <form onSubmit={handleSignup }  className="w-full flex flex-col justify-center items-center">
//                 <div className="sm:flex justify-center items-center w-[85%] gap-5">
//                   <div className="mb-4 w-full sm:w-1/2 flex flex-col justify-center items-center">
//                     <label className="text-[#161D6F] text-[14px]">Username</label>
//                     <input 
//                       type="text" 
//                       placeholder="Enter your Username"  
//                       className={`w-full py-3 px-5 inpute ${errors.username ? 'border-red-500' : ''}`}
//                     />
//                   </div>
//                   <div className="mb-4 w-full sm:w-1/2 flex flex-col justify-center items-center">
//                     <label className="text-[#161D6F] text-[14px]">Email</label>
//                     <input 
//                       type="email" 
//                       placeholder="Enter your E-mail" 
//                       className={`w-full py-3 px-5 inpute ${errors.email ? 'border-red-500' : ''}`} 
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                     {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
//                   </div>
//                 </div>

//                 <div className="sm:flex justify-center items-center  w-[85%] gap-5">
//                   <div className="mb-4 w-full sm:w-1/2 flex flex-col justify-center items-center">
//                     <label className="text-[#161D6F] text-[14px]">Password</label>
//                     <div className="relative w-full">
//                       <input
//                         type={passwordVisible ? "text" : "password"}
//                         className={`focus:outline-none inpute w-full py-3 px-8 ${errors.password ? 'border-red-500' : ''}`}
//                         placeholder="Enter your password" 
//                         onChange={(e) => setPassword(e.target.value)}
//                       />
//                       <div
//                         className="absolute inset-y-1 right-0 pr-6 flex items-center cursor-pointer"
//                         onClick={togglePasswordVisibility}
//                       >
//                         {passwordVisible ? (
//                           <img className='w-5 h-5' src="src/assets/showpasswordicon.png" alt="" />
//                         ) : (
//                           <img className='w-5 h-5' src="src/assets/hidepasswordicon.png" alt="" />
//                         )}
//                       </div>
//                     </div>
//                     {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
//                   </div>

//                   <div className="mb-4 w-full sm:w-1/2 flex flex-col justify-center items-center">
//                     <label className="text-[#161D6F] text-[14px]">Confirm Password</label>
//                     <div className="relative w-full">
//                       <input
//                         type={passwordVisible ? "text" : "password"}
//                         className={`focus:outline-none inpute w-full py-3 px-8 ${errors.confirmPassword ? 'border-red-500' : ''}`}
//                         placeholder="Confirm your password" 
//                         onChange={(e) => setConfirmPassword(e.target.value)}
//                       />
//                       <div
//                         className="absolute inset-y-1 right-0 pr-4 flex items-center cursor-pointer"
//                         onClick={togglePasswordVisibility}
//                       >
//                         {passwordVisible ? (
//                           <img className='w-5 h-5' src="src/assets/showpasswordicon.png" alt="" />
//                         ) : (
//                           <img className='w-5 h-5' src="src/assets/hidepasswordicon.png" alt="" />
//                         )}
//                       </div>
//                     </div>
//                     {errors.confirmPassword && <p className="mt-1  text-sm text-red-500">{errors.confirmPassword}</p>}
//                   </div>
//                 </div>

//                 <div className="sm:flex justify-center items-center w-[85%]">
//                   <button type="submit" className="btnn w-full">Sign Up</button>
//                 </div>
//               </form>
//               <button onClick={toggleForms} className="mt-4 text-[#161D6F] hover:underline">Already have an account? <span className=" hover:underline">Login</span></button>
//             </div>
//     </div>
//   )
// }

// export default Signup