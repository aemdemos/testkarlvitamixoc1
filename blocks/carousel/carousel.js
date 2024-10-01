export default function decorate(block) {  
    let currentIndex = 0;  
    const slides = block.querySelectorAll('.carousel > div');  
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
  
    const leftButton = document.createElement('button');  
    leftButton.className = 'nav-button left';  
    leftButton.textContent = '❮';  
    leftButton.addEventListener('click', prevSlide);  
  
    const rightButton = document.createElement('button');  
    rightButton.className = 'nav-button right';  
    rightButton.textContent = '❯';  
    rightButton.addEventListener('click', nextSlide);  
  
    block.appendChild(leftButton);  
    block.appendChild(rightButton);  
  
    // Initialize the first slide  
    showSlide(currentIndex);  
}  
