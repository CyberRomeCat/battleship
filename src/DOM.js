// eslint-disable-next-line import/no-cycle
import { player1, player2 } from "./logic";

const board1 = document.getElementById("board-1");
const board2 = document.getElementById("board-2");

function makeColumn(rowNum, container, className) {
  for (let r = 0; r < rowNum; r++) {
    const row = document.createElement("div");
    container.appendChild(row).className = `${className}`;
    row.setAttribute("id", `${r + 1}`);
  }
}

function makeRows(cellNum, className, board) {
  const rows = document.getElementsByClassName(`${className}`);
  let charCode = 65;
  let tranlateToletter;
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < cellNum; j++) {
      const newCell = document.createElement("button");
      rows[j].appendChild(newCell).className = "cell";
      const rowId = rows[j].getAttribute("id");
      tranlateToletter = String.fromCharCode(charCode);
      newCell.setAttribute(
        "data-coordinate",
        `${tranlateToletter}${rowId}-${board}`,
      );
    }
    charCode += 1;
  }
}

function defaultGrid(num, container, className, board) {
  makeColumn(num, container, className);
  makeRows(num, className, board);
}

function gridForPlayers() {
  defaultGrid(10, board1, "gridColumn", 1);
  defaultGrid(10, board2, "gridColumn2", 2);
}

function placeColorShip() {
  Object.keys(player1.board).forEach((key) => {
    const board = document.querySelectorAll(".cell");
    board.forEach((n) => {
      const coordinate = n.getAttribute("data-coordinate");
      if (coordinate === key) {
        n.style.backgroundColor = "lightBlue";
      }
    });
  });
  Object.keys(player2.board).forEach((key) => {
    const board = document.querySelectorAll(".cell");
    board.forEach((n) => {
      const coordinate = n.getAttribute("data-coordinate");
      if (coordinate === key) {
        n.style.backgroundColor = "lightBlue";
      }
    });
  });
}

function attack(coord) {
  const board = document.querySelectorAll(".cell");
  board.forEach((n) => {
    const coordinate = n.getAttribute("data-coordinate");
    if (coordinate === coord) {
      n.style.backgroundColor = "red";
    }
  });
}

function disableAttackedCells() {
  const allAttackedCells = document.querySelectorAll("[data-attacked]");
  allAttackedCells.forEach((c) => {
    c.disabled = true;
  });
}

const displayText = (() => {
  const announce = document.getElementById("announcer");

  function playerTurn(player) {
    announce.textContent = `It's ${player}'s turn`;
  }

  function win(player) {
    announce.textContent = `${player} has won!!`;
    alert(`${player} has won!!`);
    window.location.reload();
  }

  return { playerTurn, win };
})();

export {
  gridForPlayers,
  placeColorShip,
  attack,
  disableAttackedCells,
  displayText,
};
