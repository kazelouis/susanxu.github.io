// script.js
document.addEventListener('DOMContentLoaded', () => {
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

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Elements
    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power4.out'
    });

    // Floating Orb Animation
    gsap.to(".floating-orb", {
        x: "random(-100, 100, 5)",
        y: "random(-50, 50, 5)",
        scale: "random(0.9, 1.1)",
        duration: 10,
        repeat: -1,
        repeatRefresh: true,
        ease: "power1.inOut"
    });

    // Section Animations
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Add this to your existing GSAP animations
    gsap.from(".animated-headline span", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1.5,
        ease: "power4.out"
    });

    // Progress Bar Animations
    gsap.utils.toArray('.progress-bar span').forEach(bar => {
        gsap.from(bar, {
            width: 0,
            scrollTrigger: {
                trigger: bar,
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Particle Animation (50 particles)
    function createParticles() {
        const container = document.querySelector('.particles-container');
        for(let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            gsap.set(particle, {
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh',
                opacity: 0.3,
                scale: Math.random() * 0.5 + 0.5
            });
            
            gsap.to(particle, {
                x: '+=200vw',
                y: '+=200vh',
                duration: 15 + Math.random() * 10,
                repeat: -1,
                ease: 'none'
            });
            
            container.appendChild(particle);
        }
    }
    createParticles();

    // CTA Button Hover Effect
    document.querySelector('.cta-button').addEventListener('mousemove', (e) => {
        const rect = e.target.getBoundingClientRect();
        e.target.style.setProperty('--x', `${e.clientX - rect.left}px`);
        e.target.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
});