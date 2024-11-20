import { useState } from 'react';
import api from '../utils/api';
import { api_url } from '../utils/constants';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add loading state


  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    // Validate email format
    if (!email) {
      toast.error('Please enter a valid email address.');
      return;
    }
    // to chect if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    // check already existing email address
    // const existingEmail = localStorage.getItem('email');
    // if (existingEmail === email) {
    //   toast.error('Email already subscribed');
    //   return;
    // }

    try {
      setIsLoading(true);
      const response = await api.post(`${api_url}/email`, {
        email,
      });
      setIsLoading(false);
     response.data;
     toast.success(`Hello, Thank you for subscribing to our Newsletter!`);

    //  Reset the form
    setEmail('');

    // typeScript error handling for Axios errors
    } catch (error) {
      setIsLoading(false);
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || 'Subscription failed please try again';
        toast.error(errorMessage);
      } else {
        toast.error('Subscription failed please try again');
      }
      console.error('Subscription failed please try again:', error);
    }
  };

  return (
    <div className='w-full flex justify-center items-center'>
    <form  onSubmit={handleSubmit} className="subscribe w-full flex justify-center items-center gap-3 sm:gap-0  border-[#99A2A5]">
     <input 
     type="email" 
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     placeholder="Enter your Email"
     className="w-1/2 input"/>
   
   {/* Add loading state */}
    <button type="submit" className=" bg-[#161D6F] sm:px-5 sm:py-3 px-2 py-3 rounded-lg text- mt-5 sm:ml-6 transition-transform duration-200 transform hover:scale-110 hover:shadow-lg hover:bg-[#131fac] text-white text-center">Subscribe Now</button>
   </form>
    <ToastContainer position="top-right" autoClose={3000} />
   </div>
  );
};

export default NewsletterForm;
