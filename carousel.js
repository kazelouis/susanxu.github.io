// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.indicator');

function showSlide(index) {
    // Wrap around logic
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    // Update slides
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
    });

    // Update indicators
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
    });

    // Handle video playback
    const activeVideo = slides[currentSlide].querySelector('video');
    if (activeVideo) {
        activeVideo.currentTime = 0;
        activeVideo.play();
    }
}

// Navigation Controls
document.querySelector('.carousel-prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

document.querySelector('.carousel-next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Indicator Clicks
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => showSlide(index));
});

// Auto-advance (optional)
// setInterval(() => showSlide(currentSlide + 1), 5000);