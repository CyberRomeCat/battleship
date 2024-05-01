import "./style.css";
import changeColor from "./DOM";
import { ships, Player } from "./logic";

const player1 = Player().real;
const player2 = Player().computer;

const allShipsPlayer1 = ships();
player1.placeShip(allShipsPlayer1.carrier, "B", 2, "vertical");
player1.placeShip(allShipsPlayer1.battleShip, "D", 8, "horizontal");
player1.placeShip(allShipsPlayer1.cruiser, "I", 1, "horizontal");
player1.placeShip(allShipsPlayer1.submarine, "A", 8, "vertical");
player1.placeShip(allShipsPlayer1.destroyer, "B", 6, "vertical");

const allShipsPlayer2 = ships();
player2.placeShip(allShipsPlayer2.carrier, "B", 2, "vertical");
player2.placeShip(allShipsPlayer2.battleShip, "D", 8, "horizontal");
player2.placeShip(allShipsPlayer2.cruiser, "I", 1, "horizontal");
player2.placeShip(allShipsPlayer2.submarine, "A", 8, "vertical");
player2.placeShip(allShipsPlayer2.destroyer, "B", 6, "vertical");

changeColor();
