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

  const battleShip = { ...tasks};
  const cruiser = { ...tasks};
  const carrier = { ...tasks};
  const submarine = { ...tasks};
  const destroyer = { ...tasks};

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

  function placeShip(shipObject, XCoord, YCoord,direction) {
    let coordinates = [XCoord,YCoord];
    let join = coordinates.join("");
    board[join] = shipObject;
    if(direction === 'horizontal') {
      let newY = YCoord
      for (let i = 0; i < shipObject.length - 1; i++) {
        coordinates = [XCoord, newY += 1] 
        join = coordinates.join("");
        board[join] = shipObject
      }
    } else {
      let charCode = XCoord.charCodeAt(0);  
      let tranlateToletter;   
      for(let i = 0; i < shipObject.length - 1; i++) {
        charCode += 1;
        tranlateToletter = String.fromCharCode(charCode)
        coordinates = [tranlateToletter, YCoord];
        join = coordinates.join("");
        board[join] = shipObject
      }
    }
  }

  return {
    placeShip,
    board
  }
}

export {gameBoard, ships}
