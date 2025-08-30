import { createMemoryCard, pageData } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const gameBtn = document.getElementById("restart-btn");
  const moveCounter = document.getElementById("move-counter");
  const timer = document.getElementById("timer");

  let flippedCards = [];
  let moves = 0;
  let matchedCards = 0;
  let time = 0;
  let timeInterval;
  let totalPairs = 0;
  let gameStarted = false;
  const preStartTimer = 8000;

  function getCurrentPageName() {
    const path = window.location.pathname;
    const pageName = path.split("/").pop().replace(".html", "");
    return pageName === "index" ? "array" : pageName;
  }


  function shuffleCards(methods, examples) {
    let cards = [...methods, ...examples];
    return cards.sort(() => Math.random() - 0.5);
  }

  function createBoard(methods, examples) {
    const cards = shuffleCards(methods, examples);
    cards.forEach((elm) => createMemoryCard(elm, flipCard));
  }

  function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains("cardClicked")) {
      this.classList.add("cardClicked");
      flippedCards.push(this);
      if (flippedCards.length === 2) {
        setTimeout(checkMatch, 500);
      }
    }
  }

  function checkMatch() {
    moves++;
    moveCounter.textContent = moves;

    const card1Symbol = flippedCards[0].dataset.symbol;
    const card2Symbol = flippedCards[1].dataset.symbol;
    const card1Id = flippedCards[0].id;
    const card2Id = flippedCards[1].id;

    // Match if they have the same symbol AND one is a method and one is an example
    const isMatch =
      card1Symbol === card2Symbol &&
      ((card1Id.includes("Method") && card2Id.includes("Example")) ||
        (card1Id.includes("Example") && card2Id.includes("Method")));

    if (isMatch) {
      matchedCards++;
      flippedCards[0].classList.add("matched");
      flippedCards[1].classList.add("matched");
      flippedCards = [];
      if (matchedCards === totalPairs) {
        clearInterval(timeInterval);
        setTimeout(() => alert("You win!"), 300);
      }
    } else {
      flippedCards.forEach((card) => {
        setTimeout(() => {
          card.classList.remove("cardClicked");
        }, 1000);
      });
      flippedCards = [];
    }
  }

  function startGame(reshuffle = false) {
    // Reset game state
    moves = 0;
    moveCounter.textContent = moves;
    matchedCards = 0;
    time = 0;
    timer.textContent = "00:00";
    clearInterval(timeInterval);

    // If reshuffle is true, recreate the board
    if (reshuffle) {
      const currentPage = getCurrentPageName();
      const currentData = pageData[currentPage];

      if (currentData) {
        // Clear existing cards
        const cardArea = document.getElementById("card-area");
        if (cardArea) {
          cardArea.innerHTML = "";
        }

        // Create the board with shuffled cards
        createBoard(currentData.methods, currentData.examples);
      }
    }

    // Show all cards briefly
    document.querySelectorAll(".card").forEach((card) => {
      card.classList.add("cardClicked");
      card.style.pointerEvents = "none";
    });

    // After 2 second, flip all cards back
    setTimeout(() => {
      document.querySelectorAll(".card").forEach((card) => {
        card.classList.remove("cardClicked");
        card.classList.remove("matched");
      });

      // Start timer immediately after cards flip back
      timeInterval = setInterval(() => {
        time++;
        let minutes = String(Math.floor(time / 60)).padStart(2, "0");
        let seconds = String(time % 60).padStart(2, "0");
        timer.textContent = `${minutes}:${seconds}`;
      }, 1000);

      // Enable clicking
      document.querySelectorAll(".card").forEach((card) => {
        card.style.pointerEvents = "auto";
      });

      // Update button text and game state
      gameBtn.textContent = "Restart Game";
      gameStarted = true;
    }, preStartTimer);
  }

  gameBtn.addEventListener("click", () => {
    if (!gameStarted) {
      startGame();
    } else {
      startGame(true);
    }
  });

  // Initialize the game on page load
  function initializeGame() {
    const currentPage = getCurrentPageName();
    const currentData = pageData[currentPage];

    if (currentData) {
      // Clear existing cards
      const cardArea = document.getElementById("card-area");
      if (cardArea) {
        cardArea.innerHTML = "";
      }

      // Set total pairs for win condition
      totalPairs = currentData.methods.length;

      // Create the board with current page data
      createBoard(currentData.methods, currentData.examples);

      // Set initial button text
      gameBtn.textContent = "Start Game";

      // Disable card clicking until game starts
      document.querySelectorAll(".card").forEach((card) => {
        card.style.pointerEvents = "none";
      });
    } else {
      console.error(`No data found for page: ${currentPage}`);
    }
  }

  // Call initialize game on load
  initializeGame();
});
