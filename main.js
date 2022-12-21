document.getElementById('hamburger').addEventListener('click', function() {
    var mobileMenu = document.querySelector('section.mobile-menu');
    mobileMenu.style.display = 'block';
  });

document.querySelector('.close-button').addEventListener('click', function() {
    var mobileMenu = document.querySelector('section.mobile-menu');
    mobileMenu.style.display = 'none';
  });

