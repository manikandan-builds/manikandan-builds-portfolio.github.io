window.onload = () => {
  const navMenu = document.querySelector('.nav-menu');
  const hamburger = document.querySelector('.nav-toggle');

  hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('is-active');
  });
};
