default function decorate(block) {  
    let currentIndex = 0;  
    const slides = block.querySelectorAll('.carousel div');  
    const totalSlides = slides.length;  
  
    function showSlide(index) {  
        slides.forEach((slide, i) => {  
            slide.style.transform = `translateX(${-100 * index}%)`;  
        });  
    }  
  
    function nextSlide() {  
        currentIndex = (currentIndex + 1) % totalSlides;  
        showSlide(currentIndex);  
    }  
  
    function prevSlide() {  
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;  
        showSlide(currentIndex);  
    }  
  
    block.querySelector('.nav-button.left').addEventListener('click', prevSlide);  
    block.querySelector('.nav-button.right').addEventListener('click', nextSlide);  
  
    // Initialize the first slide  
    showSlide(currentIndex);  
}  
