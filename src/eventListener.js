import { attack, disableAttackedCells } from "./DOM";
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
      controller.switchPlayer();
      controller.disableCells();
      disableAttackedCells();
      console.log(controller.getActivePlayer().missed);
      console.log(controller.getActivePlayer().getBoard());
    });
  });
  controller.disableCells();
};

export default eventListeners;
