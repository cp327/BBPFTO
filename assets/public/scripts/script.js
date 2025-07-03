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

