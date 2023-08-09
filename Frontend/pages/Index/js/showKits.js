const renderKit = () => {
  const kits = document.querySelectorAll(".kit-item");
  kits.forEach((kit) => kit.addEventListener("click", grabInfo));
};

const grabInfo = (e) => {
  if (!e.target.classList.contains("kit-item")) {
    return; // If not, ignore the click event
  }
  const productionUrl = "https://soap-works-production.up.railway.app";
  const devUrl = "http://localhost:8080";
  const type = "kits";
  const title = e.target.querySelector("h2").innerText.trim();
  window.location.href = `${productionUrl}/${type}/${title}`;
};

window.addEventListener("DOMContentLoaded", renderKit);
