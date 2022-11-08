const soaps = document.querySelectorAll(".grid-item");

export const showDetailsSlide = (e) => {
  e.target.classList.add("blow-up-soaps");
};

soaps.forEach((soap) => {
  soap.addEventListener("click", showDetailsSlide);
});
