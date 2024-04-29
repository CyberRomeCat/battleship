import { gameBoard, ships } from "./src/index.js";

let board = gameBoard();
let ship = ships();

test("place ships", () => {
  board.placeShip(ship.battleShip, "C", 3, "vertical");
  expect(board.board["C3"]).toBe(ship.battleShip);
  expect(board.board["D3"]).toBe(ship.battleShip);
  expect(board.board["E3"]).toBe(ship.battleShip);
});
