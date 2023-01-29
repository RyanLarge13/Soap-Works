const renderKit = () => {
  const kits = document.querySelectorAll(".kit-item");
  kits.forEach((kit) => kit.addEventListener("click", grabInfo));
};

const grabInfo = (e) => {
  const type = 'kits';
  const title = e.target.querySelector('h2').innerText.trim();
  window.location.href = `http://localhost:8080/${type}/${title}`;
};

window.addEventListener("DOMContentLoaded", renderKit);
