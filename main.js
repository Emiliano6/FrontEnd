document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('menu-open');
    menuToggle.textContent = mobileMenu.classList.contains('menu-open') ? '✕' : '☰';
  });
});

function toggleMenu() {
  const menu = document.getElementById('menu');
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'block';
  }
}