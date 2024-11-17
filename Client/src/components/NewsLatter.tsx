import React, { useState } from 'react';
import api from '../utils/api';
import { api_url } from '../utils/constants';
import { toast } from 'react-toastify';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    // Validate email format
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address.');
      return;
    }
    // check already existing email address
    const existingEmail = localStorage.getItem('email');
    if (existingEmail === email) {
      toast.error('Email already subscribed');
      return;
    }

    try {
      const response = await api.post(`${api_url}/emails`, {
        email,
      });
     response.data;
      
      if (response.status === 200) {
        toast.success('Subscription successful!');
      } else {
        toast.error( 'Subscription failed. Try again later.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <form  onSubmit={handleSubmit} className="subscribe w-full flex justify-center items-center gap-3 sm:gap-0  border-[#99A2A5]">
     <input 
     className="w-1/2 input" 
     type="email" 
     value={email}
     placeholder="Enter your Email"
     onChange={(e) => setEmail(e.target.value)}/>
   
    <button type="submit" className=" bg-[#161D6F] sm:px-5 sm:py-3 px-2 py-3 rounded-lg text- mt-5 sm:ml-6 transition-transform duration-200 transform hover:scale-110 hover:shadow-lg hover:bg-[#131fac] text-white text-center">Subscribe Now</button>
   </form>
  );
};

export default NewsletterForm;
