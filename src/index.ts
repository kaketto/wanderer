'use strict';
import { Game } from "./game";
import { Boss } from "./boss";
import { Keyholder } from "./keyholder";

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export let newGame = new Game(1);
newGame.start();
console.log(newGame);

let statistics = <HTMLElement>document.getElementById( 'statistics' );
let stats: string = `\r\nMap level ${newGame.printGameLevel()}\r\n \r\n ${newGame.hero.printStat()}\r\n`;
newGame.characters.forEach(item => stats += item.printStat());
statistics.innerText = stats;

let stepCounter: number = 0;
function onKeyPress(event: any) {
  switch (event.keyCode) {
    
    case 37:
    if (stepCounter % 2 === 0) {
      for (let i: number = 0; i < newGame.characters.length; i++) {
        ctx.drawImage(newGame.imageFloor, newGame.characters[i].getCurrentPos()[0], newGame.characters[i].getCurrentPos()[1]);
        newGame.characters[i].move();
      }
    }
    ctx.drawImage(newGame.imageFloor, newGame.hero.getCurrentPos()[0], newGame.hero.getCurrentPos()[1]);
    newGame.hero.moveLeft();
    stepCounter++;
    break;
    
    case 38:
    if (stepCounter % 2 === 0) {
      for (let i: number = 0; i < newGame.characters.length; i++) {
        ctx.drawImage(newGame.imageFloor, newGame.characters[i].getCurrentPos()[0], newGame.characters[i].getCurrentPos()[1]);
        newGame.characters[i].move();
      }
    }  
    ctx.drawImage(newGame.imageFloor, newGame.hero.getCurrentPos()[0], newGame.hero.getCurrentPos()[1]);
    newGame.hero.moveUp();
    stepCounter++;
    break;
    
    case 39:
    if (stepCounter % 2 === 0) {
      for (let i: number = 0; i < newGame.characters.length; i++) {
        ctx.drawImage(newGame.imageFloor, newGame.characters[i].getCurrentPos()[0], newGame.characters[i].getCurrentPos()[1]);
        newGame.characters[i].move();
      }
    }  
    ctx.drawImage(newGame.imageFloor, newGame.hero.getCurrentPos()[0], newGame.hero.getCurrentPos()[1]);
    newGame.hero.moveRight();
    stepCounter++;
    break;
    
    case 40:
    if (stepCounter % 2 === 0) {
      for (let i: number = 0; i < newGame.characters.length; i++) {
        ctx.drawImage(newGame.imageFloor, newGame.characters[i].getCurrentPos()[0], newGame.characters[i].getCurrentPos()[1]);
        newGame.characters[i].move();
      }
    }  
    ctx.drawImage(newGame.imageFloor, newGame.hero.getCurrentPos()[0], newGame.hero.getCurrentPos()[1]);
    newGame.hero.moveDown();
    stepCounter++;
    break;
    
    case 32:
    for (let i: number = 0; i < newGame.characters.length; i++) {
      if (newGame.hero.getCurrentPos()[0] === newGame.characters[i].getCurrentPos()[0] && newGame.hero.getCurrentPos()[1] === newGame.characters[i].getCurrentPos()[1]) {
        newGame.hero.strike(newGame.characters[i]);  
        if (newGame.characters[i].getHP() <= 0) {
          newGame.characters[i].isAlive = false;
          newGame.characters.splice(i, 1);
          newGame.hero.winBattle();
          if (newGame.characters.every(item => !(item instanceof Boss) && !(item instanceof Keyholder))) {
            newGame.levelUp();
          }
        } else {
          newGame.characters[i].strike(newGame.hero);
          if (newGame.hero.getHP() <= 0) {
            newGame.hero.gameEnd();
            alert('GAME OVER');
            window.location.reload();
          }
        }
      } 
    }
    let stats: string = `\r\nMap level ${newGame.printGameLevel()}\r\n \r\n ${newGame.hero.printStat()}\r\n`;
    newGame.characters.forEach(item => stats += item.printStat());
    statistics.innerText = stats;
    break;
  } 
}

document.body.addEventListener('keydown', onKeyPress);
