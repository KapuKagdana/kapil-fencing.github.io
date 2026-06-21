// main.js - Making the site interactive

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling for "Free Quote" button
    const quoteButton = document.querySelector('.btn');
    const contactSection = document.querySelector('#contact');
    
    if (quoteButton && contactSection) {
        quoteButton.addEventListener('click', (e) => {
            e.preventDefault();
            contactSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 2. Simple Theme Toggle (Day/Night mode)
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = "Toggle Theme";
    toggleBtn.style.position = "fixed";
    toggleBtn.style.bottom = "20px";
    toggleBtn.style.right = "20px";
    document.body.appendChild(toggleBtn);

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
