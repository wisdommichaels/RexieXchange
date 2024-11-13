import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Mobilefooter from '../components/Mobilefooter';
import Footer from '../components/Footer';
import Progress from '../components/Progress';
import Carousel from '../components/Carousel.tsx';

const Checkrate: React.FC = () => {
  interface ConversionRates {
    [key: string]: number;
  }

  // Conversion rates mapping
  const conversionRates: ConversionRates = {
    usd: 760, 
    eur: 820, 
    gbp: 900, 
    cad: 580,  
    aud: 540,
    nzd: 520, 
    jpy: 100, 
    sgd: 560, 
    chf: 800, 
    mxn: 2300,
    twd: 30, 
    thb: 3000, 
    krw: 1200, 
    vnd: 24000, 
    myr: 40,
    php: 500, 
    hkd: 90, 
    idr: 14000, 
    rub: 70, 
    huf: 300,
    brl: 46, 
    zar: 1550, 
    inr: 80, 
    cny: 750, 
    sek: 1020,
    dkk: 780, 
    pln: 420, 
    bdt: 85, 
    lkr: 100, 
    sll: 8000,
  };

  // React state to store amount, currency, and result
  const [amount, setAmount] = useState<string>('');
  const [currency, setCurrency] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [showResult, setShowResult] = useState<boolean>(false); // To toggle result visibility


  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const amountValue = parseFloat(amount);
    const conversionRate = conversionRates[currency];

    if (!isNaN(amountValue) && conversionRate) {
      const convertedAmount = amountValue * conversionRate;
      setResult(`${amountValue} ${currency.toUpperCase()} = ₦${convertedAmount.toLocaleString()}`);
      setShowResult(true); // Show the result on successful submission
    } else {
      setResult('Please enter a valid amount.');
      setShowResult(true); // Show the error message as well
    }
  };

  return (
    <div>
      <nav className="bg-[#161D6F] shadow-lg flex items-center py-3  sm:gap-5 gap-[90px] ">
      <Link
          to={"/"}
          className="back-button rounded-full sm:rounded-2xl sm:px-4 sm:py-1 flex justify-center sm:ml-6 ml-2 items-center gap-2 text-[11px] p-3 "
        >
          <img src="src/assets/arrow-.png" alt="" />
          {/* <span className="hidden sm:block">BACK</span> */}
        </Link>


        <h2 className="sm:text-[20px] text-[18px] text-white pt-3 text-center">Check Rate</h2>

      </nav>

      <div className="sm:hidden mx-3">
      <Carousel/>
      </div> 

      <section className="bg-gradient-to-r from-[#a2bae3] to-[#668bc2] h-[80vh] sm:h-[80vh] sm:flex-col justify-center items-center w-[95%] sm:w-full m-auto mt-5 sm:my-0 rounded-lg sm:rounded-none sm:p-7 sm:pb-9 mx-3 sm:m-0">
          <div className='p-5 sm:pt-8'>
          <h1 className="sm:text-2xl text-[16px] text-[#161D6F] mb-2">
            CHECK YOUR GIFT CARD RATE
          </h1>
          <p>Enter your gift card details in each field bellow to calculate how much is the value of your gift card in naira on GiftHub.</p>
          </div>
        <div className="sm:w-1/2 mx-auto p-4 sm:pt-7 pt-7">
          <form id="currency-form" onSubmit={handleSubmit} className="space-y-4 w-full">
            <div className="flex flex-col mb-4">
              <label htmlFor="amount" className="mb-1 text-sm m-auto text-[#161D6F] text-[10px] sm:text-[16px]">
                Enter Amount
              </label>
              <input
                className="custom-select custom-arrow cursor-text w-full sm:w-[80%]"
                type="text"
                id="amount"
                placeholder="Amount in Foreign currency"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="currency" className="mb-1 text-sm m-auto text-[#161D6F] text-[10px] sm:text-[16px]">
                Select Currency
              </label>
              <select
                id="currency"
                className="custom-select custom-arrow w-full sm:w-[80%]"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="">Select Currency</option>
                <option value="usd">USD - United States Dollar</option>
                <option value="eur">EUR - Euro</option>
                <option value="gbp">GBP - British Pound</option>
                <option value="cad">CAD - Canadian Dollar</option>
                <option value="aud">AUD - Australian Dollar</option>
                <option value="nzd">NZD - New Zealand Dollar</option>
                <option value="jpy">JPY - Japanese Yen</option>
                <option value="sgd">SGD - Singapore Dollar</option>
                <option value="chf">CHF - Swiss Franc</option>
                <option value="mxn">MXN - Mexican Peso</option>
                <option value="twd">TWD - Taiwan Dollar</option>
                <option value="thb">THB - Thai Baht</option>
                <option value="krw">KRW - South Korean Won</option>
                <option value="vnd">VND - Vietnamese Dong</option>
                <option value="myr">MYR - Malaysian Ringgit</option>
                <option value="php">PHP - Philippine Peso</option>
                <option value="hkd">HKD - Hong Kong Dollar</option>
                <option value="idr">IDR - Indonesian Rupiah</option>
                <option value="rub">RUB - Russian Ruble</option>
                <option value="brl">BRL - Brazilian Real</option>
                <option value="zar">ZAR - South African Rand</option>
                <option value="inr">INR - Indian Rupee</option>
                <option value="cny">CNY - Chinese Yuan</option>
                <option value="sek">SEK - Swedish Krona</option>
              </select>
            </div>

            {showResult && (
              <div className="custom-select sm:w-[80%] w-full mt-4 text-lg font-semibold text-center text-[#161D6F]" id="result">
                <p>{result}</p>
              </div>
            )}

            <div className="text-center">
              <button className="btnn text-[14px] sm:text-[16px] w-full sm:w-[80%]" type="submit">
                Convert to Naira
              </button>
            </div>
          </form>
        </div>
      </section>
      <Progress/>
      <Mobilefooter />
      <div className="hidden sm:block">
       <Footer />
      </div>
    </div>
  );
};

export default Checkrate;
