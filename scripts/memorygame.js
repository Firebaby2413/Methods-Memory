document.addEventListener("DOMContentLoaded", () => {
    const restartbtn = document.getElementById('restart-btn');
    const moveCounter = document.getElementById('move-counter');
    const timer = document.getElementById('timer');

    let flippedCards = [];
    let moves = 0;
    let matchedCards = 0;
    let time = 0;
    let timeInterval;

    function shuffleCards(Methods, Examples) {
        let cards = [...Methods, ...Examples];
        return cards.sort(() => Math.random() - 0.5);
    }
    function createBoard(Methods, Examples) {
        shuffleCards(Methods, Examples);
        return cards.forEach(elm => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.symbol = symbol;
            card.innerHTML = '?';
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        })
    }
    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains("cardClicked")) {
            this.classList.add('cardClicked');
            flippedCards.push(this);
            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 500);
            }
        }
        
    }
    function checkMatch() {
        moves++;
        moveCounter.textContent = moves;
        if (flippedCards[0].dataset.symbol === flippedCards[1].dataset.symbol) {
            matchPairs++;
            flippedCards = [];
            if (matchedPairs === symbols.length) {
                clearInterval(timeInterval);
                setTimeout(() => alert("You win!"), 300);
            }
        }
        else {
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.innerHTML = "?";
            });
            flippedCards = [];
        }

    }
    function startGame() {
        document.querySElectorAll(".card").forEach(card => {
            card.classList.add("flipped");
            card.style.pointerEvents = "none";
        });
        setTimeout(() => {
            document.querySelectorAll(".card").forEach(card => {
                card.classList.remove("flipped");
                card.innerHTML = "?";
            });
            setTimeout(() => {
                moves = 0;
                moveCounter.textContent = moves;
                matchedPairs = 0;
                time = 0;
                timer.textContent = "00:00";
                clearInterval(timeInterval);
                timeInterval = setInterval(() => {
                    time++;
                    let minutes = String(Math.floor(time / 60)).padStart(2, "0");
                    let seconds = String(time % 60).padStart(2, "0");
                    timer.textContent = `${minutes}:${seconds}`;
                }, 1000);
                createBoard();

                setTimeout(() => {
                    document.querySelectorAll(".card").forEach((card => {
                        card.style.pointerEvents = "auto";
                    }));
                }, 500);
            }, 500);
        }, 800);
    }
    restartbtn.addEventListener("click", startGame);
    startGame();
})