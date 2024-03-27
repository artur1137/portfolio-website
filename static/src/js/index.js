// Dark mode functionality
(function(){
    const darkToggle = document.querySelector('.toggle-dark');
    const lightToggle = document.querySelector('.toggle-light');
    const userTheme = localStorage.getItem('theme') === 'dark';

    if (userTheme) {
        document.documentElement.classList.add('dark');
    }

    darkToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', 'dark');
    });

    lightToggle.addEventListener('click', () => {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    });

})();

// Navbar fading on top of the website
(function(){
    const navbar = document.getElementById('navbar');
    const sun = document.getElementById('sun');
    const nav_btns = document.getElementsByClassName('btn-nav')

    window.addEventListener('scroll', function () {
        // Scrolled down
        if (window.scrollY > 0) {
            navbar.classList.remove('hide-bg');
            navbar.classList.remove('hide-border');
            sun.classList.remove('hide-bg')
            for (const btn of nav_btns) {
                btn.classList.remove('hide-bg')
            }
        
        // Scrolled up
        } else {
            navbar.classList.add('hide-bg');
            navbar.classList.add('hide-border');
            sun.classList.add('hide-bg')
            for (const btn of nav_btns) {
                btn.classList.add('hide-bg')
            }
            
        }
    });
})();
