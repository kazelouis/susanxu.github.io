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
  
    // GSAP Initialization
    gsap.registerPlugin(ScrollTrigger);
  
    // Hero Animations
    gsap.from(".hero-content", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power4.out"
    });
  
    // Nebula rotation tween
    gsap.to(".nebula-layer", {
      rotation: 360,
      duration: 300,
      repeat: -1,
      ease: "none",
      transformOrigin: "50% 50%"
    });
  
    // Gas-cloud drifting
    gsap.to(".gas-cloud", {
      x: "random(-300, 300)",
      y: "random(-300, 300)",
      scale: "random(0.8, 1.5)",
      duration: "random(40, 80)",
      repeat: -1,
      repeatRefresh: true,
      ease: "power1.inOut"
    });
  
    // Headline fade-in
    gsap.from(".animated-headline span", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1.5,
      ease: "power4.out"
    });
  
    // Floating Orb
    gsap.to(".floating-orb", {
      x: "random(-100, 100, 5)",
      y: "random(-50, 50, 5)",
      scale: "random(0.9, 1.1)",
      duration: 10,
      repeat: -1,
      repeatRefresh: true,
      ease: "power1.inOut"
    });
  
    // Section reveal on scroll
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
  
    // Progress bar fills
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
  
    // Particle field
    function createParticles() {
      const container = document.querySelector('.particles-container');
      for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
  
        gsap.set(particle, {
          x: Math.random() * 100 + 'vw',
          y: Math.random() * 100 + 'vh',
          opacity: () => Math.random() * 0.3 + 0.2,
          scale: () => Math.random() * 0.5 + 0.3
        });
  
        gsap.to(particle, {
          x: '+=random(-200, 200)%',
          y: '+=random(-200, 200)%',
          duration: 'random(20, 40)',
          ease: 'sine.inOut',
          modifiers: {
            x: x => parseFloat(x) % window.innerWidth,
            y: y => parseFloat(y) % window.innerHeight
          },
          repeat: -1
        });
  
        container.appendChild(particle);
      }
    }
    createParticles();
  
    // Expose createShootingStar for console testing
    window.createShootingStar = createShootingStar;
  
    // Kick off shooting-stars loop
    setInterval(() => {
      createShootingStar();
    }, 2000 + Math.random() * 6000);
  
    // Initial few stars
    for (let i = 0; i < 3; i++) {
      setTimeout(createShootingStar, Math.random() * 3000);
    }
  
    // CTA Hover effect
    document.querySelector('.cta-button').addEventListener('mousemove', (e) => {
      const rect = e.target.getBoundingClientRect();
      e.target.style.setProperty('--x', `${e.clientX - rect.left}px`);
      e.target.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
  });
  
  
  // Shooting-star creation function - Modified Version
function createShootingStar() {
    const star = document.createElement('div');
    star.className = 'shooting-star';

    // Set initial position at top-left (just off-screen)
    const startX = -100;
    const startY = Math.random() * window.innerHeight * 0.2;
    const angle = 45; // Fixed 45-degree angle for diagonal movement

    // Create star element with initial styles
    Object.assign(star.style, {
        width: '150px',
        height: '3px',
        background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)',
        opacity: '1', // No fade-in
        zIndex: '9998',
        filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))'
    });

    document.body.appendChild(star);

    // Set initial position and rotation
    gsap.set(star, {
        x: startX,
        y: startY,
        rotation: angle,
        opacity: 1 // Start fully visible
    });

    // Animate across screen
    gsap.to(star, {
        duration: 1.2, // Fixed speed
        x: window.innerWidth + 500,
        y: startY + window.innerHeight,
        ease: "linear",
        onComplete: () => star.remove()
    });
}

// Replace the interval code with this:
const starsPerSecond = 20;
let starInterval = setInterval(() => {
    // Create burst of stars
    for(let i = 0; i < starsPerSecond; i++) {
        createShootingStar();
    }
}, 1000); // Create 20 stars every second

// Remove the initial stars timeout
  