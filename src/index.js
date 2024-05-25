import "./style.css";
import { gridForPlayers } from "./DOM";
import { generate } from "./logic";
import DOMEvents from "./eventListener";

gridForPlayers();
generate().randomPlaceShip();
DOMEvents();
