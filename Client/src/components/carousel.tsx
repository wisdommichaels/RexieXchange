// import React, { useEffect, useRef, useState } from "react";
// import "./Carousel.css"; // Assume styles for the carousel

// interface CarouselProps {
//   images: ["https://res.cloudinary.com/duwfbyhyq/image/upload/v1729810211/banner2_gekq7z.png", "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729810204/banner3_euxdtg.png", "https://res.cloudinary.com/duwfbyhyq/image/upload/v1729810334/banner2_kr7x5r.png"]; // Array of image URLs for the carousel
// }

// const Carousel: React.FC<CarouselProps> = ({ images }) => {
//   const trackRef = useRef<HTMLDivElement>(null);
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideCount = images.length;
//   const intervalTime = 3000; // Auto slide interval

//   // Function to set the position of each slide
//   const setSlidePosition = (slides: HTMLDivElement[], slideWidth: number) => {
//     slides.forEach((slide, index) => {
//       slide.style.left = `${slideWidth * index}px`;
//     });
//   };

//   // Function to move to the target slide
//   const moveToSlide = (targetSlide: number) => {
//     const track = trackRef.current;
//     if (!track) return;

//     const slides = Array.from(track.children) as HTMLDivElement[];
//     const slideWidth = slides[0].getBoundingClientRect().width;
//     track.style.transform = `translateX(-${slides[targetSlide].style.left})`;
//     setCurrentSlide(targetSlide);
//   };

//   // Handling the previous button click
//   const handlePrevClick = () => {
//     setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
//   };

//   // Handling the next button click
//   const handleNextClick = () => {
//     setCurrentSlide((prev) => (prev + 1) % slideCount);
//   };

//   // Auto slide effect
//   useEffect(() => {
//     const track = trackRef.current;
//     if (!track) return;

//     const slides = Array.from(track.children) as HTMLDivElement[];
//     const slideWidth = slides[0].getBoundingClientRect().width;
//     setSlidePosition(slides, slideWidth);

//     const interval = setInterval(() => {
//       handleNextClick();
//     }, intervalTime);

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, [currentSlide]);

//   useEffect(() => {
//     moveToSlide(currentSlide);
//   }, [currentSlide]);

//   return (
//     <div className="carousel">
//       <button className="carousel-button-left" onClick={handlePrevClick}>
//         {"<"}
//       </button>
//       <div className="carousel-track-container">
//         <div className="carousel-track" ref={trackRef}>
//           {images.map((image, index) => (
//             <div key={index} className="carousel-slide">
//               <img src={image} alt={`Slide ${index}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <button className="carousel-button-right" onClick={handleNextClick}>
//         {">"}
//       </button>
//       <div className="carousel-indicators">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             className={`carousel-indicator ${
//               index === currentSlide ? "active" : ""
//             }`}
//             onClick={() => setCurrentSlide(index)}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
