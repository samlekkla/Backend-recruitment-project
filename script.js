document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav__list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

  
});
