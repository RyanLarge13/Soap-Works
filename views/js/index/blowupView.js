const backdrop = document.querySelector(".backdrop");
export const showDetailsSlide = (e) => {
  e.target.parentElement.classList.toggle("blow-up-soaps");
  backdrop.classList.toggle('.block');
};
