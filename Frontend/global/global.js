import { toggleMenu } from "../partials/Nav/Nav.js";
import { showSoap } from "../partials/BlowUpView/BlowUpView.js";
import { date } from "../partials/Footer/Footer.js";
import { showCart, getItems, createElement } from "../partials/Cart/Cart.js";

const buyBtns = document.querySelectorAll(".buy-btn");

const setStorage = async (e) => {
  const parent = e.target.parentElement;
  const title = parent.querySelector("h2").innerText;
  const cartShown = document.querySelector('.cart').classList.contains("show");
  const itemExsists = localStorage.getItem(title);
  const devUrl = 'http://localhost:8080';
  const productionUrl = 'https://soap-works-production.up.railway.app';
  let quantity = 1;

  if (itemExsists) return;

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
  showSoap();
  if (cartShown) return;
  showCart();
};

buyBtns.forEach((btn) => {
  btn.addEventListener("click", setStorage);
});
