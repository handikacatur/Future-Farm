window.onscroll = (e) => {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 194) {
        navbar.classList.contains('shadow') ? '' : navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
}