import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Carousel:React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideIntervalRef = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const slides = [
    { src: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1734047918/anita1_oprpsr.webp", alt: "Image 1" },
    { src: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1734049332/anitaee_1_mto9cx.webp", alt: "Image 2" },
    { src: "https://res.cloudinary.com/duwfbyhyq/image/upload/v1734048380/banner3_ykxr8d.webp", alt: "Image 3" }
  ];

  const moveToSlide = (index: number) => {
    setCurrentSlide(index);
    const track = trackRef.current;
    const slideWidth = track?.children[0]?.clientWidth || 0;
    if (track) {
      track.style.transform = `translateX(-${slideWidth * index}px)`;
    }
  };

  const nextSlide = () => moveToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => moveToSlide((currentSlide - 1 + slides.length) % slides.length);

  useEffect(() => {
    const slideWidth = trackRef.current?.children[0]?.clientWidth || 0;
    slides.forEach((_, index) => {
      if (trackRef.current?.children[index]) {
        trackRef.current.children[index].setAttribute("style", `left: ${slideWidth * index}px`);
      }
    });
  }, []);

  useEffect(() => {
    slideIntervalRef.current = window.setInterval(nextSlide, 5000);
    return () => clearInterval(slideIntervalRef.current as number);
  }, [currentSlide]);

  const handleIndicatorClick = (index: number) => {
    clearInterval(slideIntervalRef.current as number);
    moveToSlide(index);
  };

  return (
    <div className="carousel-container overflow-x-hidden w-full sm:w-[95%] sm:mx-auto mx-auto sm:my-10 ">
      <div
        className="carousel-track flex transition-transform duration-500 rounded-lg"
        ref={trackRef}
        style={{ width: `${100 * slides.length}%` }}
      >
        {slides.map((slide, index) => (
          <div
            className="carousel-slide w-full sm:w-1/2 lg:w-1/3"
            key={index}
            style={{ flex: "0 0 100%" }}
          >
            <Link to="/sell" className="text-none">
              <img src={slide.src} alt={slide.alt} className="w-full h-auto object-cover " />
            </Link>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="carousel-button carousel-button-left absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-12 sm:h-12  rounded-full shadow-md flex justify-center items-center sm:text-lg text-sm font-bold z-10"
      >
        {"<"}
      </button>
      <button
        onClick={nextSlide}
        className="carousel-button carousel-button-right absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-12 sm:h-12 rounded-full shadow-md flex justify-center items-center sm:text-lg text-sm font-bold z-10"
      >
        {">"}
      </button>
      <div className="carousel-indicators flex justify-center mt-2 space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`carousel-indicator w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-[#758DB1]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
