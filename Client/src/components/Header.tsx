import { Link } from "react-router-dom"
import Mylogo from "./Mylogo"
import Username from "./Username"
const Navbar =() =>{
  return (
    <nav className="nav mt-1">
          <ul>
            <li><Link to={'/'} className="focus:text-[#E7500F]">Home</Link></li>
            <div className="menu">
              <div className="item">
                <a href="#" className="link">
                  <span> Gift Card </span>
                  <svg viewBox="0 0 360 360" xmlSpace="preserve">
                    <g id="SVGRepo_iconCarrier">
                      <path
                        id="XMLID_225_"
                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                      ></path>
                    </g>
                  </svg>
                </a>
                <div className="submenu">
                  <div className="submenu-item">
                    <Link to={'/sell'} className="submenu-link">Sell Gift Card</Link>
                  </div>
                  <div className="submenu-item">
                    <Link to={'/buy'} className="submenu-link"> Buy Gift Card </Link>
                  </div>
                  <div className="submenu-item">
                  <Link to={'/checkrate'} className="submenu-link"> Check Rate  </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <li>
              <Link to={'/Blog'}> Blog </Link>
            </li>
            <li>
            <Link to={'/dashboard'}> Dashboard </Link> 
            </li>
          </ul>
        </nav>
  )
}

const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  let isloggedin= true
  return <section id="black">
<div className="bg-[#161D6F] p-4 pl-2 sm:hidden pt-3 flex justify-between">
  <Mylogo/> 
  <div className="pt-5 space-x-3">
  <Link to={'/Login'} className="login-button text-[#161D6F] text-[12px] py-2 px-3 bg-[#FFFFFF] font-semibold">LOGIN</Link>
  <Link to={'/signup'} className="signup-button text-[#161D6F]  text-[12px] py-2 px-3  bg-[#FFFFFF] font-semibold">SIGN UP</Link>
  </div>
</div>
  <div id="menu" className="flex sm:hidden justify-center rounded-b-lg pb-5 bg-[#161D6F] gap-14 font-semibold text-[14px] items-center text-white">
  <Link to={'/'} className="  hover:text-gray-300 underline underline-offset-2 text-[#E7500F]">Home</Link>
  <Link to={'/sell'} className=" ">Sell Gift Card</Link>
  <Link to={'/dashboard'} className="">Dashboard</Link>
  </div>
  <div className="card hidden sm:flex">
    <div className="top-section h-52 sm:h-[530px] rounded-none">
      <div className="border"></div>
      {children}
  <div className="icons">
    <div className="logo">
      <Mylogo/>
    </div>
    <Navbar/>
      {
        isloggedin?
        <Username/>
        :
        <div className="logins flex justify-between items-center gap-3 mr-8 mt-3">
          <Link to={'/Login'} className="login-button text-[#161D6F]  bg-[#FFFFFF] font-normal">LOGIN</Link>
          <Link to={'/signup'} className="signup-button text-[#161D6F] bg-[#FFFFFF] font-normal">SIGN UP</Link>
        </div>
      }
    </div>
  </div>
</div>
</section>
}

export default Header