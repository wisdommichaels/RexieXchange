import React, { ChangeEvent, useEffect, useState } from 'react';
import {useNavigate } from "react-router-dom";
import axios from 'axios';
import Mobilefooter from "../components/Mobilefooter";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api_url } from '../utils/constants';
import Carousel from '../components/carousel.tsx';
import api from '../utils/api.ts';
import { useCardStore } from '../store/cardStore.ts';
import Progress from '../components/Progress.tsx';
import Loader from '../components/Loader.tsx';
import FooterO from '../components/FooterO.tsx';


const Sell: React.FC = () => {
  const navigate = useNavigate();
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

  // State variables for form inputs
  const [amount, setAmount] = useState<string>('');
  const [cardName, setCardName] = useState<string>('');
  const [countryName, setCountryName] = useState<string>('');
  const [countryCode, setCountryCode] = useState<string>('');
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardImage, setCardImage] = useState<File | null>(null);
  const {cards, getCards } = useCardStore()
  const [showLoader, setShowLoader] = useState(false);
  const [imgLoader, setImgLoader] = useState(false);
  const [showProgress, setShowProgress] = useState(false);


  useEffect(() => {
    if(!cards){
      getCards()
      }
  },[cards, name])
  const handleImageUpload = async (file : File) => {
    console.log("Uploading");
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "projectImages"); // Replace with your Cloudinary upload preset
    data.append("cloud_name", "duwfbyhyq"); // Replace with your Cloudinary upload preset
  
    try {
      setImgLoader(true)
      const response = await fetch(`https://api.cloudinary.com/v1_1/duwfbyhyq/image/upload`, 
        {
          method:"POST",
          body:data
        }); // Replace with your Cloudinary cloud name
        const res = await response.json();
        console.log(res); // Log the URL of the uploaded image
      setImgLoader(false)
        return res.secure_url; // Return the URL of the uploaded image
    } catch (error) {
      setImgLoader(false)
      console.error("Image upload failed:", error);
      return null; // Handle error appropriately
    }
  };

  const handleInputChange = async (e:ChangeEvent<HTMLInputElement>) => {
    const {type, files } = e.target;
    if (type === "file" && files && files.length > 0) {
      const imageUrl = await handleImageUpload(files[0]);
      setCardImage(imageUrl);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check all fields are filled
    if (!amount || !cardName || !countryName || !countryCode || !cardNumber || !cardImage ) {
      toast.error("All fields are required!");
      return;
    }
    const rate = cards?.filter(card=> card.name === cardName)[0].rates.find(rate => rate.rateDetails.currencyCode === countryCode)?.rate


    try {     
      setShowLoader(true);

      const response = await api.post(`${api_url}/transaction`, {
        amount,
        cardName,
        countryName,
        countryCode,
        cardNumber,
        cardImage,
        rate
      });
      response.data;

       setTimeout(() => {
      setShowLoader(false);
      setShowProgress(true);
    }, 3000); // Adjust the delay time as needed (in milliseconds)


        // Reset form fields
        setAmount('');
        setCardName('');
        setCountryName('');
        setCountryCode('');
        setCardNumber('');
        setCardImage(null);
      
    } catch (error) {
      // TypeScript error handling for Axios errors
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || 'Error submitting transaction';
        toast.error(errorMessage);
      } else {
        toast.error('An unexpected error occurred');
      }
      console.error('Error submitting transaction:', error);
    }
  };

  return (
    <div>  
      {showLoader && <Loader />}
    {showProgress && <Progress />}
    {!showLoader && !showProgress && (
      <>
      <nav className="bg-[#161D6F] shadow-lg flex sm:gap-5 gap-[73px] items-center py-3">
        <button
          onClick={handleGoBack}
          className="back-button sm:rounded-2xl sm:px-4 sm:py-1 flex justify-center sm:ml-6 items-center gap-2 text-[11px] p-3 "
        >
        <img src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1733961385/arrow-_xye6xf.png" alt="" />
        </button>

        <h2 className="sm:text-[20px] text-[18px] text-white text-center">
          Sell Gift card
        </h2>
      </nav>

      <div className="sm:hidden mx-3">
      <Carousel/>
      </div>
      
  
  <section className=" bg-gradient-to-r from-[#a2bae3] to-[#668bc2] mb-28 sm:mb-0 sm:flex-col justify-center items-center w-[95%] sm:w-full m-auto mt-5 sm:mt-0 sm:pb-14 pb-5 rounded-lg sm:rounded-none sm:p-7">
    <div className='p-5 sm:mb-5 pt-8'>
      <h1 className="sm:text-2xl text-[16px] text-[#161D6F] mb-2">
        INPUT YOUR GIFT CARD DETAILS
      </h1>
      <p className='text-[16px] sm:text-[20px]'>Enter your gift card details in each field below to sell your gift card on RexieXchange.</p>
    </div>
    
    <div className="sm:w-[70%] mx-auto p-4 sm:pt-4 relative">
      <form onSubmit={handleSubmit} className={`w-full space-y-4 ${showLoader ? 'opacity-80' : ''}`}>
        <div className="sm:flex justify-center items-center gap-5">
        <div className="sm:mb-0 mb-4 text-center w-full sm:w-1/2">
          <label htmlFor="amount" className="text-[18px] text-black">Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Trade Amount"
            className="custom-select custom-arrow w-full cursor-text"
          />
        </div>

        <div className="text-center sm:w-1/2">
            <label htmlFor="category" className="text-[18px] text-black">Gift Card Category</label>
            <div className=''>
            <select
              id="category"
              value={cardName}
              onChange={(e) =>  setCardName(e.target.value)}
              className="custom-select custom-arrow w-full"
            >
              <option value="">Select Category</option>
              { cards && cards.length > 0 && cards.map(card =>
              <option value={card.name}>{card.name} Gift Card</option>
              )
              }
            </select>
            </div>
          </div>

        </div>

        {/* Category and Country Select */}
        <div className="sm:flex justify-center items-center gap-5">
          <div className="text-center sm:w-1/2 mb-4">
            <label htmlFor="countryName" className="text-[18px] text-black">Country Name</label>
            <select
              id="countryName"
              value={countryName}
              onChange={(e) => setCountryName(e.target.value)}
              className="custom-select custom-arrow w-full"
            >
              <option value="">Select Country </option>
              { cards && cardName && cards.filter(card=> card.name === cardName)[0].rates.map(card =>
              <option value={card.rateDetails.countryName}> {card.rateDetails.countryName}</option>
              )}
            </select>
          </div>

          <div className="text-center sm:w-1/2 mb-4">
            <label htmlFor="country" className="text-[18px] text-black">Country/Currency Code</label>
            <select
              id="countryCode"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="custom-select custom-arrow w-full"
            >
              <option value="">Select Currency Code</option>
              { cards && cardName && cards.filter(card=> card.name === cardName)[0].rates.map(card =>
              <option value={card.rateDetails.currencyCode}>{card.rateDetails.currencyCode}</option>
              )}
            </select>
          </div>
        </div>

        {/* Card Number and Image */}
        <div className="sm:flex justify-center items-center w-full gap-5">
          <div className="text-center sm:w-1/2 mb-4">
            <label htmlFor="cardNumber" className="text-[18px] text-black">Gift Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter Gift Card Number"
              className="custom-select custom-arrow w-full cursor-text"
            />
          </div>

          <div className="text-center sm:w-1/2 mb-4">
            <label htmlFor="giftCardImage" className="text-[18px] text-black">Gift Card Image</label>
            <input
              type="file"
              id="giftCardImage"
              onChange={handleInputChange}
              accept="image/*"
              className="custom-select custom-arrow cursor-pointer w-full"
              disabled={imgLoader} // Disable file input during upload
      />
             {/* {imgLoader && <p className="text-blue-500 mt-2">Uploading...</p>}  */}
          </div>
        </div>

        <div className="text-center">
        <button
      type="submit"
      className={`btnn text-[14px] sm:text-[16px] w-full ${
        imgLoader ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={imgLoader || showLoader} // Disable button if image is uploading
    >
      {imgLoader ? "Uploading Image..." : "Sell"}
    </button>
        </div>
      </form>
    
    </div>
  </section>

      <ToastContainer position="top-right" autoClose={3000} />
      <div className="hidden sm:block">
        <FooterO />
      </div>
      <Mobilefooter />
       </>
      )}
    </div>
  );
};

export default Sell;
