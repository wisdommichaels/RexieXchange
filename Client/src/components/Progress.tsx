import { Link } from "react-router-dom"


const Progress = () => {
  return (
    <div>
          <section className="flex flex-col justify-center items-center p-2">
    <div className="w-full rounded-lg sm:w-[40%] flex flex-col justify-center shadow-sm  shadow-[#bbd8e6] items-center m-auto bg-[#7E9ECF]">
        <h1 className="p-5 text-[24px] mt-6">Transaction Status</h1>
        <div className="bg-[#161D6F] rounded-full p-3 mt-24 sm:mt-10 shadow-md  shadow-[#cff0ff]">
            <img className="w-20 sm:w-10 " src="src\assets\progress.png" alt="" />
        </div>
        <div className="w-[60%] flex flex-col justify-center items-center mt-40 sm:mt-5">
            <h1 className="text-[20px] font-bold text-center">Order in Progress</h1>
        <p className="text-center text-lg">Dear User, we are working on your order, an email will be sent to you shortly.</p>
        </div>
        <Link to={"/"} className="px-20 py-3 font-bold shadow-sm btnn  shadow-[#cff0ff] bg-gradient-to-r from-[#161d6f] to-[#1422bd] hover hover:bg-[#161d6f] text-white rounded-lg  mt-6 mb-8 text-[16px]">Ok</Link>
    </div>
</section>
    </div>
  )
}

export default Progress