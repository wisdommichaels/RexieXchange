import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Footer from "../components/Footer";
import Username from "../components/Username";
import Mobilefooter from "../components/Mobilefooter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api_url } from '../utils/constants';

const Sell: React.FC = () => {
  // State variables for form inputs
  const [amount, setAmount] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardImage, setCardImage] = useState<File | null>(null);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check all fields are filled
    if (!amount || !category || !country || !cardNumber || !cardImage) {
      toast.error("All fields are required!");
      return;
    }

    // Create form data to send file
    const formData = new FormData();
    formData.append("amount", amount);
    formData.append("cardname", category);
    formData.append("countrycode", country);
    formData.append("cardnumber", cardNumber);
    formData.append("cardimage", cardImage);

    try {
      // Replace `api_url` with your backend API endpoint
      const response = await axios.post(`${api_url}/transaction`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 201) {
        toast.success("Transaction submitted successfully!");
        // Reset form fields
        setAmount('');
        setCategory('');
        setCountry('');
        setCardNumber('');
        setCardImage(null);
      }
    } catch (error) {
      console.error("Error submitting transaction:", error);
      toast.error("Error submitting transaction.");
    }
  };

  return (
    <div>
      <nav className="bg-[#161D6F] shadow-lg flex sm:justify-between items-center py-3">
        <Link
          to={"/"}
          className="signup-button rounded-full sm:rounded-md sm:px-5 sm:py-0 flex justify-center ml-6 items-center gap-2 text-[11px] p-3 "
        >
          {/* Back Button Icon */}
          <svg className="sm-w-10 sm:h-10" fill="#000000" width="14px" height="14px" viewBox="0 0 52 52">
            <path d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z" />
          </svg>
          <span className="hidden sm:block">BACK</span>
        </Link>

        <h2 className="sm:text-[24px] text-[18px] text-white pt-3 pl-24">
          Sell Gift card
        </h2>

        <div className="hidden sm:block">
          <Username />
        </div>
      </nav>

      <section className="h-[100vh] sm:h-[60%] bg-gradient-to-r from-[#a2bae3] to-[#668bc2] sm:flex-col justify-center items-center w-[95%] sm:w-full m-auto mt-5 sm:my-0 rounded-lg sm:rounded-none sm:p-7">
        <div className='p-5 mb-5'>
          <h1 className="sm:text-2xl text-[16px] text-[#161D6F] mb-2">
            INPUT YOUR GIFT CARD DETAILS
          </h1>
          <p>Enter your gift card details in each field below to sell your gift card on GiftHub.</p>
        </div>
        
        <div className="sm:w-1/2 mx-auto p-4 pt-8 sm:pt-4">
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <div className="sm:mb-0 mb-10 text-center w-full">
              <label htmlFor="amount" className="text-[16px] text-[#161D6F]">Amount</label>
              <input
                type="text"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Trade Amount"
                className="custom-select custom-arrow w-full cursor-text"
              />
            </div>

            {/* Category and Country Select */}
            <div className="sm:flex justify-center items-center gap-5">
              <div className="text-center sm:w-1/2">
                <label htmlFor="category" className="text-[16px] text-[#161D6F]">Gift Card Category</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="custom-select custom-arrow w-full"
                >
                  <option value="">Select Category</option>
                  <option value="Razer">Razer Gift Card</option>
                  {/* Add other options as needed */}
                </select>
              </div>

              <div className="text-center sm:w-1/2">
                <label htmlFor="country" className="text-[16px] text-[#161D6F]">Country/Currency Code</label>
                <select
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="custom-select custom-arrow w-full"
                >
                  <option value="">Select Country</option>
                  <option value="United States">USA/USD</option>
                  {/* Add other countries as needed */}
                </select>
              </div>
            </div>

            {/* Card Number and Image */}
            <div className="sm:flex justify-center items-center w-full gap-5">
              <div className="text-center sm:w-1/2">
                <label htmlFor="cardNumber" className="text-[16px] text-[#161D6F]">Gift Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="Enter Gift Card Number"
                  className="custom-select custom-arrow w-full cursor-text"
                />
              </div>

              <div className="text-center sm:w-1/2">
                <label htmlFor="giftCardImage" className="text-[16px] text-[#161D6F]">Gift Card Image</label>
                <input
                  type="file"
                  id="giftCardImage"
                  onChange={(e) => setCardImage(e.target.files?.[0] || null)}
                  accept="image/*"
                  className="custom-select custom-arrow cursor-pointer w-full"
                />
              </div>
            </div>

            <div className="text-center">
              <button type="submit" className="btnn text-[14px] sm:text-[16px] w-full">
                Sell
              </button>
            </div>
          </form>
        </div>
      </section>

      <ToastContainer position="top-center" autoClose={3000} />
      <div className="hidden sm:block">
        <Footer />
      </div>
      <Mobilefooter />
    </div>
  );
};

export default Sell;
