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
  
    // PARTICLES BACKGROUND (small static stars)
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
    const STAR_RATE = 1.5; // stars per second
    const STAR_SPEED_MIN = 1.5; // minimum animation duration
    const STAR_SPEED_MAX = 3; // maximum animation duration
    const ANGLE_RANGE = 45; // degrees (-22.5° to +22.5°)
  
    // Add shooting star styles dynamically
    const style = document.createElement('style');
    style.textContent = `
      .shooting-star {
        position: fixed;
        width: 100px;
        height: 2px;
        background: linear-gradient(90deg, 
            rgba(255,255,255,0) 0%, 
            rgba(255,255,255,0.8) 50%, 
            rgba(255,255,255,0) 100%);
        pointer-events: none;
        z-index: 9998;
        filter: drop-shadow(0 0 10px rgba(255,255,255,0.5));
      }
      .shooting-star::before {
        content: '';
        position: absolute;
        right: 0;
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
        filter: blur(2px);
      }
    `;
    document.head.appendChild(style);
  
    function createShootingStar() {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      document.body.appendChild(star);
  
      const startX = Math.random() * window.innerWidth * 1.5;
      const startY = -10;
  
      const angle = -ANGLE_RANGE/2 + Math.random() * ANGLE_RANGE;
      const radians = angle * Math.PI / 180;
  
      const deltaX = window.innerWidth * 2;
      const deltaY = deltaX * Math.tan(radians);
  
      const duration = STAR_SPEED_MIN + Math.random() * (STAR_SPEED_MAX - STAR_SPEED_MIN);
  
      gsap.set(star, {
        x: startX,
        y: startY,
        rotation: angle,
        opacity: 0
      });
  
      gsap.to(star, {
        duration: duration,
        x: `+=${deltaX}`,
        y: `+=${deltaY}`,
        opacity: 1,
        ease: 'power1.in',
        onComplete: () => star.remove()
      });
  
      // Fade out toward the end
      gsap.to(star, {
        opacity: 0,
        duration: 0.5,
        delay: duration - 0.5,
        ease: 'power1.out'
      });
    }
  
    function scheduleStar() {
      createShootingStar();
      setTimeout(scheduleStar, (1000 / STAR_RATE) * (0.5 + Math.random()));
    }
    scheduleStar();
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
  