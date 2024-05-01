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

  function placeShip(shipObject, XCoord, YCoord, direction) {
    allShips.push(shipObject);
    let coordinates = [XCoord, YCoord];
    let join = coordinates.join("");
    board[join] = [shipObject];
    if (direction === "horizontal") {
      let newY = YCoord;
      for (let i = 0; i < shipObject.length - 1; i++) {
        coordinates = [XCoord, (newY += 1)];
        join = coordinates.join("");
        board[join] = [shipObject];
      }
    } else {
      let charCode = XCoord.charCodeAt(0);
      let tranlateToletter;
      for (let i = 0; i < shipObject.length - 1; i++) {
        charCode += 1;
        tranlateToletter = String.fromCharCode(charCode);
        coordinates = [tranlateToletter, YCoord];
        join = coordinates.join("");
        board[join] = [shipObject];
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

  function checkAllShipsSunk() {
    for (let i = 0; i < allShips.length; i++) {
      if (allShips[i].length !== 0) {
        return "not over";
      }
    }
    return "GameOver";
  }

  return {
    placeShip,
    board,
    recieveAttack,
    missed,
    checkAllShipsSunk,
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

export { ships, gameBoard, Player };