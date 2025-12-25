// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Loader Animation
window.addEventListener('load', () => {
    gsap.to('#loader', {
        opacity: 0,
        duration: 0.5,
        delay: 1,
        onComplete: () => {
            document.getElementById('loader').style.display = 'none';
        }
    });

    // Hero Animation
    gsap.from('.hero-badge', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 1.2
    });

    gsap.from('.hero-text h1', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1.4
    });

    gsap.from('.hero-text h2', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1.6
    });

    gsap.from('.hero-text p', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1.8
    });

    gsap.from('.hero-skills .skill-tag', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        delay: 2,
        ease: 'back.out(1.7)'
    });

    gsap.from('.cta-buttons', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 2.5
    });

    gsap.from('.hero-image-wrapper', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 1.5
    });

    gsap.from('.orbit-icon', {
        opacity: 0,
        scale: 0,
        duration: 0.6,
        stagger: 0.15,
        delay: 2.3,
        ease: 'back.out(1.7)'
    });

    gsap.from('.scroll-indicator', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 2.8
    });
});

// About Section Animation
gsap.from('.about-image-wrapper', {
    opacity: 0,
    x: -100,
    duration: 1,
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.about-content-col', {
    opacity: 0,
    x: 100,
    duration: 1,
    scrollTrigger: {
        trigger: '.about-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.highlight-item', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
        trigger: '.about-highlights',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

// Services Cards Animation - Using simpler animation
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
});

ScrollTrigger.batch('.service-card', {
    onEnter: (elements) => {
        gsap.to(elements, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 0.6,
            ease: 'power2.out'
        });
    },
    start: 'top 85%',
    once: true
});

// Timeline Animation
gsap.from('.timeline-item', {
    opacity: 0,
    x: -50,
    duration: 0.8,
    stagger: 0.3,
    scrollTrigger: {
        trigger: '.timeline',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    }
});

// Portfolio Grid Animation
gsap.from('.portfolio-item', {
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    stagger: 0.15,
    scrollTrigger: {
        trigger: '.portfolio-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

// Contact Section Animation
gsap.from('.contact-content', {
    opacity: 0,
    x: -50,
    duration: 1,
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.contact-decoration', {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    }
});

// Section Headings Animation
gsap.utils.toArray('.section-heading').forEach(heading => {
    gsap.from(heading, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
});

gsap.utils.toArray('.section-subtitle').forEach(subtitle => {
    gsap.from(subtitle, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        scrollTrigger: {
            trigger: subtitle,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });
});

