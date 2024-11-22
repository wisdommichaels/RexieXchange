import { Link } from "react-router-dom"

const Mylogo = () => {
  return (
    <div>
     <Link to={'/'} className="flex justify-center items-center cursor-pointer">
        <img className="sm:w-[100px] sm:h-[100px] w-[55px] h-[55px] sm:pb-12" src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740667/mylogo_qxoqqk.png" alt="" />
        <div className="flex-col justify-center items-center leading-3 sm:leading-4 sm:pb-9 pt-[12px] sm:p-0">
        <h1 className="font-bold sm:text-[24px] text-[14] sm:text-[#161D6F] text-white">GiftHub</h1>
        <p className="sm:text-[8px] text-[5.8px] sm:text-[#161D6F] font-bold text-center text-white">Exchange with Ease</p>
        </div>
      </Link>

    </div>

  )
}

export default Mylogo