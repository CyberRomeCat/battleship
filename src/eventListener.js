import { attack } from "./DOM";

const eventListeners = () => {
  const allCells = document.querySelectorAll(".cell");
  allCells.forEach((c) => {
    const coord = c.getAttribute("data-coordinate");
    const dBoard = c.getAttribute("data-board");
    c.addEventListener("click", () => attack(coord, dBoard));
  });
};

export default eventListeners;
