document.addEventListener('DOMContentLoaded', function() {
// Sample images (you can replace with your own)
const images = [
    'IMG GLAVNAI/скролл (1).png',
    'IMG GLAVNAI/скролл (2).png',
    'IMG GLAVNAI/скролл (3).png',
    'IMG GLAVNAI/скролл (4).png',
    'IMG GLAVNAI/скролл (5).png'
];

const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
const sliderNav = document.querySelector('.slider-nav');
const prevButton = document.querySelector('.slider-arrow.prev');
const nextButton = document.querySelector('.slider-arrow.next');

let currentIndex = 0;
const visibleSlides = 5;
const slideWidth = 325 + 20; // width + gap

// Create slides and navigation buttons
function initSlider() {
    // Clear existing slides and buttons
    slider.innerHTML = '';
    sliderNav.innerHTML = '';
    
    // Create slides (we'll create extra copies for seamless looping)
    for (let i = 0; i < images.length * 5; i++) {
        const imgIndex = i % images.length;
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `<img src="${images[imgIndex]}" alt="Slide ${imgIndex + 1}">`;
        slider.appendChild(slide);
        
        // Only create navigation buttons for original images
        if (i < images.length) {
            const button = document.createElement('button');
            button.addEventListener('click', () => goToSlide(imgIndex));
            sliderNav.appendChild(button);
        }
    }
    
    // Set initial position to the middle set of duplicates
    currentIndex = images.length;
    updateSlider();
}

// Update slider position
function updateSlider() {
    const offset = slideWidth * currentIndex;
    slider.style.transform = `translateX(-${offset}px)`;
    
    // Update active buttons based on current visible slides
    const buttons = sliderNav.querySelectorAll('button');
    const activeIndex = currentIndex % images.length;
    buttons.forEach((button, index) => {
        button.classList.toggle('active', index === activeIndex);
    });
    
    // Check if we need to reset position for infinite loop
    if (currentIndex >= images.length * 2) {
        setTimeout(() => {
            slider.style.transition = 'none';
            currentIndex = images.length;
            updateSlider();
            // Force reflow
            void slider.offsetWidth;
            slider.style.transition = 'transform 0.5s ease-in-out';
        }, 500);
    } else if (currentIndex <= 0) {
        setTimeout(() => {
            slider.style.transition = 'none';
            currentIndex = images.length;
            updateSlider();
            // Force reflow
            void slider.offsetWidth;
            slider.style.transition = 'transform 0.5s ease-in-out';
        }, 500);
    }
}

// Go to specific slide
function goToSlide(index) {
    const targetIndex = images.length + index;
    if (Math.abs(targetIndex - currentIndex) > images.length / 2) {
        // If the jump is more than half the length, go the other way
        currentIndex = targetIndex > currentIndex ? 
            targetIndex - images.length : 
            targetIndex + images.length;
    } else {
        currentIndex = targetIndex;
    }
    slider.style.transition = 'transform 0.5s ease-in-out';
    updateSlider();
}

// Next slide
function nextSlide() {
    currentIndex++;
    slider.style.transition = 'transform 0.5s ease-in-out';
    updateSlider();
}

// Previous slide
function prevSlide() {
    currentIndex--;
    slider.style.transition = 'transform 0.5s ease-in-out';
    updateSlider();
}

// Handle window resize
window.addEventListener('resize', function() {
    updateSlider();
});

// Auto-advance slides (optional)
let slideInterval = setInterval(nextSlide, 3000);

// Pause on hover
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(nextSlide, 3000);
});

// Initialize the slider
initSlider();

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    }
});

// Add arrow button events
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
});