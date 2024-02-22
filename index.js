/* -----------------------------------------
  Have focus outline only for keyboard users 
 ---------------------------------------- */
 const slides = document.querySelectorAll('.slide');
 let currentSlide = 0;
 
 function showSlide(n) {
   slides[currentSlide].style.display = 'none';
   currentSlide = (n + slides.length) % slides.length;
   slides[currentSlide].style.display = 'block';
 }
 
 function nextSlide() {
   showSlide(currentSlide + 1);
 }
 
 setInterval(nextSlide, 5000); // Cambia el slide cada 5 segundos
 
const handleFirstTab = (e) => {
  if(e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing')

    window.removeEventListener('keydown', handleFirstTab)
    window.addEventListener('mousedown', handleMouseDownOnce)
  }

}

const handleMouseDownOnce = () => {
  document.body.classList.remove('user-is-tabbing')

  window.removeEventListener('mousedown', handleMouseDownOnce)
  window.addEventListener('keydown', handleFirstTab)
}

window.addEventListener('keydown', handleFirstTab)

const backToTopButton = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

let alterStyles = (isBackToTopRendered) => {
  backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTopButton.style.transform = isBackToTopRendered
    ? "scale(1)"
    : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 700) {
    isBackToTopRendered = true;
    alterStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    alterStyles(isBackToTopRendered);
  }
});
