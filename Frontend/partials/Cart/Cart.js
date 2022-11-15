let products = [];
export const showCart = (e) => {
  const cart = document.querySelector(".cart");
  cart.classList.toggle("show");
  if (!cart.classList.contains("show")) return;
  getItems();
  createElements();
};

const getItems = () => {
  const keys = Object.keys(localStorage);
  for (let i = 0; i < localStorage.length; i++) {
    const obj = JSON.parse(localStorage.getItem(keys[i]));
    if (products.length === localStorage.length) continue;
    else products.push(obj);
  }
};

const createElements = () => {
  const cartContainer = document.querySelector(".cart-container");
  products.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = ".cart-item";
    itemDiv.innerHTML = `<h1>${item.Title}</h1>`;
    cartContainer.appendChild(itemDiv);
  });
};

document.querySelector("header").addEventListener("click", showCart);
