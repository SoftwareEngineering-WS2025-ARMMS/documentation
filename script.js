document.addEventListener("DOMContentLoaded", () => {
    const sectionHeaders = document.querySelectorAll('.section-header');

    sectionHeaders.forEach(header => {
        const title = header.querySelector('.section-title');
        const subMenu = header.querySelector('.sub-menu');
        const arrow = header.querySelector('.arrow');

        title.addEventListener('click', () => {
            const isOpen = subMenu.classList.contains('open');

            // Schließt alle anderen Menüs
            document.querySelectorAll('.sub-menu').forEach(menu => menu.classList.remove('open'));
            document.querySelectorAll('.arrow').forEach(arr => arr.style.transform = 'rotate(0deg)');

            // Öffnet nur das geklickte Menü
            if (!isOpen) {
                subMenu.classList.add('open');
                arrow.style.transform = 'rotate(90deg)';
            }
        });
    });
});
