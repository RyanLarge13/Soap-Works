const soaps = document.querySelectorAll(".grid-item");
const soapDetails = document.querySelectorAll(".descriptive-soap");

const showDetailsSlide = (e) => {
  e.preventDefault();
  console.log(e.target);
};

soaps.forEach((soap) => {
  soap.addEventListener("click", showDetailsSlide);
});
