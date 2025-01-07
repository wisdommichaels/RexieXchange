import { Link } from "react-router-dom"

const Mylogo = () => {
  return (
    <div>
     <Link to={'/landingpage'} className="flex justify-center items-center cursor-pointer pl-3 sm:pl-0 gap-1">
        <img className="sm:w-[80px] sm:h-[80px] w-[40px] h-[40px] sm:pb-9" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1734090355/logo_hhzggz.webp" alt="my logo" />
        <div className="flex-col justify-center items-center leading-3 sm:leading-[1] sm:pb-9 pt-[7px] sm:p-0">
        <h1 className="font-bold sm:text-[20px] text-[14] sm:text-[#161D6F] text-white">RexieXchange</h1>
        <p className="sm:text-[10px] text-[8px] sm:text-[#161D6F] text-white">GiftCard Xchange Made Easy</p>
        </div>
      </Link>

    </div>

  )
}

export default Mylogo