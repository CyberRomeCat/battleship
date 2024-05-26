/* eslint-disable no-unused-expressions */
import {
  attack,
  disableAttackedCells,
  displayText,
  placeUserShip,
} from "./DOM";

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
    if (ship === carrier) ship.length = 5;
    if (ship === battleShip) ship.length = 4;
    if (ship === cruiser || ship === submarine) ship.length = 3;
    if (ship === destroyer) ship.length = 2;
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
      let newY = parseInt(YCoord, 10);
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

  function recieveAttack(coord, player) {
    if (coord in board) {
      board[coord][0].hit();
      board[coord].push("hit");
    } else {
      missed.push(coord);
    }
    attack(coord, player);
  }

  function checkAllShipsSunk(player) {
    for (let i = 0; i < allShips.length; i++) {
      if (allShips[i].length !== 0) {
        return;
      }
    }
    displayText.win(player);
  }

  return {
    placeShip,
    board,
    missed,
    recieveAttack,
    allShips,
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

  let nonActivePlayer = players[1];

  const getActivePlayer = () => activePlayer;

  const getNonActivePlayer = () => nonActivePlayer;

  function switchPlayer() {
    if (activePlayer === players[0]) {
      activePlayer = players[1];
      nonActivePlayer = players[0];
      displayText.playerTurn("computer");
    } else {
      activePlayer = players[0];
      nonActivePlayer = players[1];
      displayText.playerTurn("playerone");
    }
  }

  function updateRecieveAttack(coord) {
    if (getActivePlayer() === playerone) player2.recieveAttack(coord, player2);
    if (getActivePlayer() === playertwo) player1.recieveAttack(coord, player1);
  }

  function disableCells() {
    if (getActivePlayer() === playertwo) {
      const cells = document.querySelectorAll(".cell");
      cells.forEach((n) => {
        const attribute = n.getAttribute("data-coordinate");
        if (attribute[3] === "1" || attribute[3] === "2") {
          n.disabled = true;
        }
      });
      // eslint-disable-next-line no-use-before-define
      setTimeout(CPU().computerMoves, 1000);
    } else {
      const cells = document.querySelectorAll(".cell");
      cells.forEach((n) => {
        const attribute = n.getAttribute("data-coordinate");
        if (attribute[3] === "2") {
          n.removeAttribute("disabled");
        }
      });
    }
  }

  function checkContinueTurn(coordinates) {
    if (nonActivePlayer.board[coordinates]) {
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
    getNonActivePlayer,
    updateRecieveAttack,
    checkContinueTurn,
  };
};

const controller = gameController();

const generate = () => {
  function randomCoord(boardNum, min = 10) {
    const randomX = () => {
      const num = Math.floor(Math.random() * (74 - 65 + 1)) + 65;
      return String.fromCharCode(num);
    };
    const randomY = () => Math.floor(Math.random() * min);
    return `${randomX()}${randomY()}-${boardNum}`;
  }

  const randomX = (s) => {
    const num = Math.floor(Math.random() * (74 - 65 + 1 - (s.length - 1)) + 65);
    return String.fromCharCode(num);
  };

  // eslint-disable-next-line consistent-return
  function randomDirection() {
    const randomNum = Math.floor(Math.random() * (1 - 3) + 3);
    if (randomNum === 1) return "horizontal";
    if (randomNum === 2) return "vertical";
  }

  function randomMoves(player, ship) {
    const direc = randomDirection();
    let coordinates;
    let join;
    if (direc === "horizontal") {
      const coord = randomCoord(2, ship.length);
      let newY = parseInt(coord[1], 10);
      for (let i = 0; i < ship.length - 1; i++) {
        coordinates = [coord[0], (newY += 1)];
        join = coordinates.join("");
        if (player.board[`${join}-2`]) return randomMoves(player, ship);
      }
      return player.placeShip(ship, coord[0], coord[1], direc, 2);
    }
    const x = randomX(ship);
    const y = randomCoord(2);
    let charCode = x.charCodeAt(0);
    let tranlateToletter;
    for (let i = 0; i < ship.length - 1; i++) {
      charCode += 1;
      tranlateToletter = String.fromCharCode(charCode);
      coordinates = [tranlateToletter, y[1]];
      join = coordinates.join("");
      if (player.board[`${join}-2`]) return randomMoves(player, ship);
    }
    return player.placeShip(ship, x[0], y[1], direc, 2);
  }

  function randomPlaceShip() {
    const computerShips = ships();
    const q = [
      computerShips.carrier,
      computerShips.battleShip,
      computerShips.cruiser,
      computerShips.destroyer,
      computerShips.submarine,
    ];
    while (q.length !== 0) {
      randomMoves(player2, q[0]);
      q.shift();
    }
  }

  return { randomCoord, randomPlaceShip };
};

const CPU = () => {
  function checkMissed(randomCoo) {
    if (controller.getNonActivePlayer().missed.includes(randomCoo)) {
      const newRandomCoo = generate().randomCoord(1);
      return checkMissed(newRandomCoo);
    }
    return randomCoo;
  }

  function computerMoves() {
    const randomCoord = checkMissed(generate().randomCoord(1));
    controller.updateRecieveAttack(randomCoord);
    // eslint-disable-next-line no-use-before-define
    controller.checkContinueTurn(randomCoord);
    controller.getActivePlayer().checkAllShipsSunk("computer");
    if (controller.getActivePlayer() === player2)
      setTimeout(computerMoves, 1000);
  }

  return { computerMoves };
};

// eslint-disable-next-line consistent-return
function checkPlaceShip(coord, direc, ship) {
  let coordinates;
  let join;
  let tranlateToletter;
  join = [coord[0], coord[1]].join("");
  if (player1.board[`${join}-1`]) return "q";
  if (direc === "horizontal") {
    const co = coord;
    let y = parseInt(co[1], 10);
    for (let i = 0; i < ship.length - 1; i++) {
      y += 1;
      if (y > 9) return "q";
      coordinates = [co[0], y];
      join = coordinates.join("");
      if (player1.board[`${join}-1`]) return "q";
    }
    join = [coord[0], coord[1]].join("");
    placeUserShip(`${join}-1`, ship).horizontal();
    player1.placeShip(ship, coord[0], coord[1], direc, 1);
    placeUserShip(coord, ship).horizontal();
  }
  if (direc === "vertical") {
    const co = coord;
    let x = co[0].charCodeAt(0);
    for (let i = 0; i < ship.length - 1; i++) {
      x += 1;
      if (x > 74) return "q";
      tranlateToletter = String.fromCharCode(x);
      coordinates = [tranlateToletter, co[1]];
      join = coordinates.join("");
      if (player1.board[`${join}-1`]) return "q";
    }
    join = [coord[0], coord[1]].join("");
    placeUserShip(`${join}-1`, ship).vertical();
    player1.placeShip(ship, coord[0], coord[1], direc, 1);
    placeUserShip(coord, ship).vertical();
  }
}

export {
  controller,
  player1,
  player2,
  gameController,
  ships,
  generate,
  checkPlaceShip,
};
