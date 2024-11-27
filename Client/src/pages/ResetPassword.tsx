import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import api from "../utils/api";
import { api_url } from "../utils/constants";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post(`${api_url}/forgotpassword/reset-password`, {
        token,
        newPassword: password,
      });
      toast.success(response.data.message);
    } catch (error) {
        toast.error("Error resetting password. Please try again.");
    }
  };

  return (
    <div className="h-screen w-screen flex-col justify-center items-center pt-20">
      <div >
      <h2 className="text-3xl text-center mb-2">Reset Your Password</h2>
      </div>
    <form className="flex justify-center items-center gap-5" onSubmit={handleResetPassword}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your new password"
        className="border-2 border-gray-300 p-2 m-2 rounded-lg"
      />
      <button className="bg-[#161D6F] py-2 px-4 m-2 text-white rounded-lg" type="submit">Reset Password</button>
    </form>
    <ToastContainer position="top-right"/>
    </div>
  );
};

export default ResetPassword;
