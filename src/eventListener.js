import { attack } from "./DOM";
import { gameController } from "./logic";

const eventListeners = () => {
  const allCells = document.querySelectorAll(".cell");
  const controller = gameController();
  allCells.forEach((c) => {
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

export default eventListeners;
