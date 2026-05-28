// LOADER
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1200);
});

// SCROLL REVEAL
function revealElements(){
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealElements);
revealElements();

// TOGGLE HAMBURGER MENU
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const allLinks = document.querySelectorAll('.nav-links a');

// Klik Garis Tiga untuk Buka/Tutup Menu
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Otomatis Tutup Menu setelah Link di-klik
allLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});
