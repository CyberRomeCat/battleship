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
      const newCell = document.createElement("div");
      rows[j].appendChild(newCell).className = "cell";
      const rowId = rows[j].getAttribute("id");
      tranlateToletter = String.fromCharCode(charCode);
      newCell.setAttribute("id", `${tranlateToletter}${rowId}`);
      newCell.setAttribute("data-board", `${board}`);
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
    const board = document.querySelectorAll("[data-board]");
    board.forEach((n) => {
      const attribute = n.getAttribute("data-board");
      const keyID = n.getAttribute("id");
      if (attribute === "1" && keyID === key) {
        n.style.backgroundColor = "lightBlue";
      }
    });
  });
  Object.keys(player2.board).forEach((key) => {
    const board = document.querySelectorAll("[data-board]");
    board.forEach((n) => {
      const keyID = n.getAttribute("id");
      const attribute = n.getAttribute("data-board");
      if (attribute === "2" && keyID === key) {
        n.style.backgroundColor = "lightBlue";
      }
    });
  });
}

export { gridForPlayers, placeColorShip };
