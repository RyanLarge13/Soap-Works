export const toggleMenu = (e) => {
  e.preventDefault();
  const spans = document.querySelectorAll(".menu-toggle span");
  const nav = document.querySelector("nav");
  nav.classList.toggle("open");
  spans.forEach((span) => {
  	span.classList.toggle('x');
  });
};

document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);
