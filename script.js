// script.js

document.addEventListener('DOMContentLoaded', () => {
    // MENU OPEN/CLOSE ANIMATION
    const menuButton = document.querySelector('.menu-button');
    const menuOverlay = document.querySelector('.menu-overlay');
  
    menuButton.addEventListener('click', () => {
      menuOverlay.classList.toggle('open');
      menuButton.classList.toggle('open');
    });
  
    // SMOOTH SCROLL
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true
    });
  
    // HERO TEXT FADE IN
    gsap.from('.hero-text', {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power2.out',
      delay: 0.5
    });
  
    // PARTICLES BACKGROUND (stars)
    tsParticles.load('tsparticles', {
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      particles: {
        number: {
          value: 100,
          density: { enable: true, value_area: 800 }
        },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
          value: 0.8,
          random: true
        },
        size: {
          value: 2,
          random: true
        },
        move: {
          enable: true,
          speed: 0.2,
          direction: "none",
          outModes: { default: "out" }
        }
      },
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false }
        }
      },
      detectRetina: true
    });
  
    // ————— SHOOTING STARS SETUP —————
  
    const STAR_RATE   = 20;            // stars per second
    const STAR_SPEED  = 1.5;            // how long (s) each star takes to cross
    const SHOOT_ANGLE = -20;            // degrees (negative = up→right)
  
    const radians = SHOOT_ANGLE * Math.PI / 180;
    const deltaX  = window.innerWidth * 1.5;
    const deltaY  = deltaX * Math.tan(radians);
  
    function createShootingStar() {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      document.body.appendChild(star);
  
      const startX = Math.random() * window.innerWidth;
      const startY = -10;
  
      gsap.set(star, { x: startX, y: startY, rotation: SHOOT_ANGLE, opacity: 0 });
  
      gsap.to(star, {
        duration: STAR_SPEED,
        x: `+=${deltaX}`,
        y: `+=${deltaY}`,
        opacity: 1,
        ease: 'none',
        onComplete: () => star.remove()
      });
    }
  
    const interval = 1000 / STAR_RATE;
    setInterval(createShootingStar, interval);
  
    // ————— END SHOOTING STARS SETUP —————
  
    // CTA BUTTON HOVER ANIMATION
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseenter', () => {
      gsap.to(ctaButton, { scale: 1.1, duration: 0.3, ease: 'power2.out' });
    });
    ctaButton.addEventListener('mouseleave', () => {
      gsap.to(ctaButton, { scale: 1, duration: 0.3, ease: 'power2.out' });
    });
  });
  