// script.js
document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations
    gsap.to(".floating-orb", {
        x: "random(-100, 100, 5)",
        y: "random(-50, 50, 5)",
        duration: 8,
        repeat: -1,
        repeatRefresh: true,
        ease: "power1.inOut"
    });

    gsap.to(".animated-headline", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out"
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});