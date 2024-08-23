  // JavaScript for carousel functionality
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.carousel-button-right');
  const prevButton = document.querySelector('.carousel-button-left');
  const indicators = document.querySelectorAll('.carousel-indicator');
  const slideWidth = slides[0].getBoundingClientRect().width;

  let currentSlide = 0;

  // Position the slides next to one another
  const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  };
  slides.forEach(setSlidePosition);

  // Move to the target slide
  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentSlide);
    });
  };

  // Move to the next slide when the right button is clicked
  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    const targetSlide = slides[currentSlide];
    moveToSlide(track, currentSlide, targetSlide);
  });

  // Move to the previous slide when the left button is clicked
  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    const targetSlide = slides[currentSlide];
    moveToSlide(track, currentSlide, targetSlide);
  });

  // Jump to the slide when an indicator is clicked
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlide = index;
      const targetSlide = slides[currentSlide];
      moveToSlide(track, currentSlide, targetSlide);
    });
  });

  // Automatic slide every 3 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    const targetSlide = slides[currentSlide];
    moveToSlide(track, currentSlide, targetSlide);
  }, 3000);