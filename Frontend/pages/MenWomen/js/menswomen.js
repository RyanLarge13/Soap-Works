const items = document.querySelectorAll(".men-women-item");

for (let i = 0; i < items.length; i++) {
  setTimeout(() => {
    items[i].style.opacity = "1";
    items[i].style.transform = "translateY(0)";
  }, 200 * i);
}

const showItems = () => {
  items.forEach((item) => {
    const pos = item.getBoundingClientRect().top;
    pos < window.innerHeight ? item.classList.add('inview') : item.classList.remove('inview')
  });
};

window.addEventListener("scroll", showItems);
