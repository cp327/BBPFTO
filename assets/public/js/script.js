// Menú Hamburguesa
document.addEventListener("DOMContentLoaded", function () {
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
let isOpen = false;

menuBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    mobileMenu.style.maxHeight = isOpen ? mobileMenu.scrollHeight + "px" : "0";
});

const menuLinks = mobileMenu.querySelectorAll("a");
menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
    isOpen = false;
    mobileMenu.style.maxHeight = "0";
    });
});


// Back to Top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
    backToTop.classList.remove("opacity-0", "pointer-events-none");
    } else {
    backToTop.classList.add("opacity-0", "pointer-events-none");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
});


function toggleAccordion(element) {
const content = element.querySelector('.accordion-content');
const icon = element.querySelector('.accordion-icon');
const isOpen = !content.classList.contains('hidden');

document.querySelectorAll('.accordion-item').forEach(item => {
    const otherContent = item.querySelector('.accordion-content');
    const otherIcon = item.querySelector('.accordion-icon');
    if (otherContent && !otherContent.classList.contains('hidden')) {
    otherContent.classList.add('hidden');
    otherIcon.textContent = '▼';
    otherIcon.classList.remove('rotate-180');
    }
});

if (!isOpen) {
    content.classList.remove('hidden');
    icon.textContent = '▼';
    icon.classList.add('rotate-180');
} else {
    content.classList.add('hidden');
    icon.textContent = '▼';
    icon.classList.remove('rotate-180');
}
}




