document.addEventListener('DOMContentLoaded', function() {

  const menu = document.getElementById('menu');

  if (window.innerWidth <= 768) {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
  

  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      menu.style.display = 'flex'; 
    } else if (window.innerWidth <= 768 && !menu.classList.contains('active')) {
      menu.style.display = 'none'; 
    }
  });
});

function toggleMenu() {
  const menu = document.getElementById('menu');
  
  if (menu.style.display === 'flex' || menu.style.display === 'block') {
    menu.style.display = 'none';
    menu.classList.remove('active');
  } else {

    menu.style.display = window.innerWidth <= 768 ? 'block' : 'flex';
    menu.classList.add('active');
  }
}