import { useEffect } from "react";
import { useTestimonialStore } from "../store/testimonialStore";


  const TestimonialCard = () => {
    const { reviews, getTestimonies } = useTestimonialStore();

    useEffect(() => {
      getTestimonies()
    },[])
      
    return (
      <div className="carousel-card w-[95%] h-[150px] sm:h-full sm:w-[45%] bg-gradient-to-r from-[#a7b4ca] to-[#6d87ad] rounded-md sm:m-auto sm:ml-2 sm:mr-2 ml-1 mr-1 py-5 sm:px-0 px-3 flex-col justify-center items-center">
        {reviews?.map((review) => (
          <div className="flex items-center justify-between sm:ml-9 sm:pt-5 px-2">
            <div className="line-clamp-3 flex-col justify-center items-center w-1/2">
              <p className="sm:text-[18px] text-[16px] font-semibold leading-5">{review.name}</p>
              <p className="sm:text-[18px] text-[14px] leading-3 pb-1 text-yellow-500 pt-1">
                {Array(review.rating).fill(null).map((_, index) => (
                  <span key={index} className="text-yellow-400">★</span>
                ))}
                <span className="text-gray-700 text-center text-[11px]">Ratings</span>
              </p>
            </div>
            <p className="line-clamp-3 mt-2 sm:mb-5 mb-5 sm:ml-8 sm:text-[18px] text-[14px] px-2">{review.review}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default TestimonialCard;




  // const TestimonialCard: React.FC<{ name: string, rating:string, testimony:string }> = ({ name="Wisdom", rating, testimony }) => {
//     return (
//         <div className="carousel-card w-[95%] h-[150px] sm:h-full sm:w-[45%] bg-gradient-to-r from-[#a7b4ca] to-[#6d87ad] rounded-md sm:m-auto sm:ml-2 sm:mr-2 ml-1 mr-1 py-5 sm:px-0 px-3 flex-col justify-center items-center">
//                <div className="flex items-center justify-between sm:ml-9 sm:pt-5 px-2">
//                     {/* <div className="sm:w-10 w-8"><img src={thumbnail} alt=""/></div> */}
//                     <div className="line-clamp-3 flex-col justify-center items-center w-1/2">
//                        <p className="sm:text-[18px] text-[16px] font-semibold leading-5">{name}</p>
//                     <p className="sm:text-[18px] text-[14px] leading-3 pb-1 text-yellow-500 pt-1">{rating} <span className="text-gray-700 text-center text-[11px]">Ratings</span></p>
//                     </div>
//                 </div>
//                   <p className="line-clamp-3 mt-2 sm:mb-5 mb-5 sm:ml-8 sm:text-[18px] text-[14px] px-2">{testimony}</p>
//         </div>  
//     )
// }

// export default TestimonialCard
  