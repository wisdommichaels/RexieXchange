import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div>
        <nav className="nav mt-1">
      <ul>
        <li>
          <Link to={"/"} className="focus:text-[#E7500F]">
            Home
          </Link>
        </li>
        <div className="menu">
          <div className="item">
          <Link to={"/rate/"}className="link">
              <span> Gift Card </span>
              <svg viewBox="0 0 360 360" xmlSpace="preserve">
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="XMLID_225_"
                    d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                  ></path>
                </g>
              </svg>
              </Link>
            <div className="submenu">
              <div className="submenu-item">
                <Link to={"/sell"} className="submenu-link">
                  Sell Gift Card
                </Link>
              </div>
              <div className="submenu-item">
                <Link to={"/checkrate"} className="submenu-link">
                  {" "}
                  Check Rate
                  {" "}
                </Link>
              </div>
              <div className="submenu-item">
                <Link to={"/buy"} className="submenu-link">
                  {" "}
                  Buy Gift Card
                  {" "}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <li>
          <Link to={"/Blog"}> Blog </Link>
        </li>
        <li>
          <Link to={"/dashboard"}> Dashboard </Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar