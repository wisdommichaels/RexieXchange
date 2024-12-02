import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { api_url } from '../utils/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthStore } from "../store/authStore";
import api from '../utils/api';
import { Link } from 'react-router-dom';

const CustomerReviewForm: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>('');
  const { user } = useAuthStore();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    // Form validation
    if (!review || !rating ) {
      toast.error(`All fields are required`);
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
      toast.success(`Hello ${user?.username}, your review has been submitted successfully!`);

      // Clear form after submission
      setRating(0);
      setReview('');

      // Navigate back to home page
      setTimeout(() => {
        navigate('/'); // Redirects to the home page
      }, 3000); // Delay for user to see the success toast
    } catch (error) {
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
    <>
      <nav className="bg-[#161D6F] shadow-lg flex sm:gap-5 gap-[90px] items-center py-3">
        <Link
          to={"/"}
          className="back-button sm:rounded-2xl sm:px-4 sm:py-1 flex justify-center sm:ml-6 ml-2 items-center gap-2 text-[11px] p-3 "
        >
          <img src="src/assets/arrow-.png" alt="" />
        </Link>

        <h2 className="sm:text-[20px] text-[18px] text-white text-center">
          Customer Review
        </h2>
      </nav>
      <div className="w-full h-screen flex-col items-center p-8 bg-gradient-to-r from-[#a2bae3] to-[#668bc2] overflow-x-hidden">
        <h2 className="text-3xl text-[#161D6F]">We Value Your Feedback!</h2>
        <p className='text-xl'>
          Thank you for visiting [Your Website Name]! Share your thoughts about our platform below. <br />
          Was it easy to use? Let us know! Your input is greatly appreciated, <br />
          and we look forward to serving you better.
        </p>
        <h2 className="text-2xl text-[#161D6F] mt-3 mb-1">Leave a Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4 border-2 border-gray-200 p-5">
          <div>
            <label htmlFor="rating" className="block text-[#161D6F] text-xl">
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
            <label htmlFor="review" className="block text-[#161D6F] font-medium text-xl">
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
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    </>
  );
};

export default CustomerReviewForm;
