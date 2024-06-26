const board1 = document.getElementById("board-1");
const board2 = document.getElementById("board-2");
const board0 = document.getElementById("board-0");

function makeColumn(rowNum, container, className) {
  for (let r = 0; r < rowNum; r++) {
    const row = document.createElement("div");
    container.appendChild(row).className = `${className}`;
    row.setAttribute("id", `${r}`);
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
  defaultGrid(10, board0, "column", 0);
  defaultGrid(10, board1, "column-1", 1);
  defaultGrid(10, board2, "column-2", 2);
}

function placeUserShip(coord, ship) {
  let c = coord;
  const horizontal = () => {
    for (let i = 0; i < ship.length; i++) {
      const selectCoord = document.querySelector(`[data-coordinate=${c}]`);
      selectCoord.style.backgroundColor = "#4792D789";

      c = c.replace(c[1], parseInt(c[1], 10) + 1);
    }
  };

  const vertical = () => {
    let charCode = c[0].charCodeAt(0);
    let tranlateToletter;
    for (let i = 0; i < ship.length; i++) {
      const selectCoord = document.querySelector(`[data-coordinate=${c}]`);
      selectCoord.style.backgroundColor = "#4792D789";
      charCode += 1;
      tranlateToletter = String.fromCharCode(charCode);
      c = c.replace(c[0], tranlateToletter);
    }
  };

  return { horizontal, vertical };
}

function attack(coord, player) {
  const cell = document.querySelector(`[data-coordinate=${coord}]`);
  if (player.board[coord]) {
    cell.style.backgroundColor = "red";
  } else {
    cell.style.backgroundColor = "aquamarine";
  }
}

function disableAttackedCells() {
  const allAttackedCells = document.querySelectorAll("[data-attacked]");
  allAttackedCells.forEach((c) => {
    c.disabled = true;
  });
}

function disableAllCells() {
  const allCells = document.querySelectorAll(".cell");
  allCells.forEach((c) => {
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
  }

  return { playerTurn, win };
})();

function hoverColor(coordinate, direct, color, ship) {
  if (direct === "horizontal") {
    for (let i = 0; i < ship.length; i++) {
      const selectCoord = document.querySelector(
        `[data-coordinate=${coordinate}]`,
      );
      if (selectCoord === null) return;
      if (selectCoord.style.backgroundColor === `rgba(71, 146, 215, 0.537)`) {
        return;
      }
      selectCoord.style.backgroundColor = `${color}`;

      coordinate = coordinate.replace(
        coordinate[1],
        parseInt(coordinate[1], 10) + 1,
      );
    }
  } else {
    let charCode = coordinate[0].charCodeAt(0);
    let tranlateToletter;
    let coordinates;
    let join = coordinate;
    for (let i = 0; i < ship.length; i++) {
      const selectCoord = document.querySelector(`[data-coordinate=${join}]`);
      if (selectCoord === null) return;
      if (selectCoord.style.backgroundColor === `rgba(71, 146, 215, 0.537)`) {
        return;
      }
      selectCoord.style.backgroundColor = `${color}`;
      charCode += 1;
      tranlateToletter = String.fromCharCode(charCode);
      coordinates = [tranlateToletter, coordinate[1], "-", coordinate[3]];
      join = coordinates.join("");

      coordinate = coordinate.replace(coordinate[0], tranlateToletter);
    }
  }
}

function hideBoard() {
  const board = document.querySelector(".place-ships");
  board.style.display = "none";
  const boards = document.querySelector(".container-for-boards");
  boards.style.display = "flex";
  const announcer = document.querySelector(".design");
  announcer.style.display = "block";
}

export {
  gridForPlayers,
  attack,
  disableAllCells,
  hideBoard,
  disableAttackedCells,
  displayText,
  placeUserShip,
  hoverColor,
};
