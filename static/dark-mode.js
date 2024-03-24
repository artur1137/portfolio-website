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