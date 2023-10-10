const colors = ["green", "red", "yellow", "blue"];

let sequence = [];
let playerSequence = [];
let rodada = 0;
let pontos = 0;
let gameStarted = false;
let isPlayingSequence = false;

const startButton = document.getElementById("startButton");
const gameScreen = document.getElementById("GameScreen");
const buttons = document.querySelectorAll("#buttons button");
const titulo = document.getElementById("titulo");
const score = document.querySelector(".score h2");
const JogarNovamente = document.getElementById("JogarNovamente");


function proximaRodada() {
    playerSequence = [];
    rodada++;
    titulo.textContent = `Rodada ${rodada}`;
    disableButtons();
    sequence.push(colors[Math.floor(Math.random() * 4)]);
    playSequence();
}

function playSequence() {
    isPlayingSequence = true;
    let i = 0;
    const interval = setInterval(() => {
        flashButton(sequence[i]);
        i++;
        if (i >= sequence.length) {
            clearInterval(interval);
            titulo.textContent = "Sua vez!";
            enableButtons();
            isPlayingSequence = false;
        }
    }, 1000);
}

function flashButton(color) {
    const button = document.getElementById(color);
    button.classList.add("active");
    setTimeout(() => {
        button.classList.remove("active");
    }, 500);
}

function checkSequence() {
for (let i = 0; i < playerSequence.length; i++) {
    if (playerSequence[i] !== sequence[i]) {
        gameOver();
        return;
    }
}

    if (playerSequence.length === sequence.length) {
        pontos++
        const newScore = pontos * 10;
        score.textContent = newScore;

        const currentHighScore = getHighScore();
        if (newScore > currentHighScore) {
        setHighScore(newScore);
        updateHighScore();
        }

        setTimeout(() => {
        proximaRodada();
        }, 1000);
        enableButtons();
    }
}

function gameOver() {
    gameStarted = false;
        alert(`Fim de jogo! Sua pontuação final é: ${pontos * 10}`);
        JogarNovamente.style.display = "block";
}

function disableButtons() {
    buttons.forEach((button) => {
        button.disabled = true;
    });
}

function enableButtons() {
    buttons.forEach((button) => {
        button.disabled = false;
    });
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (gameStarted && !isPlayingSequence) {
            const color = button.id;
            flashButton(color);
            playerSequence.push(color);
            checkSequence();
        }
    });
});

function getHighScore() {
    const highScore = localStorage.getItem("highScore");
    return highScore ? parseInt(highScore) : 0;
}

function setHighScore(score) {
    localStorage.setItem("highScore", score.toString());
}

function updateHighScore() {
    const highScoreValue = document.getElementById("highScoreValue");
    const currentHighScore = getHighScore();
    highScoreValue.textContent = currentHighScore;
}

updateHighScore();

function restartGame() {
    rodada = 0;
    pontos = 0;
    sequence = [];
    playerSequence = [];
    score.textContent = "0";
    updateHighScore();
    startButton.style.display = "block";
    JogarNovamente.style.display = "none";
    gameScreen.style.display = "block";
    proximaRodada()
}

JogarNovamente.addEventListener("click", () => {
    restartGame();
    gameStarted = true;
});

startButton.addEventListener("click", function() {
    gameStarted = true;
    document.getElementById("StartScreen").style.display = "none";
    document.getElementById("GameScreen").style.display = "block";
    proximaRodada();
});