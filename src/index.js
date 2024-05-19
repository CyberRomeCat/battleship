import "./style.css";
import {
  gridForPlayers,
  placeColorShip,
  defaultGrid,
  attack,
  placeUserShip,
  hideBoard,
} from "./DOM";

import { gameController, userShips, player1 } from "./logic";

gridForPlayers();
const board3 = document.getElementById("board-3");
defaultGrid(10, board3, "column", 0);
placeColorShip();

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
  allCells.forEach((c) => {
    hideBoard();
    const coord = c.getAttribute("data-coordinate");
    c.addEventListener("click", () => {
      c.setAttribute("data-attacked", "true");
      controller.updateRecieveAttack(coord);
      attack(coord);
      controller.checkContinueTurn(coord);
      controller.getActivePlayer().checkAllShipsSunk("playerone");
    });
  });
  controller.disableCells();
};

if (q.length !== 0) {
  allCells.forEach((c) => {
    const coordinate = c.getAttribute("data-coordinate");
    if (coordinate[3] === "0") {
      c.addEventListener("click", () => {
        const coord = c.getAttribute("data-coordinate");
        player1.placeShip(q[0], coord[0], coord[1], direction, 1);
        placeUserShip(coord, q[0]);
        const replace = coord.replace(coord[3], parseInt(coord[3], 10) + 1);
        placeUserShip(replace, q[0]);
        q.shift();
        if (q.length === 0) attackListener();
      });
    }
  });
}
