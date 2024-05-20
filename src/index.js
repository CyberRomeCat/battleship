import "./style.css";
import {
  gridForPlayers,
  defaultGrid,
  attack,
  placeUserShip,
  hideBoard,
} from "./DOM";

import {
  gameController,
  userShips,
  player1,
  player2,
  allShipsPlayer2,
} from "./logic";

gridForPlayers();
const board3 = document.getElementById("board-3");
defaultGrid(10, board3, "column", 0);

player2.placeShip(allShipsPlayer2.carrier, "E", 2, "horizontal", 2);
player2.placeShip(allShipsPlayer2.battleShip, "D", 5, "horizontal", 2);
player2.placeShip(allShipsPlayer2.cruiser, "J", 5, "horizontal", 2);
player2.placeShip(allShipsPlayer2.submarine, "A", 2, "horizontal", 2);
player2.placeShip(allShipsPlayer2.destroyer, "B", 6, "horizontal", 2);

const allCells = document.querySelectorAll(".cell");
const direction = "horizontal";
const q = [
  userShips.carrier,
  userShips.battleShip,
  userShips.cruiser,
  userShips.submarine,
  userShips.destroyer,
];

const attackListener = () => {
  const controller = gameController();
  controller.disableCells();
  allCells.forEach((c) => {
    hideBoard();
    const coord = c.getAttribute("data-coordinate");
    c.addEventListener("click", () => {
      c.setAttribute("data-attacked", "true");
      attack(coord);
      controller.updateRecieveAttack(coord);
      controller.checkContinueTurn(coord);
      controller.getActivePlayer().checkAllShipsSunk("playerone");
    });
  });
};

if (q.length !== 0) {
  allCells.forEach((c) => {
    const coord = c.getAttribute("data-coordinate");
    if (coord[3] === "0") {
      c.addEventListener("click", () => {
        player1.placeShip(q[0], coord[0], coord[1], direction, 1);
        placeUserShip(coord, q[0]).horizontal();
        q.shift();
        if (q.length === 0) attackListener();
      });
    }
  });
}
