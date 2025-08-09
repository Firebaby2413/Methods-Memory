const btn = document.querySelector("#btn");
const sidebar = document.querySelector(".sidebar");

btn.onclick = function () {
    sidebar.classList.toggle("active");
};

const cards = document.querySelectorAll(".card");

function flipCard() {
    this.classList.toggle("cardClicked");
}

cards.forEach((card) => card.addEventListener("click", flipCard));
