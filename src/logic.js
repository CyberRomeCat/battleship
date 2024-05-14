// eslint-disable-next-line import/no-cycle
import { attack, disableAttackedCells, displayText } from "./DOM";

const ships = () => {
  const tasks = {
    length: 1,
    hits: 0,
    sunk: false,
    hit() {
      this.hits += 1;
      this.length -= 1;
    },
    isSunk() {
      return this.length === 0 ? (this.sunk = true) : (this.sunk = false);
    },
  };

  const battleShip = { ...tasks };
  const cruiser = { ...tasks };
  const carrier = { ...tasks };
  const submarine = { ...tasks };
  const destroyer = { ...tasks };

  const allShips = [battleShip, cruiser, carrier, submarine, destroyer];
  allShips.forEach((ship) => {
    if (ship === carrier) ship.length = 4;
    if (ship === battleShip) ship.length = 3;
    if (ship === cruiser || ship === submarine) ship.length = 2;
    if (ship === destroyer) ship.length = 1;
  });

  return {
    battleShip,
    cruiser,
    carrier,
    submarine,
    destroyer,
  };
};

const gameBoard = () => {
  const board = {};
  const missed = [];
  const allShips = [];

  const getBoard = () => board;

  function placeShip(shipObject, XCoord, YCoord, direction, boardNum) {
    allShips.push(shipObject);
    let coordinates = [XCoord, YCoord];
    let join = coordinates.join("");
    board[`${join}-${boardNum}`] = [shipObject];
    if (direction === "horizontal") {
      let newY = YCoord;
      for (let i = 0; i < shipObject.length - 1; i++) {
        coordinates = [XCoord, (newY += 1)];
        join = coordinates.join("");
        board[`${join}-${boardNum}`] = [shipObject];
      }
    } else {
      let charCode = XCoord.charCodeAt(0);
      let tranlateToletter;
      for (let i = 0; i < shipObject.length - 1; i++) {
        charCode += 1;
        tranlateToletter = String.fromCharCode(charCode);
        coordinates = [tranlateToletter, YCoord];
        join = coordinates.join("");
        board[`${join}-${boardNum}`] = [shipObject];
      }
    }
  }

  function recieveAttack(coord) {
    if (coord in board) {
      board[coord][0].hit();
      board[coord].push("hit");
    } else {
      missed.push(coord);
    }
  }

  function checkAllShipsSunk(player) {
    for (let i = 0; i < allShips.length; i++) {
      if (allShips[i].length !== 0) {
        return;
      }
    }
    // eslint-disable-next-line consistent-return
    displayText.win(player);
  }

  return {
    placeShip,
    board,
    recieveAttack,
    missed,
    checkAllShipsSunk,
    getBoard,
  };
};

const Player = () => {
  const real = gameBoard();
  const computer = gameBoard();

  return {
    real,
    computer,
  };
};

const player1 = Player().real;
const player2 = Player().computer;

const gameController = (playerone = player1, playertwo = player2) => {
  const players = [playerone, playertwo];

  let activePlayer = players[0];

  const getActivePlayer = () => activePlayer;

  function switchPlayer() {
    if (activePlayer === players[0]) {
      activePlayer = players[1];
      displayText.playerTurn("computer");
    } else {
      activePlayer = players[0];
      displayText.playerTurn("playerone");
    }
  }

  function generateRandomCoord() {
    const randomX = () => {
      const num = Math.floor(Math.random() * (74 - 65 + 1)) + 65;
      return String.fromCharCode(num);
    };
    const randomY = () => Math.floor(Math.random() * 10 + 1);
    return `${randomX()}${randomY()}-2`;
  }

  function updateRecieveAttack(coord) {
    if (getActivePlayer() === playerone) player1.recieveAttack(coord);
    if (getActivePlayer() === playertwo) player2.recieveAttack(coord);
  }

  function computerMoves() {
    const randomCoord = generateRandomCoord();
    attack(randomCoord);
    updateRecieveAttack(randomCoord);
    getActivePlayer().checkAllShipsSunk("computer");
    // eslint-disable-next-line no-use-before-define
    checkContinueTurn(randomCoord);
    if (getActivePlayer() === player2) setTimeout(computerMoves, 1000);
  }

  function disableCells() {
    if (getActivePlayer() === playerone) {
      const cells = document.querySelectorAll(".cell");
      cells.forEach((n) => {
        const attribute = n.getAttribute("data-coordinate");
        if (attribute[3] === "1" || attribute[4] === "1") {
          n.removeAttribute("disabled");
        }
      });
    } else if (getActivePlayer() === playertwo) {
      const cells = document.querySelectorAll(".cell");
      cells.forEach((n) => {
        const attribute = n.getAttribute("data-coordinate");
        if (
          attribute[3] === "1" ||
          attribute[4] === "1" ||
          attribute[3] === "2" ||
          attribute[4] === "2"
        ) {
          n.disabled = true;
        }
      });
      setTimeout(computerMoves, 1000);
    }
  }

  function checkContinueTurn(coordinates) {
    if (getActivePlayer().board[coordinates]) {
      disableAttackedCells();
    } else {
      switchPlayer();
      disableCells();
      disableAttackedCells();
    }
  }

  return {
    switchPlayer,
    disableCells,
    getActivePlayer,
    updateRecieveAttack,
    checkContinueTurn,
  };
};

const allShipsPlayer1 = ships();
player1.placeShip(allShipsPlayer1.carrier, "B", 2, "vertical", 1);
player1.placeShip(allShipsPlayer1.battleShip, "D", 8, "horizontal", 1);
player1.placeShip(allShipsPlayer1.cruiser, "I", 1, "horizontal", 1);
player1.placeShip(allShipsPlayer1.submarine, "A", 4, "vertical", 1);
player1.placeShip(allShipsPlayer1.destroyer, "B", 6, "vertical", 1);

const allShipsPlayer2 = ships();
player2.placeShip(allShipsPlayer2.carrier, "B", 2, "vertical", 2);
player2.placeShip(allShipsPlayer2.battleShip, "F", 8, "horizontal", 2);
player2.placeShip(allShipsPlayer2.cruiser, "J", 5, "horizontal", 2);
player2.placeShip(allShipsPlayer2.submarine, "A", 8, "vertical", 2);
player2.placeShip(allShipsPlayer2.destroyer, "B", 6, "vertical", 2);

export { player1, player2, gameController, ships, gameBoard };
