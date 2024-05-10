import { attack } from "./DOM";
import { gameController } from "./logic";

const eventListeners = () => {
  const allCells = document.querySelectorAll(".cell");
  const controller = gameController();
  allCells.forEach((c) => {
    const coord = c.getAttribute("data-coordinate");
    c.addEventListener("click", () => {
      controller.switchPlayer();
      controller.disableCells();
      attack(coord);
    });
  });
  controller.disableCells();
};

export default eventListeners;
