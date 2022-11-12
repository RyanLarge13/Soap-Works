export const showSoap = (e) => {
  const blowupView = document.querySelector(".blowup-view");
  const blownupSoaps = document.querySelectorAll(".blowup-soap");
  const ingredientsBtns = document.querySelectorAll(".ingredientList");
  ingredientsBtns.forEach((btn) => {
    btn.addEventListener("click", showIngredientList);
  });
  blowupView.classList.add("show");
  blowupView.addEventListener("click", (e) => {
    e.target.classList.remove("show");
  });
  transformView(e.target.parentElement);
};

const showIngredientList = (e) => {
  const ingredients = e.target.children;
  for (let i = 0; i < ingredients.length; i++) {
    setTimeout(() => {
      ingredients[i].classList.toggle("opacity");
    }, 100 * i);
  }
};

const transformView = (soapClicked) => {
  const allSoapItems = document.querySelectorAll(".grid-item");
  let index;
  for (let i = 0; i < allSoapItems.length; i++) {
    if (allSoapItems[i] === soapClicked) {
      index = i;
      translate(index);
    }
  }
};

let start;
let end;
let count = 0;
const translate = (index) => {
  count = index;
  const allDescriptiveSoaps = document.querySelectorAll(".blowup-soap");
  allDescriptiveSoaps.forEach((soap) => {
    soap.style.transform = `translateX(-${90 * index}vw)`;
    soap.addEventListener("touchstart", (e) => {
      e.stopPropagation();
      start = e.touches[0].clientX;
    });
    soap.addEventListener("touchmove", (e) => {
      end = e.touches[0].clientX;
      setTimeout(() => {
        end = undefined;
      }, 250);
    });
    soap.addEventListener("touchend", move);
  });
};

//Function to handle UI for moving through the soap list.
const move = () => {
  const allDescriptiveSoaps = document.querySelectorAll(".blowup-soap");
  if (start > end + 250 && count !== allDescriptiveSoaps.length - 1) {
    count++;
    return allDescriptiveSoaps.forEach((soap) => {
      soap.style.transform = `translateX(${-90 * count}vw)`;
    });
  }
  if (start < end - 250 && count !== 0) {
    count--;
    allDescriptiveSoaps.forEach((soap) => {
      return (soap.style.transform = `translateX(-${90 * count}vw)`);
    });
  }
};

document.querySelectorAll(".grid-item").forEach((soap) => {
  soap.addEventListener("click", showSoap);
});
