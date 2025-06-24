const openBtn = document.querySelector('.open-btn');
  const loginOverlay = document.getElementById('loginOverlay');
  const loginModal = document.getElementById('loginModal');
  const registerOverlay = document.getElementById('registerOverlay');
  const registerModal = document.getElementById('registerModal');

  const toRegisterBtn = document.getElementById('toRegister');
  const backToLoginLink = document.getElementById('backToLogin');

  const loginButton = document.getElementById('modalLoginButton');
  const nextLoginButton = document.getElementById('modalNextButton');

  openBtn.addEventListener('click', () => {
    loginOverlay.style.display = 'flex';
  });

  // Переход на регистрацию
  toRegisterBtn.addEventListener('click', () => {
    loginOverlay.style.display = 'none';
    registerOverlay.style.display = 'flex';
  });

  // Вернуться ко входу
  backToLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerOverlay.style.display = 'none';
    loginOverlay.style.display = 'flex';
  });

  // Закрытие при клике вне модального окна
  window.addEventListener('click', (e) => {
    if (e.target === loginOverlay) {
      loginOverlay.style.display = 'none';
    }
    if (e.target === registerOverlay) {
      registerOverlay.style.display = 'none';
    }
  });

loginButton.addEventListener('click', () => {
    window.location.replace('https://fleskosss.github.io/code-of-creativity/');
})

nextLoginButton.addEventListener('click', () => {
    window.location.replace('https://fleskosss.github.io/code-of-creativity/');
})
