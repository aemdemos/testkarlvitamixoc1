export default function decorate(block) {  
    let currentIndex = 0;  
    const slides = Array.from(block.children);  
    const totalSlides = slides.length;  
  
    // Create a container for the carousel items  
    const carouselContainer = document.createElement('div');  
    carouselContainer.className = 'carousel-container';  
  
    // Wrap each slide in a .carousel-item div and add to the carousel container  
    slides.forEach(slide => {  
        const carouselItem = document.createElement('div');  
        carouselItem.className = 'carousel-item';  
        carouselItem.appendChild(slide);  
        carouselContainer.appendChild(carouselItem);  
    });  
  
    // Clear the block and add the carousel container  
    block.innerHTML = '';  
    block.appendChild(carouselContainer);  
  
    // Create and append navigation buttons  
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
  
    function showSlide(index) {  
        carouselContainer.style.transform = `translateX(${-100 * index}%)`;  
    }  
  
    function nextSlide() {  
        currentIndex = (currentIndex + 1) % totalSlides;  
        showSlide(currentIndex);  
    }  
  
    function prevSlide() {  
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;  
        showSlide(currentIndex);  
    }  
  
    // Initialize the first slide  
    showSlide(currentIndex);  
}  
