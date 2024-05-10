import { gameBoard, ships } from "./src/logic.js";

let board = gameBoard();
let ship = ships();

test("place ships", () => {
  board.placeShip(ship.battleShip, "C", 3, "vertical");
  expect(board.board["C3"]).toStrictEqual([ship.battleShip]);
  expect(board.board["D3"]).toStrictEqual([ship.battleShip]);
  expect(board.board["E3"]).toStrictEqual([ship.battleShip]);
});

test("recieve attacks", () => {
  board.recieveAttack("C3");
  expect(board.board["C3"][1]).toBe("hit");
});

test("report if ship has sunk", () => {
  board.recieveAttack("D3");
  board.recieveAttack("E3");
  expect(board.checkAllShipsSunk()).toBe("GameOver");
});

test("non active player cells disabled eventlistener", () => {
  const controller = gameController();
  controller.disableCells();
  if (controller.getActivePlayer() === player1) {
    let board2 = document.querySelectorAll("[data-board]");
    board2.forEach((c) => {
      expect(c.disabled).toBe(true);
    });
  }
});
