import "./style.css";
import { gridForPlayers, placeUserShip, hideBoard } from "./DOM";
import { controller, player1, ships, generate } from "./logic";

gridForPlayers();
generate().randomPlaceShip();

const userShips = ships();

const q = [
  userShips.carrier,
  userShips.battleShip,
  userShips.cruiser,
  userShips.submarine,
  userShips.destroyer,
];

const allCells = document.querySelectorAll(".cell");
const direction = "horizontal";

const attackListener = () => {
  controller.disableCells();
  hideBoard();
  allCells.forEach((c) => {
    const coord = c.getAttribute("data-coordinate");
    c.addEventListener("click", () => {
      c.setAttribute("data-attacked", "true");
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
