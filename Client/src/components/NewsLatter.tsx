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
    // set timeout for the loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the timeout value as needed

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
        
        if (errorMessage === 'Email already exists') {
          toast.error('This email is already subscribed!');
        } else {
          toast.error(errorMessage);
        }
      } else {
        toast.error('Subscription failed, please try again.');
      }
      console.error('Subscription failed please try again:', error);
    }
  };

  return (
    <>
   {/* <div className='w-full flex flex-col justify-center items-center'> */}
    <form  onSubmit={handleSubmit} className="subscribe w-full flex flex-col sm:flex-row sm:justify-center px-4 pt-2 sm:items-center sm:gap-  border-[#99A2A5]">
     <input 
     type="email" 
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     placeholder="Enter your Email"
     className="w-full input mt-0"/>
   
   {/* Add loading state */}
   <div className='w-[50%] flex sm:justify-center items-center mt-2'>   
   {isLoading ? (
            <>
            <div className="loader w-[20px] h-[20px] mx-auto rounded-full border-2 border-t-[#101035] animate-spin"></div>
            {/* <p className="text-[10px]">loading...</p> */}
            </>
          ) : (
    <button 
    type="submit" 
    className="bg-[#161D6F] w-[80%] sm:w-[80%] text-12 sm:text-14 flex justify-center items-center text-white py-3 mt- sm:mt-0 transition-transform duration-200 transform hover:scale-110 hover:shadow-lg hover:bg-[#131fac]"
    >
      Subscribe Now
    </button>
    )}
    </div>  
   </form>
    <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default NewsletterForm;
