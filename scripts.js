document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle'); // Botón toggle
    const sidebar = document.querySelector('.sidebar'); // Sidebar
    const mainNav = document.querySelector('.main-nav ul'); // Menú principal
    const sidebarNav = document.querySelector('.sidebar-nav'); // Menú en el sidebar

    // Mover los elementos del menú al sidebar cuando sea necesario
    function moveMenuItems() {
        if (window.innerWidth <= 768 && mainNav.children.length > 0) {
            while (mainNav.firstChild) {
                sidebarNav.appendChild(mainNav.firstChild);
            }
        } else if (window.innerWidth > 768 && sidebarNav.children.length > 0) {
            while (sidebarNav.firstChild) {
                mainNav.appendChild(sidebarNav.firstChild);
            }
        }
    }

    // Inicializar el menú al cargar
    moveMenuItems();

    // Escuchar el redimensionado de la ventana
    window.addEventListener('resize', moveMenuItems);

    // Alternar la visibilidad del sidebar al hacer clic en el botón toggle
    menuToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });

    // Cerrar el sidebar al hacer clic fuera de él
    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
});
