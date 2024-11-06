import React, { useState } from 'react';
import axios from 'axios';
import { api_url } from '../utils/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthStore } from "../store/authStore"

const CustomerReviewForm: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>('');
  const { user } = useAuthStore()

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    // Form validation
    if (!name || !email || !review) {
      toast.error('All fields are required!');
      return;
    }
    if (rating < 1 || rating > 5) {
      toast.error('Rating must be between 1 and 5!');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Invalid email format!');
      return;
    }

    // Send the review to the API
    try {
      const response = await axios.post(`${api_url}/review`, {
        name,
        email,
        rating,
        review,
      });
      response.data;
      toast.success(`Hello ${user?.username} your Review has been submitted successfully!`);
      
      // Clear form after submission
      setName('');
      setEmail('');
      setRating(0);
      setReview('');
    } catch (error) {
      // TypeScript error handling for Axios errors
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || 'Error submitting review';
        toast.error(errorMessage);
      } else {
        toast.error('An unexpected error occurred');
      }
      console.error('Error submitting review:', error);
    }
  };

  return (
   
      <div className="w-full sm:w-[59%] mb-3 flex-col justify-self-end mr-7 p-8 shadow-xl rounded-lg bg-gradient-to-r from-[#a2bae3] to-[#668bc2]">
        <h2 className="text-2xl text-center mb-4 text-[#161D6F]">LEAVE A REVIEW</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-[#161D6F] font-medium pl-5">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 py-3 px-4 w-full inpute"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-[#161D6F] font-medium  pl-5">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 py-3 px-4 w-full inpute"
              required
            />
          </div>
          <div>
            <label htmlFor="rating" className="block text-[#161D6F] font-medium  pl-5">
              Rating
            </label>
            <div className="flex gap-2 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star}>
                  <input
                    type="radio"
                    name="rating"
                    value={star}
                    checked={rating === star}
                    onChange={() => setRating(star)}
                    className="hidden"
                  />
                  <span
                    className={`cursor-pointer text-[25px] ${
                      star <= rating ? 'text-yellow-500' : 'text-white'
                    }`}
                  >
                    ★
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="review" className="block text-[#161D6F] font-medium  pl-5">
              Review
            </label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md inpute"
              rows={4}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full btnn"
          >
            Submit Review
          </button>
        </form>
        <ToastContainer position="top-center" autoClose={4000} />
      </div>
  
  );
};

export default CustomerReviewForm;
