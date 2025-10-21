document.addEventListener('DOMContentLoaded', function (event) {
  let circle = document.querySelectorAll('.circle');
  circle.forEach(function (progress) {
    let degree = 0;
    var targetDegree = parseInt(progress.getAttribute('data-degree'));

    const color = progress.getAttribute('data-color');
    let number = progress.querySelector('.number');
    var interval = setInterval(function () {
      degree += 1;
      if (degree > targetDegree) {
        clearInterval(interval);
        return;
      }
      progress.style.background = `conic-gradient(${color} ${degree}%, #222 0%)`;
      number.innerHTML = degree + '<span>%</span>';
      number.style.color = color;
    }, 50);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// Smooth scrolling for section links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Change navbar background when scrolling
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// Close offcanvas automatically when a link is clicked
const offcanvasElement = document.getElementById('offcanvasNavbar');
const offcanvas = new bootstrap.Offcanvas(offcanvasElement);

document.querySelectorAll('#offcanvasNavbar .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    offcanvas.hide(); // Hide offcanvas after clicking a link
  });
});
