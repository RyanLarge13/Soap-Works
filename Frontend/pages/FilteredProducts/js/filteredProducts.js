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

const initiateView = (e) => {
  const id = e.target.id;
  const parent = e.target.parentElement.parentElement;
  if (id === "expand") expand(parent);
  if (id === "image") images(parent);
  if (id === "spec") showSpecs(parent);
  if (id === "list") showList(parent);
};

const expand = (product) => {
  const infoContainer = product.previousElementSibling;
  const title = product.querySelector("h2");
  const img = product.querySelector(".product-img");
  const clonedTitle = title.cloneNode(true);
  const clonedImg = img.cloneNode(true);
  clonedTitle.id = "cloned-title";
  clonedImg.id = "img-clone";
  infoContainer.classList.add("show");
  setTimeout(() => {
    infoContainer.style.opacity = "1";
  }, 1);
  infoContainer.appendChild(clonedTitle);
  infoContainer.appendChild(clonedImg);
  infoContainer.querySelector(".fa-xmark").addEventListener("click", () => {
    clonedImg.remove();
    clonedTitle.remove();
    infoContainer.classList.remove("show");
  });
};

const images = (product) => {
  console.log("show images");
};

const showSpecs = (product) => {
  console.log("show specs");
};

const showList = (product) => {
  console.log("show list");
};

setHeading();
document
  .querySelectorAll(".option-btns div")
  .forEach((btn) => btn.addEventListener("click", initiateView));
