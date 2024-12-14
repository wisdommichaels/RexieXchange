import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Mobilefooter from "../components/Mobilefooter";
import Carousel from "../components/carousel";
import { useCardStore } from "../store/cardStore";
import FooterO from "../components/FooterO";

const Checkrate: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  useEffect(scrollToTop,[])

  const { cards, getCards } = useCardStore();

  // Load cards on component mount
  useEffect(() => {
    if (cards === null) {
      getCards();
    }
  }, [cards, getCards]);

  // React state to store amount, currency, and result
  const [amount, setAmount] = useState<string>("");
  const [currency, setCurrency] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false); // To toggle result visibility

  // Create a mapping of conversion rates
  const conversionRates = cards
    ? cards.flatMap((card) =>
        card.rates.map((rate) => ({
          currencyCode: rate.rateDetails.currencyCode,
          rate: rate.rate,
        }))
      ).reduce((acc, { currencyCode, rate }) => {
        acc[currencyCode] = rate;
        return acc;
      }, {} as Record<string, number>)
    : {};

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
      setResult("Please enter a valid amount or select a valid currency.");
      setShowResult(true); // Show the error message as well
    }
  };

  return (
    <div>
      <nav className="bg-[#161D6F] shadow-lg flex items-center py-3 sm:gap-5 gap-[86px]">
        <Link
          to={"/"}
          className="back-button rounded-full sm:rounded-2xl sm:px-4 sm:py-1 flex justify-center sm:ml-6 ml-2 items-center gap-2 text-[11px] p-3"
        >
          <img src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1733961385/arrow-_xye6xf.png" alt="Back" />
        </Link>

        <h2 className="sm:text-[20px] text-[18px] text-white pt-3">Check Rate</h2>
      </nav>

      <div className="sm:hidden mx-3">
        <Carousel />
      </div>

      <section className="bg-gradient-to-r from-[#a2bae3] to-[#668bc2] sm:flex-col justify-center items-center w-[95%] sm:w-full mt-5 sm:my-0 mb-28 pb-10 sm:pb-0 rounded-lg sm:rounded-none mx-auto">
        <div className="p-5 pt-8">
          <h1 className="sm:text-2xl text-[16px] text-[#161D6F] mb-2">CHECK YOUR GIFT CARD RATE</h1>
          <p className="sm:text-[18px] text-14">
            Enter your gift card details in each field below to calculate how much is the value of your gift card in
            naira on RexieXchange.
          </p>
        </div>

        <div className="sm:w-[60%] mx-auto p-4 sm:pt-7 pt-7">
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <div className="flex flex-col mb-4 ">
              <label
                htmlFor="amount"
                className="mb-1 text-sm m-auto text-black text-[10px] sm:text-[16px]"
              >
                Enter Amount
              </label>
              <input
                className="custom-select custom-arrow cursor-text w-full"
                type="number"
                id="amount"
                placeholder="Amount in Foreign currency"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="flex flex-col mb-4">
              <label
                htmlFor="currency"
                className="mb-1 text-sm m-auto text-black text-[10px] sm:text-[16px]"
              >
                Select Currency
              </label>
              <select
                id="currency"
                className="custom-select custom-arrow w-full "
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="">Select Currency</option>
                {cards &&
                  cards.flatMap((card) =>
                    card.rates.map((rate) => (
                      <option key={rate.rateDetails.currencyCode} value={rate.rateDetails.currencyCode}>
                        {rate.rateDetails.currencyCode}
                      </option>
                    ))
                  )}
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="country"
                className="mb-1 text-sm m-auto text-black text-[10px] sm:text-[16px]"
              >
                Select Country
              </label>
              <select
                id="currency"
                className="custom-select custom-arrow w-full "
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Select Country</option>
                {cards &&
                  cards.flatMap((card) =>
                    card.rates.map((rate) => (
                      <option key={rate.rateDetails.countryName} value={rate.rateDetails.countryName}>
                        {rate.rateDetails.countryName}
                      </option>
                    ))
                  )}
              </select>
            </div>

            {showResult && (
              <div
                className="custom-select w-full mt-4 text-md font-semibold text-center text-black"
                id="result"
              >
                <p>{result}</p>
              </div>
            )}

            <div className="text-center">
              <button className="btnn text-[14px] sm:text-[16px] w-full" type="submit">
                Convert to Naira
              </button>
            </div>
          </form>
        </div>
      </section>

      <Mobilefooter />
      <div className="hidden sm:block">
        <FooterO />
      </div>
    </div>
  );
};

export default Checkrate;
