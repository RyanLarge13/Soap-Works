export const showCart = (e) => {
  const cart = document.querySelector(".cart");
  cart.classList.toggle("show");
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
  if (obj.Title === undefined) return;
  const itemDiv = document.createElement("div");
  itemDiv.className = "cart-item";
  itemDiv.innerHTML = `<h1>${obj.Title}</h1>
  <div class="cart-img-container">
  <img src="${obj.ImageUrl}" alt="background product image" />
  </div>
  <div class="quantity-container">
  <button class="dec">-</button>
  <p class="quantity">1</p>
  <button class="inc">+</button>
  </div>
  <button class="danger">Delete</button>`;
  cartContainer.appendChild(itemDiv);

  const deleteBtns = document.querySelectorAll('.danger');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      cartContainer.removeChild(e.target.parentElement);
      localStorage.removeItem(e.target.parentElement.firstElementChild.innerHTML);
    });
  });
};

document.querySelector("header").addEventListener("click", showCart);
document.addEventListener("DOMContentLoaded", getItems);
