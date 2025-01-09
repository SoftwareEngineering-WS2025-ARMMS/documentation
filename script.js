document.addEventListener("DOMContentLoaded", () => {
    const sectionHeaders = document.querySelectorAll('.section-header');

    sectionHeaders.forEach(header => {
        const title = header.querySelector('.section-title');
        const subMenu = header.querySelector('.sub-menu');
        const arrow = header.querySelector('.arrow');

        title.addEventListener('click', (event) => {
            event.stopPropagation(); // Verhindert das Schließen der äußeren Menüs
            const isOpen = subMenu.classList.contains('open');

            // Nur das geklickte Untermenü öffnen oder schließen
            subMenu.classList.toggle('open', !isOpen);
            arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)';
        });
    });
});
