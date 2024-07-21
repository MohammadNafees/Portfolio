document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.projects', { delay: 500 });
ScrollReveal().reveal('.technical-skills', { delay: 500 });
ScrollReveal().reveal('.cards', { delay: 500 });