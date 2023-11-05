const renderItems = () => {
  const items = document.querySelectorAll(".men-women-item");
  items.forEach((item) => item.addEventListener("click", grabInfo));
};

const grabInfo = (e) => {
  const productionUrl = "https://soap-works-production.up.railway.app";
  const devUrl = "http://localhost:8080";
  const type = "soaps";
  const title = e.target.querySelector("h2").innerText.trim();
  window.location.href = `${devUrl}/${type}/${title}`;
};

window.addEventListener("DOMContentLoaded", renderItems);
