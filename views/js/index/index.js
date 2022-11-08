import { showDetailsSlide } from "./blowupView.js";

const soapGrid = document.querySelector(".soaps");
const soapItems = document.querySelectorAll(".grid-item");
const getRandom = () => {
  return Math.floor(Math.random() * 4);
};
soapItems.forEach((item) => {
  let random = getRandom();
  item.classList.add(`height-${random}`);
});
soapItems.forEach((soap) => {
  soap.addEventListener("click", showDetailsSlide);
});
setTimeout(() => {
  const masonry = new Masonry(soapGrid, {
    itemSelector: ".grid-item",
    columnWidth: 0,
    percentPosition: true,
  });
  for (let i = 0; i < soapItems.length; i++) {
    setTimeout(() => {
      soapItems[i].style.opacity = "1";
    }, 250 * i);
  }
}, 500);
