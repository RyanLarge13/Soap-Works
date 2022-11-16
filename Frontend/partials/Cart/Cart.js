export const showCart = (e) => {
  const cart = document.querySelector(".cart");
  cart.classList.toggle("show");
};

export const getItems = () => {
  const keys = Object.keys(localStorage);
  const items = document.querySelectorAll(".cart-item");
  for (let i = 0; i < localStorage.length; i++) {
    const obj = JSON.parse(localStorage.getItem(keys[i]));
    if (item.querySelector("h1").innerText === obj.Title) continue;
    createElement(obj);
  }
};

const createElement = (obj) => {
  const cartContainer = document.querySelector(".cart-container");
  if (obj.Title === undefined) return;
  const itemDiv = document.createElement("div");
  itemDiv.className = ".cart-item";
  itemDiv.innerHTML = `<h1>${obj.Title}</h1>`;
  cartContainer.appendChild(itemDiv);
};

document.querySelector("header").addEventListener("click", showCart);
