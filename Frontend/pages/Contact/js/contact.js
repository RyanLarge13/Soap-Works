const chatbot = (e) => {
  e.preventDefault();
  e.stopPropagation();
  const chatBot = document.querySelector(".chat-bot");
  chatBot.classList.add("open");
};

const closeBot = (e) => {
  const chatBot = document.querySelector(".chat-bot");
  chatBot.classList.remove("open");
};

document.querySelector(".chat-bot").addEventListener("click", chatbot);
document.querySelector("body").addEventListener("click", closeBot);
