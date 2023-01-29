const handleMessage = async (e) => {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const number = document.getElementById("tel");
  const data = {
    name: name.value,
    email: email.value,
    number: number.value,
  };
  await fetch("http://localhost:8080/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

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

document
  .querySelector(".contact-page-form")
  .addEventListener("submit", handleMessage);
document.querySelector(".chat-bot").addEventListener("click", chatbot);
document.querySelector("body").addEventListener("click", closeBot);
