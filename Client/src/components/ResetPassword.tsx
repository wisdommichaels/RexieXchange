import React, { useState } from "react";
import { useNavigate, useParams,} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import api from "../utils/api";
import { api_url } from "../utils/constants";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {id, token}= useParams();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post(`${api_url}/resetpassword/${id}/${token}`, 
        { password });
      if (response.status === 200) {
        toast.success("Password Changed successfully.");
        navigate("/login");
        } else {
        toast.error("Invalid email address. Please try again.");
        }
    } catch (error) {
      toast.error("Error sending reset email. Please try again.");
    }
  };
    // Hide and show password function
    const [passwordVisible, setPasswordVisible] = useState(false);
    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

  return (
    <>
    <div className="flex justify-center items-center w-screen h-screen">
    <form onSubmit={handleSubmit} className="flex-col justify-center items-center px-5  shadow-xl rounded-lg py-14 bg-[#668bc2] w-[85%] sm:w-[35%] ">
      <h1 className="font-bold mb-4 text-center text-[18px]">Reset Your Password</h1>
        {/* <p className="mb-2 text-[16px] text-center ">Enter your new password.</p> */}
        <label className=" mt-2 pl-4 ">Password</label>
      <div className="flex relative justify-center items-center">
      <input
        type={passwordVisible ? "text" : "password"}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your new password"
        className="input py-3 px-5 mt-1 shadow-none"
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
        <div className="flex justify-center items-center">
      <button 
      type="submit"
        className="btnn w-full"
      >
        Reset Password
        </button>
        </div>
    </form>
    <ToastContainer position="top-right"/>
    </div>
    </>
  );
};

export default ResetPassword;
