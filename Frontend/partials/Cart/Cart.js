export const showCart = () => {
  const cart = document.querySelector(".cart");
  const backdrop = document.querySelector(".backdrop");
  cart.classList.toggle("show");
  backdrop.classList.toggle("show");
  backdrop.addEventListener("click", showCart);
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
};

const initCheckout = (e) => {
  const container = e.target.parentElement.firstElementChild;
  const hasChildren = container.querySelector(".cart-item");
  if (!hasChildren) {
    const noItems = document.createElement("h2");
    noItems.className = "no-items-in-cart";
    noItems.innerHTML = `You have no items in your cart!`;
    container.appendChild(noItems);
    setTimeout(() => {
      noItems.style.opacity = "0";
      setTimeout(() => {
        container.removeChild(noItems);
      }, 250);
    }, 2000);
  }
  if (hasChildren) {
    queryLocalStorage();
  }
};

const queryLocalStorage = () => {
  let items = [];
  const keys = Object.keys(localStorage);
  for (let i = 0; i < localStorage.length; i++) {
    let obj = JSON.parse(localStorage.getItem(keys[i]));
    if (obj.Title !== undefined) {
      Object.assign(obj, { Amount: localStorage.getItem(obj._id) });
    }
    if (obj.Title === undefined) continue;
    items.push(obj);
  }
  fetchStripe(items);
};

const fetchStripe = async (items) => {
  const devUrl = "http://localhost:8080";
  const productionUrl = "https://soap-works-production.up.railway.app";
  const response = await fetch(`${devUrl}/checkout`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify(items),
  }).then((res) => res.json()).then((data) => {
    window.location.href = data.url;
  }).catch((err) => {
    console.log(err);
  });

  if (response.statusCode === 500) return;

  // const data = await response.json();

  //Impliment a loading animation here;


};

document.querySelector("header").addEventListener("click", showCart);
document.addEventListener("DOMContentLoaded", getItems);
document.querySelector(".checkout").addEventListener("click", initCheckout);
