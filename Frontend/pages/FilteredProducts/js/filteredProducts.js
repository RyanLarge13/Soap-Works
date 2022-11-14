const setHeading = async () => {
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
  const images = document.querySelectorAll(".bg-img");
  images.forEach((img, index) => {
    img.style.top = `${100 * index}vh`;
  });
};
setHeading();
placeImages();
