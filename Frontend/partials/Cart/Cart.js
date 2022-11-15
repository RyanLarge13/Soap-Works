export const showCart = (e) => {
  const cart = document.querySelector(".cart");
  cart.classList.toggle("show");
  getItems();
};

const getItems = () => {
  const allItems = localStorage;
  createElements(allItems);
};

const createElements = (items) => {
  const itemDiv = document.createElement("div");
  const cartContainer = document.querySelector(".cart-container");
  itemDiv.className = ".cart-item";
  itemDiv.innerHTML = `<h1>${items}</h1>`;
  cartContainer.appendChild(itemDiv)
};

document.querySelector("header").addEventListener("click", showCart);
