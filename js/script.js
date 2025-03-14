// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');
const closeMenu = document.querySelector('.close-menu');

mobileMenu.addEventListener('click', () => {
    nav.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    nav.classList.remove('active');
});

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Concent
document.addEventListener('DOMContentLoaded', function() {
    // Check if user has already made a cookie choice
    if (!localStorage.getItem('cookieConsent')) {
        // Show cookie consent popup after a short delay
        setTimeout(function() {
            document.querySelector('.cookie-consent').classList.add('active');
        }, 1000);
    }

    // Accept button event
    document.querySelector('.cookie-accept').addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        document.querySelector('.cookie-consent').classList.remove('active');
    });
});

// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;