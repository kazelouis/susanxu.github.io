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

    // Add nebula animations
    // Revised nebula animations
    gsap.to(".nebula-layer", {
        rotation: 360,
        duration: 300,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center"
    });

    gsap.to(".gas-cloud", {
        x: "random(-300, 300)",
        y: "random(-300, 300)",
        scale: "random(0.8, 1.5)",
        duration: "random(40, 80)",
        repeat: -1,
        repeatRefresh: true,
        ease: "power1.inOut"
    });

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

    // Progress Bars
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

    // Particles

    function createParticles() {
        const container = document.querySelector('.particles-container');
        for(let i = 0; i < 100; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            gsap.set(particle, {
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh',
                opacity: () => Math.random() * 0.3 + 0.2,
                scale: () => Math.random() * 0.5 + 0.3
            });
            
            // Create organic movement with sine waves
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

    // Shooting Stars Animation
    function createShootingStar() {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        
        // Random start position and angle
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight * 0.4;
        const angle = -15 + Math.random() * 30; // -15 to +15 degrees
        
        // Set initial position
        gsap.set(star, {
            x: startX,
            y: startY,
            rotation: angle,
            opacity: 0
        });

        // Animate the star
        gsap.to(star, {
            duration: 1.5 + Math.random() * 2,
            x: `+=${window.innerWidth * 1.5}`,
            y: `+=${window.innerWidth * Math.tan(angle * Math.PI/180)}`,
            opacity: 1,
            ease: "power1.out",
            onComplete: () => star.remove(),
            modifiers: {
                x: x => parseFloat(x) % (window.innerWidth * 2),
                y: y => parseFloat(y) % (window.innerHeight * 2)
            }
        });

        document.body.appendChild(star);
    }

    // Create shooting stars randomly
    setInterval(() => {
        createShootingStar();
        // Random interval between 2-8 seconds
    }, 2000 + Math.random() * 6000);

    // Initial stars
    for(let i = 0; i < 3; i++) {
        setTimeout(createShootingStar, Math.random() * 3000);
    }


    // CTA Hover
    document.querySelector('.cta-button').addEventListener('mousemove', (e) => {
        const rect = e.target.getBoundingClientRect();
        e.target.style.setProperty('--x', `${e.clientX - rect.left}px`);
        e.target.style.setProperty('--y', `${e.clientY - rect.top}px`);
    });
});