const portfolioSlider = {
  slides: [
    { id: 1, image: 'IMG GLAVNAI/скролл (1).png', alt: 'Изображение 1' },
    { id: 2, image: 'IMG GLAVNAI/скролл (2).png', alt: 'Изображение 2' },
    { id: 3, image: 'IMG GLAVNAI/скролл (3).png', alt: 'Изображение 3' },
    { id: 4, image: 'IMG GLAVNAI/скролл (4).png', alt: 'Изображение 4' },
    { id: 5, image: 'IMG GLAVNAI/скролл (5).png', alt: 'Изображение 5' },
    { id: 6, image: 'IMG GLAVNAI/скролл (6).png', alt: 'Изображение 6' }
  ],
  currentIndex: 0,
  isAnimating: false,
  autoPlayInterval: null,
  slideWidth: 0,

  init: function() {
    this.cacheDOM();
    this.setupSlider();
    this.bindEvents();
    this.startAutoPlay();
    window.addEventListener('resize', () => this.handleResize());
  },

  cacheDOM: function() {
    this.sliderElement = document.querySelector('.slider');
    this.slidesContainer = document.querySelector('.slides');
    this.prevBtn = document.querySelector('.prev-btn');
    this.nextBtn = document.querySelector('.next-btn');
  },

  setupSlider: function() {
    // Рассчитываем ширину слайда
    this.slideWidth = this.sliderElement.clientWidth;
    this.slidesContainer.style.width = `${this.slideWidth * this.slides.length}px`;
    
    // Клонируем слайды для бесшовного перехода
    const firstSlideClone = this.slides[0];
    const lastSlideClone = this.slides[this.slides.length - 1];
    
    this.slidesContainer.innerHTML = [
      lastSlideClone,
      ...this.slides,
      firstSlideClone
    ].map((slide, index) => `
      <div class="slide-wrapper" style="width: ${this.slideWidth}px">
        <img src="${slide.image}" class="slide" alt="${slide.alt}" data-id="${slide.id}">
      </div>
    `).join('');
    
    // Устанавливаем начальную позицию
    this.currentIndex = 1;
    this.updateSlider(false);
  },

  bindEvents: function() {
    this.prevBtn.addEventListener('click', () => this.goToPrev());
    this.nextBtn.addEventListener('click', () => this.goToNext());
    
    this.slidesContainer.addEventListener('transitionend', () => {
      this.handleTransitionEnd();
    });
  },

  goToPrev: function() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex--;
    this.updateSlider(true);
    this.resetAutoPlay();
  },

  goToNext: function() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex++;
    this.updateSlider(true);
    this.resetAutoPlay();
  },

  updateSlider: function(withAnimation = true) {
    this.slidesContainer.style.transition = withAnimation ? 'transform 0.5s ease-in-out' : 'none';
    this.slidesContainer.style.transform = `translateX(-${this.currentIndex * this.slideWidth}px)`;
  },

  handleTransitionEnd: function() {
    this.isAnimating = false;
    
    // Если достигли клонированного первого слайда (индекс 0)
    if (this.currentIndex === 0) {
      this.currentIndex = this.slides.length;
      this.updateSlider(false);
    }
    // Если достигли клонированного последнего слайда
    else if (this.currentIndex === this.slides.length + 1) {
      this.currentIndex = 1;
      this.updateSlider(false);
    }
  },

  startAutoPlay: function() {
    this.autoPlayInterval = setInterval(() => {
      this.goToNext();
    }, 3000);
  },

  resetAutoPlay: function() {
    clearInterval(this.autoPlayInterval);
    this.startAutoPlay();
  },

  handleResize: function() {
    this.slideWidth = this.sliderElement.clientWidth;
    document.querySelectorAll('.slide-wrapper').forEach(wrapper => {
      wrapper.style.width = `${this.slideWidth}px`;
    });
    this.slidesContainer.style.width = `${this.slideWidth * (this.slides.length + 2)}px`;
    this.updateSlider(false);
  }
};

// Инициализация слайдера
document.addEventListener('DOMContentLoaded', () => portfolioSlider.init());