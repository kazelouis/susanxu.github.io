// script.js
document.addEventListener('DOMContentLoaded', () => {
    // GSAP Initial Animations
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
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Matrix-style Text Animation
    function createMatrixText() {
        const chars = "01";
        const container = document.querySelector('.hero');
        
        for(let i = 0; i < 50; i++) {
            const text = document.createElement('div');
            text.className = 'matrix-text';
            text.style.left = `${Math.random() * 100}%`;
            text.style.animationDelay = `${Math.random() * 20}s`;
            text.textContent = Array(50).fill(null).map(() => 
                chars[Math.floor(Math.random() * chars.length)]
            ).join('');
            container.appendChild(text);
        }
    }

    // Particle Animation Controller
    function animateParticles() {
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            gsap.set(particle, {
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh'
            });
            
            gsap.to(particle, {
                x: '+=200vw',
                y: '+=200vh',
                duration: 15 + Math.random() * 10,
                repeat: -1,
                ease: 'none'
            });
        });
    }

    // Initialize Animations
    createMatrixText();
    animateParticles();

    // Orb Color Shift Animation
    gsap.to('.floating-orb', {
        background: `radial-gradient(circle at 50% 50%, 
            ${getComputedStyle(document.documentElement).getPropertyValue('--secondary-color')} 0%, 
            ${getComputedStyle(document.documentElement).getPropertyValue('--primary-color')} 70%, 
            transparent 100%)`,
        duration: 8,
        repeat: -1,
        yoyo: true
    });

    // CTA Button Hover Effect
    document.querySelector('.cta-button').addEventListener('mousemove', (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.target.style.setProperty('--x', `${x}px`);
        e.target.style.setProperty('--y', `${y}px`);
    });
});