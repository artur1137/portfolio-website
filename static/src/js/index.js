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
    // const line_l = document.getElementById('px-line-light');
    // const line_d = document.getElementById('px-line-dark');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            navbar.classList.add('bg-slate-100');
            navbar.classList.add('dark:bg-zinc-900');
            // line_l.classList.remove('hidden');
            // line_d.classList.add('dark:block');
        
        } else {
            navbar.classList.remove('bg-slate-100');
            navbar.classList.remove('dark:bg-zinc-900');
            // line_l.classList.add('hidden');
            // line_d.classList.remove('dark:block');
            
        }
    });
})();

// bg-slate-100 dark:bg-zinc-900