import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TestimonialCard from "../components/TestimonialCard"
import Mylogo from "../components/Mylogo";
import Carousel from "../components/carousel.tsx";
import { useCardStore } from "../store/cardStore";
import { useEffect, useState } from "react";
import api from "../utils/api.ts";
import OnscrollHeader from "../components/OnscrollHeader.tsx";
// import Loader from "../components/Loader.tsx";


function Landingpage() {
  const [loading, setLoading] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  };
  useEffect(scrollToTop,[])

  const { cards } = useCardStore()
  const [reviews, setReviews] = useState()
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setTimeout(async () => {
        try {
          const response = await api.get("/review/get-review");
          setReviews(response.data);
        } catch (error) {
          console.error("Error fetching reviews:", error);
        } finally {
          setLoading(false);
        }
      }, 3000);
    };

    fetchData();
  }, []);
  return (
    <div>
        {/* <div className="bg-[#161D6F] px-4 py-6  sm:hidden justify-between items-center">
          <Username/>
        </div> */}
        <OnscrollHeader/>

  
      <div className="bg-[#161D6F] sm:hidden py-5 pb-10 flex justify-between items-center w-full ">
         <div className=" w-1/2 flex">
            <Mylogo />
          </div>
          <div className="logins flex justify-center items-center gap-3 bg-[#161D6F] pr-3 sm:hidden">
                <Link
                  to={"/Login"}
                  className="login-button text-[#161D6F] text-[12px]  bg-[#FFFFFF] font-normal"
                >
                  LOGIN
                </Link>
                <Link
                  to={"/signup"}
                  className="signup-button text-[#161D6F] text-[12px] bg-[#FFFFFF] font-normal"
                >
                  SIGN UP
                </Link>
        </div>
          {/* <HamburgerMenu /> */}
      </div>
      
       
    {/* header carousel */}
    <Header>
    
        <Carousel/>
    </Header>

     {/*mobile carousel  */}
     <div className="sm:hidden px-4">
      <Carousel/>
      </div>  

<div className="flex justify-center items-center font-bold sm:mt-3 m-4">
  <h1 className="sm:text-[20px] text-[12px] bg-[#161D6F] text-white py-2 px-5 rounded-md">Top Gift Cards Rates Today</h1>
</div>

  <section className="flex flex-col">
        <div className="container mx-auto sm:mt-4 bg-[#fff] rounded-none">
        {loading ? (
          <div className="flex-col justify-center items-center mt-52">
            <div className="loader w-[20px] h-[20px] flex justify-center items-center mx-auto rounded-full border-2 border-t-[#161D6F] animate-spin"></div>
            <p className="text-[10px] text-center">loading...</p>
          </div>
                ) : (
                  <>
            <div className="blur-in-out">
                <div className="marquee-ltr">
                    <div className="marquee-content">
                      {cards?.map((card) => 
                          <div className="bg-[#DDE4EF] shadow-lg rounded-lg w-72 sm:w-72 p-4 mx-2 transition-transform duration-200 transform hover:scale-110">
                            <img src={card.imageUrl} alt="Gift Card 1" className="w-full h-40 object-cover rounded-md"/>
                            <h2 className="sm:text-lg mt-2 text-[#161D6F] font-semibold ">{card.name} Gift Card</h2>
                            <p className="text-[#161D6F]">1{card.rates[0].rateDetails.currencySymbol}= ₦{card.rates[0].rate}</p>
                            <p className="text-[#161D6F]">{card.rates[0].rateDetails.countryName}</p>
                        </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="blur-in-out mt-10">
                <div className="marquee-rtl">
                    <div className="marquee-content">
                      {cards?.map((card) => 
                       <div className="bg-[#DDE4EF] shadow-lg rounded-lg w-72 sm:w-72 p-4 mx-2 transition-transform duration-200 transform hover:scale-110">
                            <img src={card.imageUrl} alt="Gift Card 5" className="w-full h-40 object-cover rounded-md"/>
                           <h2 className="text-lg font-semibold mt-2 text-[#161D6F]">{card.name}Gift Card</h2>
                            <p className="text-[#161D6F]">1{card.rates[0].rateDetails.currencySymbol}= ₦{card.rates[0].rate}</p>
                            <p className="text-[#161D6F]">{card.rates[0].rateDetails.countryName}</p>
                        </div>
                      )}
                    </div>
                </div>
            </div>
            </>
            )}
        </div>
        <div className="flex justify-end items-end m-5 ">
        <Link to={'/sell'} className="bg-[#161D6F] text-white rounded-md text-center sm:text-[20px] text-[14px] font-[550] py-3 sm:px-7 mb-2 px-5 sm:mr-8 mr-2 transition-transform duration-200 transform hover:scale-110 hover:shadow-lg hover:bg-[#172297]">Sell Now!</Link>
        </div>
    </section>

    <section className=" sm:mt-2 hidden sm:flex-col justify-center items-center bg-[#fff] rounded-t-lg sm:w-[98%] w-[95%] m-auto">
        <div className="flex justify-center items-center flex-col bg-[#161D6F] p-2 w-full rounded-t-lg">
            <h1 className="sm:text-[25px] text-[14px] font-semibold text-[#fff] ">How it Works?</h1>
            <p className="sm:text-[18px] hidden sm:block text-[12px] text-center text-[#fff]">Simple redeem your gift cards with great price</p>
            <p className="sm:text-[18px] sm:hidden text-[12px] text-center text-[#fff]">Simple redeem your gift cards with <br/> great price</p>
        </div>
        <div className="flex justify-center items-center mt-4 w-full p-2 ">
            <img className="sm:w-[60%] w-[95%]" src="src/assets/howToUse.png" alt=""/>
        </div>
    </section>

    <section className=" bg-[#fff] sm:rounded-b-lg rounded-lg sm:w-[98%] w-[95%] m-auto mb-3">
        <div className=" sm:flex justify-center items-center gap-10 pt-5 sm:pt-14 " >
            <div className="sm:w-1/3 w-[90%] mx-auto sm:m-0">
                <img src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1733959754/man_efo4vd.svg" alt=""/>
            </div>
            <div className="flex flex-col justify-center leading-5 items-center">
                <h2 className="text-[#161D6F] sm:text-[24px] text-[12px] font-semibold text-center">Sell multiple gift cards in one go</h2>
                <p className="text-black sm:text-[16px] sm:hidden text-[12px] sm:pt-3 text-center px-3">No forms. No fuss. sell all kind of gift cards in one place.</p>
                <p className="text-black sm:block hidden sm:text-[16px] text-[12px] sm:pt-3 px-3">No forms. No fuss. sell all kind of gift cards in <br/> one place.</p>
                <Link to={'/sell'} className=" flex justify-center items-center bg-[#161D6F] sm:mt-4 mt-2 text-white rounded-md text-center sm:text-[16px] text-[14px] font-[500] sm:py-2 py-2 px-5 sm:px-0 sm:mr-5 sm:w-[35%] transition-transform duration-200 transform hover:scale-110 hover:shadow-lg hover:bg-[#232396]">Sell Now!</Link>
           </div>
        </div>
        <div className=" sm:hidden justify-center items-center gap-10 mt-7 pb-7">
          <div className="sm:w-1/3 w-[90%] mx-auto">
            <img src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1733959754/man2_tfiowr.svg" alt=""/>
        </div>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#161D6F] text-[12px] font-semibold text-center p-2">Busy? And thinking of where to trade your gift cards</h2>
                <p className="text-black text-[12px] text-center leading-5 ">Trade all your gift card in one Platform. <br/> With RexieXchange Trading makes super easy!</p>
                <Link to={'/sell'} className=" flex justify-center items-center bg-[#161D6F] sm:mt-4 mt-2 text-white rounded-md text-center sm:text-[16px] text-[14px] font-[500] sm:py-2 py-2 px-5 sm:mr-5 sm:w-[35%] transition-transform duration-200 transform hover:scale-110 hover:shadow-lg hover:bg-[#232396]">Sell Now!</Link>
            </div>
        </div>
        <div className=" hidden sm:flex justify-center items-center gap-10 mt-20 pb-7">
            <div className="flex flex-col justify-end leading-7 items-center">
                <h2 className="text-[#161D6F] text-[24px] font-semibold">Busy? <br/>And thinking of where to <br/>trade your gift cards</h2>
                <p className="text-black text-[16px] pt-3">Trade all your gift card in one Platform. <br /> With RexieXchange Trading makes super easy!</p>
                <Link to={'/sell'} className="bg-[#161D6F] text-white rounded-md sm:mt-4 mt-2 text-center text-[16px] font-[500] py-1 px-4 w-[38%] transition-transform duration-200 transform hover:scale-110 hover:shadow-lg hover:bg-[#232396]">Sell Now!</Link>
            </div>
            <div className="sm:w-1/3 w-[90%] sm:mb-8">
              <img src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1733959754/man2_tfiowr.svg" alt=""/>
          </div>
        </div>

    </section>
    <section className="bg-[#DDE4EF] ">
        <div className="flex flex-col justify-center items-center m-auto sm:pt-8 pt-5 sm:ml-10">
          <h1 className="sm:text-2xl text-[16px] font-bold text-[#121c3d]">Why choose RexieXchange?</h1>
          <p className="sm:text-lg text-[13px] font-bold text-[#121c3d]">Platform advantage</p>
            <div className="flex justify-center items-center sm:w-14 w-12 sm:h-1.5 h-1 bg-[#161D6F] mt- rounded-full m-auto"></div>
        </div>
        <section className="flex-col justify-center items-center ">
          <div className="flex justify-center items-center mx-[24px] sm:gap-[170px] pt-5">
            <img className="sm:w-[160px] w-[40%]" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1733958603/homePageOne.ecc67d9f.png_tghmdl.svg" alt=""/>
            <img className="sm:w-[140px] w-[40%] pr-5 sm:pr-0" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1733958603/homePageTwo.316c82dd.png_ypvlfv.svg" alt=""/>
            <img className="sm:w-[140px] w-[35%]" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1733958604/homePageThree.9ffc76ba.png_wl8dzj.svg" alt=""/>
          </div>
          <div className="flex justify-center items-center sm:gap-40 gap-16  sm:pt-5 pb-5 sm:text-[20px] text-[14px]">
            <p className="sm:ml-[80px] ml-12 text-center">Fast</p>
            <p className="sm:ml-20 ml-5 text-center">Security Guarantee</p>
            <p className="text-center mr-4">Trusted Vendors</p>
          </div>
        </section>
      </section>

      <section className="overflow-hidden bg-[#161D6F] rounded-t-3xl">
        <div className="flex flex-col justify-center items-center sm:pt-12 pt-6">
            <h1 className="text-white font-normal sm:text-[45px] text-[18px]">Don't just take our word for it</h1>
            <p className="text-[#aeaeb1] font-normal sm:text-[22px] text-[14px]  ">Read what our clients have to say</p>
        </div>
        {loading ? (
          <div className="flex-col justify-center items-center mt-24">
            <div className="loader w-[20px] h-[20px] flex justify-center items-center mx-auto rounded-full border-2 border-t-white animate-spin"></div>
            <p className="text-[10px] sm:text-[12px] text-center text-white">loading Reviews please wait...</p>
          </div>
                ) : (
                  <>
        {
          reviews && 
          <TestimonialCard/>
       
        }

         </>
        )}
      </section>
  <Footer/>
    </div>
  )
}

export default Landingpage