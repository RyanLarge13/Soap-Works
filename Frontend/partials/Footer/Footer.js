export const date = () => {
  const date = document.querySelector(".main-footer p strong");
  date.innerHTML = new Date().getFullYear();
};
date();
