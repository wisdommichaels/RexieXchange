import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { api_url } from '../utils/constants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthStore } from "../store/authStore";
import api from '../utils/api';
import FooterO from './FooterO';
import Mobilefooter from './Mobilefooter';

const CustomerReviewForm: React.FC = () => {
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

  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>('');
  const { user } = useAuthStore();
  const navigate = useNavigate(); // Initialize useNavigate
  const [isLoading, setIsLoading] = useState(false); // Add loading state
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
      setIsLoading(true);
      const response = await api.post(`${api_url}/review`, {
        rating,
        review,
      });
      setIsLoading(false);
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
      <nav className="bg-[#161D6F] shadow-lg flex sm:gap-5 gap-[70px] items-center py-3">
        <button
          onClick={handleGoBack}
          className="back-button sm:hover:bg-[#668bc2] sm:rounded-2xl sm:px-4 sm:py-1 flex justify-center sm:ml-6 ml-2 items-center gap-2 text-[11px] p-3 "
        >
          <img src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1733961385/arrow-_xye6xf.png" alt="" />
        </button>

        <h2 className="sm:text-[20px] text-[18px] text-white text-center">
          Customer Review
        </h2>
      </nav>
      <div className="w-full h-screen flex-col items-center sm:p-8 p-4 bg-gradient-to-r from-[#a2bae3] to-[#668bc2] overflow-x-hidden">
        <h2 className="text-3xl text-[#161D6F] py-2">We Value Your Feedback!</h2>
        <p className='sm:text-xl'>
          Thank you for visiting <strong className='text-[#161D6F]'>RexieXchange!</strong>  Share your thoughts about our platform  so far below. <br />
          Was it easy to use? Let us know! Your input is greatly appreciated, and we look forward to serving you better.
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
            {isLoading ? (
              <>
              <div className="loader w-[20px] h-[20px] mx-auto rounded-full border-2 border-t-white animate-spin"></div>
              {/* <p className="text-[10px]">loading...</p> */}
              </>
            ) : (
            <p>Submit Review</p>
          )}
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
      <div className="hidden sm:block">
        <FooterO />
      </div>
      <Mobilefooter />
    </>
  );
};

export default CustomerReviewForm;
