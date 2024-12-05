import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import api from "../utils/api";
import { api_url } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  useEffect(scrollToTop,[])
  
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  // handle form submission

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post(`${api_url}/forgotpassword`, 
        { email });
      if (response.status === 200) {
        toast.success("Reset email sent successfully.");
        navigate("/login");
        } else {
        toast.error("Invalid email address. Please try again.");
        }
    } catch (error) {
      toast.error("Error sending reset email. Please try again.");
    }
  };

  return (
    <>
    <div className="flex justify-center items-center w-screen h-screen">
    <form onSubmit={handleSubmit} className="flex-col justify-center items-center px-5  shadow-xl rounded-lg py-14 bg-[#668bc2] w-[85%] sm:w-fit ">
      <h1 className="font-bold mb-1 text-center text-[18px]">Forgot your Password?</h1>
        <p className="mb-2 text-[16px] text-center ">Enter your email address and we'll send you a link to reset your password.</p>
      <div className="flex-col justify-center items-center">
        <label className=" mt-2 pl-4 ">Email</label>
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="input py-3 px-5 mt-1 shadow-none"
      />
      </div>
        <div className="flex justify-center items-center">
      <button 
      type="submit"
        className="btnn w-full"
      >
        Send Reset Link
        </button>
        </div>
    </form>
    </div>
    <ToastContainer position="top-right"/>
    </>
  );
};

export default ForgotPassword;
