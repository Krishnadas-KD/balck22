  // Prevent excessive zooming
  document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
});

// Handle font scaling on zoom
let lastZoom = window.devicePixelRatio;
window.addEventListener('resize', function() {
    const currentZoom = window.devicePixelRatio;
    if (Math.abs(currentZoom - lastZoom) > 0.1) {
        document.body.classList.add('zoomed');
        lastZoom = currentZoom;
    } else {
        document.body.classList.remove('zoomed');
    }
});

function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal);

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    reveal();
    
    // Add reveal class to sections you want to animate
    const sections = document.querySelectorAll('.about-section, .academy-section, .shop-section, .follow-section');
    sections.forEach(section => {
        section.classList.add('reveal');
    });
});

// Go to Top Button
const goTopBtn = document.querySelector('.go-top-btn');

// Show/hide button based on scroll position
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        goTopBtn.classList.add('active');
    } else {
        goTopBtn.classList.remove('active');
    }
});

// Smooth scroll to top when clicked
goTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});