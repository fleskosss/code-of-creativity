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
    } else {
        document.getElementsByTagName('body')[0].style.overflow = '';
    }
})

const buttons = document.getElementsByTagName('button');

for (let button of buttons) {
    button.addEventListener('click', () => {
        window.location.replace('https://m1x7urk44.github.io/code-of-creativity/ohibka.html')
    })
}