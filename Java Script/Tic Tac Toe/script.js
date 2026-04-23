let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const statusText = document.getElementById("status");
const boardDiv = document.getElementById("board");

const winningConditions = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

function createBoard() {
  boardDiv.innerHTML = "";

  board.forEach((cell, index) => {
    const div = document.createElement("div");
    div.className = "cell";
    div.innerText = cell;

    div.addEventListener("click", () => handleClick(index));

    boardDiv.appendChild(div);
  });
}

function handleClick(index) {
  if (board[index] !== "" || !gameActive) return;

  board[index] = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";

  if (gameActive) {
    statusText.innerText = `Player ${currentPlayer}'s Turn`;
  }

  createBoard();
}

function checkWinner() {
  let roundWon = false;

  for (let condition of winningConditions) {
    const [a, b, c] = condition;

    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusText.innerText = `🎉 Player ${currentPlayer} Wins!`;
    gameActive = false;
    return;
  }

  if (!board.includes("")) {
    statusText.innerText = "🤝 It's a Draw!";
    gameActive = false;
  }
}

function restartGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameActive = true;
  statusText.innerText = "Player X's Turn";
  createBoard();
}

createBoard();