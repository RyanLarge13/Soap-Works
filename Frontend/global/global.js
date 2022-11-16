import { toggleMenu } from "../partials/Nav/Nav.js";
import { showSoap } from "../partials/BlowUpView/BlowUpView.js";
import { date } from "../partials/Footer/Footer.js";
import { showCart, getItems, createElement } from "../partials/Cart/Cart.js";

const buyBtns = document.querySelectorAll(".buy-btn");

const setStorage = async (e) => {
  const parent = e.target.parentElement;
  const title = parent.querySelector("h2").innerText;

  await fetch(`http://localhost:8080/addtocart/${title}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      const formattedData = data.foundProduct[0];
      localStorage.setItem(`${title}`, JSON.stringify(formattedData));
      createElement(formattedData);
    });
    showSoap();
    showCart();
};

buyBtns.forEach((btn) => {
  btn.addEventListener("click", setStorage);
});
