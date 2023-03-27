// ======================== toggle icon navbar =================================
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// ======================== section active links ================

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // ======================== stick navbar ==============
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // ========================  remove toggle icon and navbar =================================
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// ======================== scrol reveal  ==============

ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portifolio-box, .contact-box",
  { origin: "top" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// ======================== typed js  ==============

const typed = new Typed('.multiple-text',{
  strings: ['Desenvolvedor Front-End', 'Desenvolvedor Front-End'],
  typedSpeed: 100,
  backSpeed: 100,
  backDeplay: 1000,
  loop: true
});
