let products = [];
export const showCart = (e) => {
  const cart = document.querySelector(".cart");
  cart.classList.toggle("show");
  if (!cart.classList.contains("show")) return;
  getItems();
};

const getItems = () => {
  const keys = Object.keys(localStorage);
  for (let i = 0; i < localStorage.length; i++) {
    const obj = JSON.parse(localStorage.getItem(keys[i]));
    createElement(obj);
  }
};

const createElement = (obj) => {
  const cartContainer = document.querySelector(".cart-container");
  const existingItems = document.querySelectorAll(".cart-item");
  if (obj.Title === undefined) return;
  const itemDiv = document.createElement("div");
  itemDiv.className = ".cart-item";
  itemDiv.innerHTML = `<h1>${obj.Title}</h1>`;
  existingItems.forEach((elem) => {
    if (elem === itemDiv) return;
  cartContainer.appendChild(itemDiv);
  });
};

document.querySelector("header").addEventListener("click", showCart);
