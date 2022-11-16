export const showCart = () => {
  const cart = document.querySelector(".cart");
  const backdrop = document.querySelector(".backdrop");
  cart.classList.toggle("show");
  backdrop.classList.toggle("show");
  backdrop.addEventListener('click', showCart);
};

export const getItems = () => {
  const keys = Object.keys(localStorage);
  for (let i = 0; i < localStorage.length; i++) {
    const obj = JSON.parse(localStorage.getItem(keys[i]));
    createElement(obj);
  }
};

export const createElement = (obj) => {
  const cartContainer = document.querySelector(".cart-container");
  const itemDiv = document.createElement("div");
  const quantity = localStorage.getItem(obj._id);
  if (obj.Title === undefined) return;
  itemDiv.className = "cart-item";
  itemDiv.innerHTML = `<h1>${obj.Title}</h1>
  <div class="cart-img-container">
  <img src="${obj.ImageUrl}" alt="background product image" />
  </div>
  <div class="quantity-container">
  <button class="dec">-</button>
  <p class="cart-item-quantity">${quantity}</p>
  <button class="inc">+</button>
  </div>
  <button class="danger">Delete</button>`;
  cartContainer.appendChild(itemDiv);

  //adding event listeners in the same function to avoid passing an unreasonable amnout of parameters.
  const deleteBtns = document.querySelectorAll(".danger");
  const incBtns = document.querySelectorAll(".inc");
  const decBtns = document.querySelectorAll(".dec");
  // const eachQuantity = document.querySelectorAll('.cart-item-quantity');
  const checkoutBtn = document.querySelector(".checkout");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const htmlObj = e.target.parentElement;
      cartContainer.removeChild(htmlObj);
      localStorage.removeItem(obj.Title);
      localStorage.removeItem(obj._id);
    });
  });
  incBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const parent = e.target.parentElement;
      let quantity = parent.querySelector(".cart-item-quantity");
      let num = localStorage.getItem(obj._id);
      num++;
      localStorage.removeItem(obj._id);
      localStorage.setItem(obj._id, `${num}`);
      quantity.innerHTML = localStorage.getItem(obj._id);
    });
  });
  decBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopImmediatePropagation();
      const parent = e.target.parentElement;
      let quantity = parent.querySelector(".cart-item-quantity");
      let num = localStorage.getItem(obj._id);
      if (num === "1") return;
      num--;
      localStorage.removeItem(obj._id);
      localStorage.setItem(obj._id, `${num}`);
      quantity.innerHTML = localStorage.getItem(obj._id);
    });
  });
  checkoutBtn.addEventListener("click", checkout);
};

const checkout = () => {};

document.querySelector("header").addEventListener("click", showCart);
document.addEventListener("DOMContentLoaded", getItems);
