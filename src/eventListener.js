import { hideBoard, hoverColor } from "./DOM";
import { controller, ships, checkPlaceShip } from "./logic";

const userShips = ships();
const q = [
  userShips.carrier,
  userShips.battleShip,
  userShips.cruiser,
  userShips.submarine,
  userShips.destroyer,
];

const DOMEvents = () => {
  const d = document;

  function attackOpponent() {
    controller.disableNonActivePlayerCells();
    hideBoard();
    // eslint-disable-next-line consistent-return
    d.addEventListener("click", (e) => {
      const coord = e.target.getAttribute("data-coordinate");
      if (coord[3] === "2") {
        const selectCoord = document.querySelector(
          `[data-coordinate=${coord}]`,
        );
        selectCoord.setAttribute("data-attacked", "true");
        controller.updateRecieveAttack(coord);
        controller.checkContinueTurn(coord, "PLAYER");
      }
    });
  }

  if (q.length !== 0) {
    let direction = "horizontal";
    // eslint-disable-next-line consistent-return
    d.addEventListener("click", (e) => {
      if (e.target.matches("#rotate")) {
        if (direction === "horizontal") return (direction = "vertical");
        return (direction = "horizontal");
      }
    });
    const allCells = document.querySelectorAll(".cell");
    allCells.forEach((c) => {
      const coord = c.getAttribute("data-coordinate");
      if (coord[3] === "0") {
        c.addEventListener("mouseover", () =>
          hoverColor(coord, direction, "aquamarine", q[0]),
        );
        c.addEventListener("mouseout", () => {
          if (q.length === 0) return;
          hoverColor(coord, direction, "#2C464f", q[0]);
        });
        c.addEventListener("click", () => {
          if (checkPlaceShip(coord, direction, q[0]) === "q") return;
          controller.disableCellsAroundShip(coord, direction, q[0], 0);
          q.shift();
          if (q.length === 0) attackOpponent();
        });
      }
    });
  }
};

export default DOMEvents;
