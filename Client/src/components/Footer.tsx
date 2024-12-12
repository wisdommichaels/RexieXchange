import { Link } from "react-router-dom"
import NewsletterForm from "./NewsLatter"

const Footer = () => {
  return (
    <footer className="bg-[#161D6F] pt-5 overflow-x-hidden">
  <section className="sm:flex justify-between items-center bg-[#C9D8F0] pb-5 sm:rounded-t-[40px] w-[97%] m-auto rounded-t-md">
      <div className="flex sm:justify-center sm:pt-0 sm:pl-5 pl-5 pt-2 items-center mt-5 sm:mt-20 mx-auto ">
          <h2 className="text-[#161D6F] sm:text-2xl text-12 sm:text-left pt-4 sm:pt-0"><b>Register now so you don't miss  our<br/> Gift Card hot deals</b></h2>
        </div>
        <div className="flex justify-center items-center sm:mt-[65px] mx-auto sm:w-[50%] w-[100%]">
         <NewsletterForm />
        </div>
</section>

<section className="sm:flex justify-between items-center bg-[#C9D8F0] sm:pt-5 pb-4 w-[97%] m-auto"> 
<nav className=" flex sm:justify-center items-center sm:ml-[65px] sm:mb-4 mb-3 pt-3 pl-5 sm:pl-0">
    <ul className=" flex sm:gap-8 gap-12 text-[#161D6F]">
    <Link to={'/'} className="hover:text-[#FA4A00]">Home</Link>
    <Link to={'/aboutpage'} className="hover:text-[#FA4A00]">About</Link>
    {/* <Link to={'/blog'}className="hover:text-[#FA4A00]">Blog</Link> */}
    <Link to={'/contactpage'}className="hover:text-[#FA4A00]">Contact</Link>
    </ul>
</nav>

<div className="flex justify-center items-center pt-5">
<h2 className="text-[#161D6F] sm:text-1xl text-10 text-center sm:text-left sm:pt-0 pl-4">Follow us on</h2>
<div className="flex justify-center items-center sm:gap-8  sm:mr-[80px] text-white">
  <ul className="example-2 sm:gap-3">
    <li className="icon-content">
      <a
        href="https://facebook.com/"
        aria-label="facebook"
        data-social="facebook"
      >
        <div className="filled"></div>
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 54 50" 
        width="35px" 
        height="35px"
        fill="currentColor"
        className="bi bi-facebook"
        xmlSpace="preserve" 
        >
       <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
        </svg>
      </a>
      <div className="tooltip">Facebook</div>
    </li>
    <li className="icon-content">
                <a
                  href="https://www.instagram.com/"
                  aria-label="Instagram"
                  data-social="instagram"
                >
                  <div className="filled"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 18 16"
                    xmlSpace="preserve"
                  >
                    <path
                      d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                      fill="currentColor"
                    ></path>
                  </svg>
                </a>
                <div className="tooltip">Instagram</div>
    </li>
    <li className="icon-content">
      <a href="https://www.twitter.com/" aria-label="Twitter" data-social="twitter">
        <div className="filled"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg" 
          width="35"
          height="35"
          fill="currentColor"
          className="bi bi-twitter"
          viewBox="0 0 54 50" 
          xmlSpace="preserve"
        >
          <path
           d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"
            fill="currentColor"
          ></path>
        </svg>
      </a>
      <div className="tooltip">Twitter</div>
    </li>
    <li className="icon-content">
      <a href="https://www.email.com/" aria-label="Email" data-social="email">
        <div className="filled"></div>
        <svg
           viewBox="0 0 2200 1800" 
           fill="currentColor"
           className="bi bi-email"
           xmlns="http://www.w3.org/2000/svg">
          <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fill-rule="evenodd"/>
        </svg>
      </a>
      <div className="tooltip">Email</div>
    </li>
  </ul>
</div>
</div>
</section>

<section className="bg-[#C9D8F0] w-[97%]  m-auto">
<div className="flex justify-center items-center border rounded-full border-[#161D6F] w-[90%] mx-auto"></div>
</section>
<div className="w-[97%] sm:text-center m-auto sm:flex justify-between items-center bg-[#C9D8F0] sm:pb-10 pb-5 text-[#62686b] pt-3">
<p className="sm:ml-20 text-[14px] text-center">Copyright © 2024 REXIE XCHANGE. All Rights Reserved.</p>
{/* <div className="flex gap-8 sm:mr-24 justify-center pt-2 ">
<Link to={'/'}> Terms of Service</Link>
<Link to={'/'}>Privacy Policy</Link>
</div> */}
</div>
</footer>
  )
}

export default Footer