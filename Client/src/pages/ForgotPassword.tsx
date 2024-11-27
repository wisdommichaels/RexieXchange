import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import api from "../utils/api";
import { api_url } from "../utils/constants";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

//   form validation
if (email === "") {
    toast.error("Please enter your email.");
    return;
};

if (!email.includes("@") || !email.includes(".")) {
    toast.error("Please enter a valid email address.");
    return;
}

  // handle form submission

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await api.post(`${api_url}/forgotpassword`, 
        { email });
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Error sending reset email. Please try again.");
    }
  };

  return (
    <div>
    <form onSubmit={handleForgotPassword}>
      <h2>Forgot Password? enter your email address to recover your password</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <button type="submit">Send Reset Link</button>
    </form>
    <ToastContainer position="top-right"/>
    </div>
  );
};

export default ForgotPassword;
