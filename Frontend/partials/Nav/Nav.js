export const toggleMenu = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const spans = document.querySelectorAll(".menu-toggle span");
  const nav = document.querySelector("nav");
  const backdrop = document.querySelector(".nav-backdrop");
  nav.classList.toggle("open");
  spans.forEach((span) => {
    span.classList.toggle("x");
  });
  backdrop.classList.toggle("show");
};

const closeMenu = (e) => {
  e.stopPropagation();
  const backdrop = e.target;
  const nav = document.querySelector("nav");
  const spans = document.querySelectorAll(".menu-toggle span");
  nav.classList.remove("open");
  spans.forEach((span) => {
    span.classList.remove("x");
  });
  backdrop.classList.remove("show");
};

document.querySelector(".menu-toggle").addEventListener("click", toggleMenu);
document.querySelector(".nav-backdrop").addEventListener("click", closeMenu);
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
  });
});
