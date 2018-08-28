import { Map } from "./map";
import { Hero } from "./hero";

'use strict';

let level1: Map = new Map(1);
level1.DrawAllTiles(0, 0);
//drawWall();

let you = new Hero();

function onKeyPress(event: any) {
  switch (event.keyCode) {
    case 37:
      level1.drawOneTile(you.getCurrentPos()[0], you.getCurrentPos()[1]);
      you.moveLeft();
      break;
    case 38:
      level1.drawOneTile(you.getCurrentPos()[0], you.getCurrentPos()[1]);
      you.moveUp();
      break;
    case 39:
      level1.drawOneTile(you.getCurrentPos()[0], you.getCurrentPos()[1]);
      you.moveRight();
      break;
    case 40:
      level1.drawOneTile(you.getCurrentPos()[0], you.getCurrentPos()[1]);
      you.moveDown();
      break;
  }
}

document.body.addEventListener('keydown', onKeyPress);
