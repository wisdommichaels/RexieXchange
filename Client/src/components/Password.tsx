// import { useState } from "react";

// function PasswordForm() {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200">
//       <form className="bg-white p-6 rounded-lg shadow-md">
//         <div className="mb-4">
//           <div className="relative">
//             <input
//               type={passwordVisible ? "text" : "password"}
//               id="password"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               placeholder="Enter your password"
//             />
//             <div
//               className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
//               onClick={togglePasswordVisibility}
//             >
//               {passwordVisible ? (
//                <img className='w-5 h-5' src="src\assets\showpasswordicon.png" alt="" />
//               ) : (
//                 <img className='w-5 h-5' src="src\assets\hidepasswordicon.png" alt="" />
//               )}
//             </div>
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default PasswordForm;
