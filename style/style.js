const modal = document.querySelector('#modal');
const cardModal = document.querySelector('#modal .card');

window.onscroll = (e) => {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 194) {
        navbar.classList.contains('shadow') ? '' : navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
}

const modalToggle = () => {
    modal.classList.toggle('open');
    cardModal.classList.toggle('animate');
}

const submitSeminar = () => {
    cardModal.children[1].remove();
    cardModal.innerHTML += `
    <div class="flex">
        <span class="fa fa-check-circle fa-5x text-primary"></span>
        <p style="margin-left: 20px;">Selamat! anda telah terdaftar pada seminar kami. Link room akan kami kirimkan pada email anda dan akan kami ingatkan satu hari sebelum acara. <br> <br> Terima kasih!</p>
    </div>
    `
}

const burgerMenu = document.getElementsByClassName('burger-menu')[0];
const navMobile = document.getElementsByClassName('navbar-mobile')[0];

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('open');
    navMobile.classList.toggle('open')
});