window.onload = () => {
    const navMenu = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-item');
    const hamburger = document.querySelector('.nav-toggle');
  
    const toggle = e => e.classList.toggle('is-active');
    
    hamburger.addEventListener('click', () => toggle(navMenu));
    navItems.forEach(item => item.addEventListener('click', () => navMenu.classList.remove('is-active')));
  }
  