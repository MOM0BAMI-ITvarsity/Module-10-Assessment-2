// Smooth Scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Scroll to the targeted section smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adding fade-in effect on scroll for elements with class 'fade-in'
window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            element.classList.add('visible');
        }
    });
});

// Function to add smooth animations on page load (for items with 'fade-in' class)
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(element => {
            element.classList.add('visible');
        });
    }, 100); // Adds a slight delay for better loading effect
});

// JavaScript for interactive meal item hover effects
const mealItems = document.querySelectorAll('.meals-list-item');
mealItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
        item.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    });
});

// Example of dynamic class toggle (for meal detail page)
const recipeDetails = document.querySelectorAll('.recipe-details h2');
recipeDetails.forEach(detail => {
    detail.addEventListener('click', () => {
        const content = detail.nextElementSibling;
        if (content.style.display === 'none') {
            content.style.display = 'block';
            detail.classList.add('active');
        } else {
            content.style.display = 'none';
            detail.classList.remove('active');
        }
    });
});

// Adding the fade-in class to elements when they come into view on scroll
const fadeInElements = document.querySelectorAll('.fade-in');
const checkScroll = () => {
    fadeInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', checkScroll);
checkScroll(); // Check immediately on page load
