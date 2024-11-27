const Loader = () => {
  return (
    <div>
    {/* <div classNameName="absolute h-screen w-screen opacity-70 flex items-center justify-center z-50">
      <div classNameName="aspect-square w-32 flex justify-center items-center animate-spin-slow">
        <img
          src="https://res.cloudinary.com/duwfbyhyq/image/upload/v1729740667/mylogo_qxoqqk.png"
          classNameName="w-[50%] bg-sec transform animate-zoom-spin"
          alt="Loading logo"
        />
      </div>
    </div> */}
<section className="absolute h-screen bg-[#C9D8F0] w-screen opacity-70 flex items-center justify-center z-50" >
  <div className="dots-container">
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
  <div className="dot"></div>
</div>
</section>

    {/* <div  className="flex justify-center items-center sm:pt-80 pt-[500px] bg-[#C9D8F0]">
        <p>Loading...</p>
    </div> */}
    </div>
  );
};

export default Loader;
