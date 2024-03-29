import { toggleMenu } from "../partials/Nav/Nav.js";
import { date } from "../partials/Footer/Footer.js";
import { showCart, getItems, createElement } from "../partials/Cart/Cart.js";
import '../partials/Header/Header.js'

const buyBtns = document.querySelectorAll(".buy-btn");
const setStorage = async (e) => {
  const parent = e.target.parentElement;
  const ifOnMain = document.querySelector(".blowup-view");
  const title = parent.querySelector("h2").innerText;
  const cartShown = document.querySelector(".cart").classList.contains("show");
  const itemExsists = localStorage.getItem(title);
  const devUrl = "http://localhost:8080";
  const productionUrl = "https://soap-works-production.up.railway.app";
  let quantity = 1;
  
  if (itemExsists) return;
  
  e.target.innerText = `${title} Added`;
  setTimeout(() => {
    e.target.innerText = `Add ${title} to cart`;
  }, 3000);

  await fetch(`${productionUrl}/addtocart/${title}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      const formattedData = data.foundProduct[0];
      localStorage.setItem(`${title}`, JSON.stringify(formattedData));
      localStorage.setItem(`${formattedData._id}`, `${quantity}`);
      createElement(formattedData);
    });
  if (!ifOnMain && !cartShown) {
    return showCart();
  } else {
    showSoap();
    if (cartShown) return;
    showCart();
  }
};

buyBtns.forEach((btn) => {
  btn.addEventListener("click", setStorage);
});
document.querySelector('.logo').addEventListener('click', (e) => e.stopImmediatePropagation())
