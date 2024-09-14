document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
    });

    const navItems = document.querySelectorAll('.nav-list a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navList.classList.remove('show');
        });
    });
});
