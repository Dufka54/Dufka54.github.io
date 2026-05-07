// 1. Snappier Typing Effect
const text = "Machine Learning & Game Development.";
let index = 0;
const typingElement = document.getElementById("typing-text");

function typeWriter() {
    if (typingElement && index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 70); // Slightly faster for mobile engagement
    }
}

// 2. Optimized Scroll Reveal
const revealElements = document.querySelectorAll(".reveal");

function reveal() {
    const triggerBottom = window.innerHeight * 0.9; 
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < triggerBottom) {
            el.classList.add("active");
        }
    });
}

// 3. Fix for mobile address bar height
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Listeners
window.addEventListener("scroll", reveal);
window.addEventListener("load", () => {
    typeWriter();
    reveal(); // Run once on load
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});