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
let direction = "horizontal";
const rotateBtn = document.getElementById("rotate");
rotateBtn.addEventListener("click", () => {
  if (direction === "horizontal") return (direction = "vertical");
  return (direction = "horizontal");
});

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

function changeColor(coordinate, direct, color) {
  if (q.length === 0) return;
  if (direct === "horizontal") {
    for (let i = 0; i < q[0].length; i++) {
      const selectCoord = document.querySelector(
        `[data-coordinate=${coordinate}]`,
      );
      if (selectCoord === null) return;
      if (selectCoord.style.backgroundColor === `lightblue`) {
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
    for (let i = 0; i < q[0].length; i++) {
      const selectCoord = document.querySelector(`[data-coordinate=${join}]`);
      if (selectCoord === null) return;
      if (selectCoord.style.backgroundColor === `lightblue`) {
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

if (q.length !== 0) {
  allCells.forEach((c) => {
    const coord = c.getAttribute("data-coordinate");
    if (coord[3] === "0") {
      c.addEventListener("mouseover", () =>
        changeColor(coord, direction, "aquamarine"),
      );
      c.addEventListener("mouseout", () =>
        changeColor(coord, direction, "bisque"),
      );
      c.addEventListener("click", () => {
        if (direction === "horizontal") {
          const co = coord;
          let y = parseInt(co[1], 10);
          for (let i = 0; i < q[0].length - 1; i++) {
            y += 1;
            if (y > 9) return;
          }
          player1.placeShip(q[0], coord[0], coord[1], direction, 1);
          placeUserShip(coord, q[0]).horizontal();
        }
        if (direction === "vertical") {
          const co = coord;
          let x = co[0].charCodeAt(0);
          for (let i = 0; i < q[0].length - 1; i++) {
            x += 1;
            if (x > 74) return;
          }
          player1.placeShip(q[0], coord[0], coord[1], direction, 1);
          placeUserShip(coord, q[0]).vertical();
        }
        q.shift();
        if (q.length === 0) attackListener();
      });
    }
  });
}
