const navElement = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 56) {
        navElement.classList.add('navbar-scrolled');
    } else if (window.scrollY < 56){
        navElement.classList.remove('navbar-scrolled');
    }
});