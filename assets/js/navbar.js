// Dynamic Navbar Transparency
function updateNavbarTransparency() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
    const heroHeight = document.querySelector('.hero').offsetHeight;

    if (scrollPosition < heroHeight - 100) {
        header.classList.add('transparent');
    } else {
        header.classList.remove('transparent');
    }
}

window.addEventListener('scroll', updateNavbarTransparency);
window.addEventListener('load', updateNavbarTransparency);

// Burger Menu Toggle
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved dark mode preference and update icons/accessibility
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

function updateDarkToggle() {
    // Accessibility attributes and hint
    const isDark = body.classList.contains('dark-mode');
    darkModeToggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    darkModeToggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
}

// initialize state
updateDarkToggle();

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }

    updateDarkToggle();
});
