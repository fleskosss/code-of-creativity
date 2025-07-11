const openModalButton = document.getElementById('burgerMenu');
const header = document.getElementById('Header');

openModalButton.addEventListener('click', () => {
    header.classList.toggle('active');
    if (header.classList.contains('active')) {
        document.getElementById('navList').style.animation = '0.3s showUp';
        setTimeout(() => {
            document.getElementById('navList').style.animation = '';
        }, 300);
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';

        // Переключить лого
        document.getElementById('Logo').getElementsByTagName('img')[0].src = "IMG GLAVNAI/logo-active.svg";

        // Переключить меню profile-icon
        document.getElementById('accountButton').getElementsByTagName('img')[0].src = "IMG GLAVNAI/profile-black-icon.svg";
    } else {
        document.getElementsByTagName('body')[0].style.overflow = '';

        // Переключить лого
        document.getElementById('Logo').getElementsByTagName('img')[0].src = "IMG GLAVNAI/логотип.png";

        // Переключить меню profile-icon
        document.getElementById('accountButton').getElementsByTagName('img')[0].src = "IMG GLAVNAI/profile-white-icon.svg";
    }
})

const buttons = document.getElementsByTagName('button');

for (let button of buttons) {
    if (button.classList.contains('error-link')) {
        button.addEventListener('click', () => {
            window.location.replace('https://fleskosss.github.io/code-of-creativity/ohibka.html');
        })
    }
}

document.getElementById('Logo').addEventListener('click', () => {
    window.location.replace('https://fleskosss.github.io/code-of-creativity/');
})