const TestimonialCard: React.FC<{ name: string, role:string, thumbnail:string, testimony:string }> = ({ name="Wisdom", role, thumbnail, testimony  }) => {
    return (
        <div className="carousel-card w-[95%] h-[130px] sm:h-full sm:w-[45%] bg-gradient-to-r from-[#a7b4ca] to-[#6d87ad] rounded-md sm:m-auto sm:ml-2 sm:mr-2 ml-1 mr-1 py-3 sm:px-0 px-3 flex-col justify-center items-center">
               <div className="flex items-center sm:ml-9 ml-4 sm:pt-5">
                    <div className="sm:w-10 w-8"><img src={thumbnail} alt=""/></div>
                    <div className="line-clamp-3 px-2">
                       <p className="sm:text-[18px] text-[12px] font-semibold leading-5">{name}</p>
                       <p className="sm:text-[12px] text-[10px] leading-3">{role}</p>
                    </div>
                </div>
                  <p className="line-clamp-5 mt-1.5 sm:mb-5 mb-5 sm:ml-8 sm:text-[18px] text-[14px]">{testimony}</p>
        </div>  
    )
}

export default TestimonialCard