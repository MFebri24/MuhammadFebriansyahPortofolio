document.addEventListener('DOMContentLoaded', function() {
    // === Fungsionalitas Sidebar ===
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const sidebar = document.getElementById('sidebar-menu');
    const closeBtn = document.getElementById('close-btn');

    if (menuToggleBtn && sidebar && closeBtn) {
        menuToggleBtn.addEventListener('click', () => {
            sidebar.classList.add('open');
        });
    
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('open');
        });
    
        document.querySelectorAll('.sidebar-nav a').forEach(link => {
            link.addEventListener('click', () => {
                sidebar.classList.remove('open');
            });
        });
    }
});