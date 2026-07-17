// CONSTANTES
const btn_menu = document.querySelector('.btn-menu');
const btns_opcion = document.querySelectorAll('.btn-opcion');
// FIN DE LAS CONSTANTES

// EVENTOS CON BOTONES (MENÚ MÓVIL)
btn_menu.addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});

btns_opcion.forEach((btn_opcion) => {
    btn_opcion.addEventListener('click', () => {
        const mobileMenu = document.querySelector('.mobile-menu');
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('flex');
    });
});