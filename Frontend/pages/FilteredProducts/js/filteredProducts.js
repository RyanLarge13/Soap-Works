const setHeading = () => {
  const heading = document.querySelector(".filtered-title");
  const url = window.location.href;
  const index = url.lastIndexOf("/");
  const title = url
    .split("")
    .splice(index + 1, url.length - index)
    .join("");
  const newTitle = title[0].toUpperCase() + title.substring(1);
  heading.innerHTML = newTitle;
};
const placeImages = () => {
  const images = document.querySelectorAll(".img-container");
  images.forEach((img, index) => {
    img.style.top = `${100 * index}vh`;
  });
};

const sharePage = () => {
  navigator
    .share({
      title: "Soap Works!",
      url: window.location.href,
    })
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));
};

const initiateView = (e) => {
  const id = e.target.firstElementChild.id;
  const parent = e.target.parentElement.parentElement.parentElement;
  if (id === "expand") expand(parent);
  if (id === "image") images(parent);
  if (id === "spec") showSpecs(parent);
  if (id === "list") showList(parent);
};

const expand = (product) => {
  const image = product.querySelector(".product-img");
  image.classList.toggle("expand");
};

//setHeading();
placeImages();
document
  .querySelectorAll(".share")
  .forEach((btn) => btn.addEventListener("click", sharePage));
document
  .querySelectorAll(".option-btns button")
  .forEach((btn) => btn.addEventListener("click", initiateView));
