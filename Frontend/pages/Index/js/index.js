const soapGrid = document.querySelector(".soaps");
const soapItems = document.querySelectorAll(".grid-item");
const getRandom = () => {
  return Math.floor(Math.random() * 4);
};
soapItems.forEach((item) => {
  let random = getRandom();
  item.classList.add(`height-${random}`);
});
setTimeout(() => {
  const masonry = new Masonry(soapGrid, {
    itemSelector: ".grid-item",
    columnWidth: 0,
    percentPosition: true,
  });
  for (let i = 0; i < soapItems.length; i++) {
    setTimeout(() => {
      soapItems[i].classList.add("inview");
    }, 250 * i);
  }
  setTimeout(() => {
    window.addEventListener("scroll", styleSoaps);
  }, 5000);
}, 500);

const styleText = () => {
  const heading = document.querySelector(".heading");
  const intro = document.querySelector(".intro");
  heading.style.transform = "translateX(0)";
  intro.style.transform = "translateX(0)";
  setTimeout(() => {
    heading.style.opacity = "1";
    intro.style.opacity = "1";
  }, 500);
  addListeners();
  window.removeEventListener("scroll", styleText)
};

const addListeners = () => {
  //window.addHeadingListeners("scroll", styleHeadings);
  window.addEventListener("scroll", styleParagraphs);
};

const styleParagraphs = () => {
  const allParagraphs = document.querySelectorAll(".intro");
  allParagraphs.forEach((text) => {
    const pos = text.getBoundingClientRect().top;
    if (pos < window.innerHeight) {
      text.classList.add("inview");
    }
  });
  const check = allParagraphs.forEach((item) =>
    item.classList.contains("inview")
  );
  if (check) window.removeEventListener("scroll", styleParagraphs);
};

const styleSoaps = () => {
  soapItems.forEach((item) => {
    const pos = item.getBoundingClientRect().top;
    pos > 0 - window.innerHeight / 2
      ? item.classList.add("inview")
      : item.classList.remove("inview");
  });
};

const showKits = () => {
  const kitContainer = document.querySelector(".kits");
  const allKits = document.querySelectorAll(".kit-item");
  const pos = kitContainer.getBoundingClientRect().top;
  for (let i = 0; i < allKits.length; i++) {
    setTimeout(() => {
      pos < window.innerHeight
        ? allKits[i].classList.add("inview")
        : allKits[i].classList.remove("inview");
    }, 100 * i);
  }
};

const showSubs = () => {
  const allSubs = document.querySelectorAll(".sub");
  allSubs.forEach((sub) => {
    const pos = sub.getBoundingClientRect().top;
    pos < window.innerHeight
      ? sub.classList.add("inview")
      : sub.classList.remove("inview");
  });
};

document.addEventListener("DOMContentLoaded", styleText);
window.addEventListener("scroll", showKits);
window.addEventListener("scroll", showSubs);
