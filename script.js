
let currentIndex = 0;

function showSlide(index) {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].offsetWidth;

  if (index < 0) {
    index = slides.length - 1;
  } else if (index >= slides.length) {
    index = 0;
  }

  currentIndex = index;
  const translateValue = -index * slideWidth;
  sliderWrapper.style.transform = `translateX(${translateValue}px)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Automatic sliding every 3 seconds
setInterval(() => {
  nextSlide();
}, 3000);