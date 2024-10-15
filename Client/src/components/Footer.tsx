import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-[#161D6F] sm:pt-16 overflow-x-hidden">
  <section className="sm:flex justify-between items-center bg-[#DDE4EF] pb-5 sm:rounded-t-[40px] w-[97%] m-auto ">
      <div className="flex justify-center items-center mt-5 sm:mt-20 mx-auto ">
          <h2 className="text-[#161D6F] sm:text-2xl text-12 text-center sm:text-left pt-4 sm:pt-0"><b>Register now so you don't miss <br/> our Gift Card hot deals</b></h2>
        </div>
        <div className="flex justify-center items-center sm:mt-20 mx-auto sm:w-[50%] sm:pl-10">
          <form action="" method="post" className="subscribe w-full flex justify-center items-center gap-3 sm:gap-0  border-[#99A2A5]">
      <input className="w-1/2 input" type="email" name="email" id="email" placeholder="Enter your Email"/>
      <Link to={"/"}  className=" bg-[#161D6F] sm:px-5 sm:py-3 px-2 py-3 rounded-lg text- mt-4 sm:ml-6 transition-transform duration-200 transform hover:scale-110 hover:shadow-lg hover:bg-[#131fac] text-white text-center">Subscribe Now</Link>
  </form>
  </div>
</section>

<section className="sm:flex justify-between items-center bg-[#DDE4EF] sm:pt-5 pb-4 w-[97%] m-auto"> 
<nav className=" flex justify-center items-center sm:ml-[65px] mb-4">
    <ul className=" flex sm:gap-8 gap-12 text-[#161D6F]">
    <Link to={'/'} className="hover:text-[#FA4A00]">Home</Link>
    <Link to={'/about'} className="hover:text-[#FA4A00]">About</Link>
    <Link to={'/blog'}className="hover:text-[#FA4A00]">Blog</Link>
    <Link to={'/contact'}className="hover:text-[#FA4A00]">Contact</Link>
    </ul>
</nav>
<div className="flex justify-center items-center sm:gap-8  sm:mr-[80px] text-white">
  <ul className="example-2 gap-6">
    <li className="icon-content">
      <a
        href="https://facebook.com/"
        aria-label="LinkedIn"
        data-social="linkedin"
      >
        <div className="filled"></div>
        <svg
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 50 50" 
        width="40px" 
        height="40px"
        fill="currentColor"
        className="bi bi-linkedin"
        xmlSpace="preserve" 
        >
        <path d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"/>
        </svg>
      </a>
      <div className="tooltip">LinkedIn</div>
    </li>
    <li className="icon-content">
      <a href="https://www.github.com/" aria-label="GitHub" data-social="github">
        <div className="filled"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-facebook"
          viewBox="0 0 18 16"
          xmlSpace="preserve"
        >
          <path
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
            fill="currentColor"
          ></path>
        </svg>
      </a>
      <div className="tooltip">GitHub</div>
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
      <a href="https://npm.com/" aria-label="NPM" data-social="NPM">
        <div className="filled"></div>
      <svg 
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-npm"
        viewBox="2 0 24 24"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fillRule="evenodd"/>
        <rect width="24" height="24"/>
        <path  fill="currentColor" d="M16.7179487,7.92840493 L12.2051282,7.92840493 L12.2051282,20.2494172 L4,20.2494172 L4,3 L12.2051282,3 L20,3 L20,7.92840493 L20,20.2494172 L16.7179487,20.2494172 L16.7179487,7.92840493 Z"/>

</svg>
      </a>
      <div className="tooltip">NPM</div>
    </li>
  </ul>
</div>
</section>

<section className="bg-[#DDE4EF] w-[97%]  m-auto">
<div className="flex justify-center items-center border rounded-full border-[#161D6F] w-[90%] mx-auto"></div>
</section>
<div className="w-[97%] text-center m-auto sm:flex justify-between items-center bg-[#DDE4EF] sm:pb-10 pb-5 text-[#99A2A5] pt-3">
<p className="sm:ml-20">© 2024 Gifthub. All rights reserved.</p>
<div className="flex gap-8 sm:mr-24 justify-center pt-2 ">
<Link to={'/'}> Terms of Service</Link>
<Link to={'/'}>Privacy Policy</Link>
</div>
</div>
</footer>
  )
}

export default Footer