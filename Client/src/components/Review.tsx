import React, { useState } from 'react';
import axios from 'axios';
import { api_url } from '../utils/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthStore } from "../store/authStore"
import api from '../utils/api';

const CustomerReviewForm: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>('');
  const { user } = useAuthStore()

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    // Form validation
    if ( !review) {
      toast.error('Please enter a review');
      return;
    }
    if (rating < 1 || rating > 5) {
      toast.error('Rating must be between 1 and 5!');
      return;
    }

    // Send the review to the API
    try {
      const response = await api.post(`${api_url}/review`, {
        rating,
        review,
      });
      response.data;
      toast.success(`Hello ${user?.username} your Review has been submitted successfully!`);
      
      // Clear form after submission
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
   
      <div className="w-[95%] mx-auto sm:mx-0 sm:w-[59%] mb-3 flex-col justify-self-end sm:mr-7 p-8 shadow-xl rounded-lg bg-gradient-to-r from-[#a2bae3] to-[#668bc2]">
        <h2 className="text-2xl text-center mb-4 text-[#161D6F]">LEAVE A REVIEW</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              Comment
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
