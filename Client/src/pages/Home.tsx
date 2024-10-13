
import Footer from "../components/Footer"
// import Header from "../components/Header"
import Mylogo from "../components/Mylogo"
import Username from "../components/Username"
import Mobileheader from "../components/Mobileheader"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

const Home = () => {
    const revealOnScroll = () => {      
      const triggerBottom = window.innerHeight * 0.85;
      const cards = document.querySelectorAll('.scroll-card');
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        });
    };

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    // dropdown menu
    document.querySelector('.dropdown')?.addEventListener('click', function() {
      const menu = document.querySelector('.dropdown-menu') as HTMLElement | null;
      if (menu) {
        menu.classList.toggle('hidden');
      }
    });
    
    

  return (
    <div>
<section id="black">
       <Mobileheader/>
  <section className="sm:hidden">
    <h1 className="sm:text-[50px] bg-gradient-to-r from-[#a2bae3] to-[#668bc2] text-[16px] font-bold p-5 text-white text-center m- mb-0">Trade your <span className="text-[#161D6F] underline">Gift Card</span> all in <br/> one place</h1>
    <div className="flex-col justify-center items-center mb-3 bg-gradient-to-r from-[#a2bae3] to-[#668bc2] m- mt-0 rounded-b-lg">
    <div className="w-[70%] rounded-lg gap-2 shadow-sm mb-3 py-1 m-auto flex justify-start items-center bg-white">
      <div className="flex items-center  pointer-events-none bg-white pl-5 rounded-lg ">
        <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg"  
        viewBox="0 0 50 50" 
        width="20px" 
        height="20px">
        <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/>
        </svg>
      </div>
      <input className="border-none py-1 cursor-text w-full focus:outline-none " type="text" placeholder="Search gift cards..."/> 
    </div>
    <div className="dropdown">
    <div className="w-full max-w-md mb-2 pb-3 flex justify-center items-center">
    <div className="flex items-center justify-between w-60 px-4 py-2 bg-white  rounded-md cursor-pointer">
        <span className="text-gray-700">Select a Giftcard option</span>

        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>

      <div className="absolute mt-1 w-60 bg-white rounded-md shadow-lg dropdown-menu z-0">
      <Link to={"/razergold"}className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Razer Gift Card</Link>
      <Link to={"/apple"}className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Apple&iTunes</Link>
    <Link to={"/amazon"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Amazon Gift Card</Link>
    <Link to={"/steam"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Steam Gift Card</Link>
    <Link to={"/walmart"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Walmart Gift Card</Link>
    <Link to={"/ebay"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">eBay Gift card</Link>
    <Link to={"/american"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">American Express</Link>
    <Link to={"/google"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Google Play Gift Card</Link>
    <Link to={"/vanilla"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Vanilla Gift card</Link>
    <Link to={"/playstation"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">PlayStation</Link>
    <Link to={"/mastercard"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Mastercard Gift Card</Link>
  </div>
    </div>
    </div>
  </div>
  </section>
    <div className="card hidden sm:flex">
      <div className="top-section">
        <div className="border"></div>
    <div className="icons">
      <div className="logo">
      <Mylogo/>
      </div>
      <Navbar/>
        <Username/>
      </div>
      <div className="  flex flex-col justify-center items-center w-full p-10 mb-6">
            <h1 className="sm:text-[50px] text-[16px] font-bold pt-5 text-white mb-4 text-center">Trade your <span className="text-[#E7500F] underline">Gift Card</span> all in <br/> one place</h1>
            
          <div className="searchbar w-[50%] gap-2 mb-6 flex justify-start items-center">
            <div className="flex items-center pointer-events-none bg-white  ">
              <svg className="text-gray-400" xmlns="http://www.w3.org/2000/svg"  
               viewBox="0 0 50 50" 
               width="25px" 
               height="25px">
               <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/>
             </svg>
            </div>
            <input className="w-full focus:outline-none"  type="text" placeholder="Search gift cards..."/> 
          </div>
            

    <div  className="dropdown">
      <div className="flex items-center justify-between w-60 px-4 py-2 bg-white  rounded-md cursor-pointer">
        <span className="text-gray-700">Select a Giftcard option</span>

        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>

      <div className="absolute mt-1 w-60 bg-white rounded-md shadow-lg dropdown-menu z-0">
      <Link to={"/razergold"}className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Razer Gift Card</Link>
      <Link to={"/apple"}className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Apple&iTunes</Link>
    <Link to={"/amazon"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Amazon Gift Card</Link>
    <Link to={"/steam"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Steam Gift Card</Link>
    <Link to={"/walmart"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Walmart Gift Card</Link>
    <Link to={"/ebay"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">eBay Gift card</Link>
    <Link to={"/american"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">American Express</Link>
    <Link to={"/google"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Google Play Gift Card</Link>
    <Link to={"/vanilla"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Vanilla Gift card</Link>
    <Link to={"/playstation"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">PlayStation</Link>
    <Link to={"/mastercard"} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Mastercard Gift Card</Link>
  </div>
    </div>
  
  </div>
  
    </div>
  </div>
</section>
<section>
  <div className="section-title flex justify-center items-center bg-[#161D6F] sm:w-[20%] w-[60%] shadow-md shadow-slate-500 m-auto rounded-md p-3 mb-3">
    <h1 className="font-bold text-[12px] sm:text-[14px] text-white">Gift Cards</h1>
  </div>
</section>
<section className="section min-h-screen bg-[#F5F5FA] sm:rounded-[40px] rounded-xl m-auto w-[98%] mb-8 p-5 sm:p-0">
  <div className="flex flex-wrap justify-center items-center gap-8 py-8  mt-4 rounded-2xl">
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\razergoldpng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">Razer Gift Card</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1" src="/Client/assets/tag.png" alt=""/>
                  <p className="text-white mt-2 font-bold">₦1184.38</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\applecardpng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">Apple&iTunes</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦1117.28</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\steampng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">Steam Gift Card</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦1379.87</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\amazonpng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">Amazon Gift Card</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦800.99</p>
                </div>
                <Link to={"/sell"} className="mt-5 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\walmartgiftcardpng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">Walmart Gift Card</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦713.49</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\ebaypng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold ">eBay Gift card</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦1100.81</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\americanexpresspng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold ">American Express</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦1100.81</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\googleplaypng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold ">Google Play Gift Card</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦750.99</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\vanillapng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold ">Vanilla Gift card</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦713.49</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\playstationpng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold ">PlayStation</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦700</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\cvspng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">CVS pharmacy</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦600.65</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\footlockerpng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold ">Foot Locker Gift Card</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦1110.94</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\mastercardpng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">Mastercard Gift Card</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦1208.95</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\netspendpng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">Netspend</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦655.71</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\robloxpng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">Roblox</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦409.73</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\visapng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">VISA</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦1202.61</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\walmartmoneypng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">Walmart MoneyCard</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦29.99</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\gamestoppng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">GameStop</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦29.99</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\nordstrompng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">Nordstrom</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦962.98</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\paysafecardpng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">Paysafecard</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦29.99</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\sephorapng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">Sephora Gift Card</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦1110.53</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\xboxpng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">Xbox Gift Card</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦881.03</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\nikepng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">Nike Gift Card</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦1106.48</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
    
    <div className="w-[45%] sm:w-1/5 bg-[#161D6F] shadow-sm shadow-[#161D6F] rounded-lg overflow-hidden scroll-card">
      <div className="relative group mt-2 mr-2">
          <img src="src\assets\SVG\macyspng.svg" alt="Product Image" className="w-full h-30 sm:h-42 object-cover rounded-lg"/>
          <div className="absolute inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <h1 className="text-white text-xl font-semibold">Macy's Gift Card</h1>
            <div className="flex justify-center items-center">
              <img className="w-8 pt-2 pr-1"  src="/Client/assets/tag.png"alt=""/>
                  <p className="text-white mt-2 font-bold">₦1070.17</p>
                </div>
                <Link to={"/sell"} className="mt-2 bg-[#FA4A00] text-white px-5 py-1 font-bold rounded-lg shadow hover:bg-[#161D6F] transform hover:scale-105 transition-transform duration-200 ease-in-out">
                  Sell
                </Link>
              </div>
      </div>
    </div>  
  </div>
</section>
<Footer/>
{/* <script>
    document.addEventListener('DOMContentLoaded', function() {

    

    // Trigger the function on page load and scroll
    
});

</script> */}
    </div>
  )
}

export default Home