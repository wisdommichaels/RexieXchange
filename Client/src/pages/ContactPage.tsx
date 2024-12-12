import  { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore";
import { toast, ToastContainer } from "react-toastify";
import api from "../utils/api";
import { api_url } from "../utils/constants";
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import FooterO from "../components/FooterO";
import Mobilefooter from "../components/Mobilefooter";


const ContactPage = () => {
  const navigate = useNavigate(); //
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  useEffect(scrollToTop,[])

  const handleGoBack = () => {
    navigate(-1); // Navigate 1 step back in history
  };

    // handle contact form submission
    const [message, setMessage] = useState("");
    const {user} = useAuthStore();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent): Promise<void> => {
        e.preventDefault();
        // Form validation
        if (!message) {
            toast.error("Please Message is required!");
            return;
        }
        // Send the message to the API
        try {
            // Send the message to the API
            const Message= `${message}\n\nFrom: ${user?.username || "Anonymous"} \n\nEmail: ${user?.email || "No email provided"})`;
            setLoading(true);
            const response = await api.post(`${api_url}/contacts`, {
              message: Message,
            });
            response.data;
            setLoading(false);
            toast.success(`Hello ${user?.username} your message was sent successfully!`);

             // Reset the form
     
        setMessage("");
      

        } catch (error) {
            // TypeScript error handling for Axios errors
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.message || "Error sending message";
                toast.error(errorMessage);
            } else {
                toast.error("An unexpected error occurred");
            }
            console.error("Error sending message:", error);
        }
       
        };

  return (
    <div>
         <nav className="bg-[#161D6F] shadow-lg flex sm:gap-3 gap-[90px] items-center py-3">
        <button
          onClick={handleGoBack}
          className="back-button sm:rounded-2xl sm:px-4 sm:py-1 flex justify-center sm:ml-6 ml-2 items-center gap-2 text-[11px] p-3 "
        >
        <img src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1733961385/arrow-_xye6xf.png" alt="" />
        </button>

        <h2 className="sm:text-[20px] text-[18px] pl-5 text-white text-center">
          Contact
        </h2>
      </nav>
    <section className=" mx-auto p-4 my-8">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#161D6F]">Contact Us</h1>
      <p className="text-xl text-black mb-4 leading-relaxed text-center">
        We value your feedback and inquiries. Whether you have questions, <br />suggestions, or need assistance with our services, feel free to reach out to us.
      </p>
      <div className="bg-[#7798CB] shadow-lg rounded-lg p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <div>
            <label htmlFor="email" className="block text-lg font-medium text-[#161D6F]">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" inpute p-4"
              placeholder="Enter your email"
            />
          </div> */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-[#161D6F]">Your Message</label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="inpute p-4"
              placeholder="Enter your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn w-full bg-[#161D6F] text-white font-bold py-4"
          >
            {loading ? (
            <>
            <div className="loader w-[20px] h-[20px] mx-auto rounded-full border-2 border-t-white animate-spin"></div>
            <p className="text-[10px]">loading...</p>
            </>
          ) : (
           <p>Send Message</p> 
          )}
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
      <p className="text-center text-black mt-4">
        Or reach us directly at: <a href="mailto:rexiexchange@gmail.com" className="text-blue-500 hover:underline">rexiexchange@gmail.com</a>
      </p>
    </section>
    <Mobilefooter />
    <div className="sm:block hidden">
      <FooterO />
    </div>
    </div>
  );
};

export default ContactPage;
