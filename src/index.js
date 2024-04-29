const ships = () => {
  let tasks = {
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

  let battleShip = Object.assign({}, tasks);
  let cruiser = Object.assign({}, tasks);
  let carrier = Object.assign({}, tasks);
  let submarine = Object.assign({}, tasks);
  let destroyer = Object.assign({}, tasks);

  let allShips = [battleShip, cruiser, carrier, submarine, destroyer];
  allShips.forEach((ship) => {
    if (ship === carrier) ship.length = 5;
    if (ship == battleShip) ship.length = 4;
    if (ship == cruiser || ship == submarine) ship.length = 3;
    if (ship == destroyer) ship.length = 2;
  });

  return {
    battleShip,
    cruiser,
    carrier,
    submarine,
    destroyer,
  };
};
