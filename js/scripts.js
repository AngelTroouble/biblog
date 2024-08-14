// Detectar scroll y aplicar efectos
function scrollEffects() {
    const scrollElements = document.querySelectorAll('.scroll-effect');
    const rotateElements = document.querySelectorAll('.scroll-rotate');

    scrollElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });

    rotateElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('rotate');
        }
    });
}

window.addEventListener('scroll', scrollEffects);
