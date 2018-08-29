'use strict';
import { Map } from "./map";
import { Hero } from "./hero";
import { Monster } from "./monster";
import { Keyholder } from "./keyholder";
import { Boss } from "./boss";

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export let level1: Map = new Map(1);
let skeleton1 = new Monster();
let skeleton2 = new Monster();
let keyholder = new Keyholder();
let boss = new Boss();
let you = new Hero();

let stepCounter: number = 0;
function onKeyPress(event: any) {
  switch (event.keyCode) {
    case 37:
      level1.drawOneTile(you.getCurrentPos()[0], you.getCurrentPos()[1]);
      you.moveLeft();
      if (stepCounter % 2 === 0) {
        level1.drawOneTile(skeleton1.getCurrentPos()[0], skeleton1.getCurrentPos()[1]);
        skeleton1.move();
        level1.drawOneTile(skeleton2.getCurrentPos()[0], skeleton2.getCurrentPos()[1]);
        skeleton2.move();
        level1.drawOneTile(keyholder.getCurrentPos()[0], keyholder.getCurrentPos()[1]);
        keyholder.move();
        level1.drawOneTile(boss.getCurrentPos()[0], boss.getCurrentPos()[1]);
        boss.move();
      }
      stepCounter++;
      break;
    case 38:
      level1.drawOneTile(you.getCurrentPos()[0], you.getCurrentPos()[1]);
      you.moveUp();
      if (stepCounter % 2 === 0) {
        level1.drawOneTile(skeleton1.getCurrentPos()[0], skeleton1.getCurrentPos()[1]);
        skeleton1.move();
        level1.drawOneTile(skeleton2.getCurrentPos()[0], skeleton2.getCurrentPos()[1]);
        skeleton2.move();
        level1.drawOneTile(keyholder.getCurrentPos()[0], keyholder.getCurrentPos()[1]);
        keyholder.move();
        level1.drawOneTile(boss.getCurrentPos()[0], boss.getCurrentPos()[1]);
        boss.move();
      }
      stepCounter++;
      break;
    case 39:
      level1.drawOneTile(you.getCurrentPos()[0], you.getCurrentPos()[1]);
      you.moveRight();
      if (stepCounter % 2 === 0) {
        level1.drawOneTile(skeleton1.getCurrentPos()[0], skeleton1.getCurrentPos()[1]);
        skeleton1.move();
        level1.drawOneTile(skeleton2.getCurrentPos()[0], skeleton2.getCurrentPos()[1]);
        skeleton2.move();
        level1.drawOneTile(keyholder.getCurrentPos()[0], keyholder.getCurrentPos()[1]);
        keyholder.move();
        level1.drawOneTile(boss.getCurrentPos()[0], boss.getCurrentPos()[1]);
        boss.move();
      }
      stepCounter++;
      break;
    case 40:
      level1.drawOneTile(you.getCurrentPos()[0], you.getCurrentPos()[1]);
      you.moveDown();
      if (stepCounter % 2 === 0) {
        level1.drawOneTile(skeleton1.getCurrentPos()[0], skeleton1.getCurrentPos()[1]);
        skeleton1.move();
        level1.drawOneTile(skeleton2.getCurrentPos()[0], skeleton2.getCurrentPos()[1]);
        skeleton2.move();
        level1.drawOneTile(keyholder.getCurrentPos()[0], keyholder.getCurrentPos()[1]);
        keyholder.move();
        level1.drawOneTile(boss.getCurrentPos()[0], boss.getCurrentPos()[1]);
        boss.move();
      }
      stepCounter++;
      break;
  }
}

document.body.addEventListener('keydown', onKeyPress);
