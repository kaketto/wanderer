'use strict';
import { Character } from "./character";
import { rollDice } from "./dice";
import { newGame } from ".";

export class Monster extends Character {
  protected image: HTMLImageElement;

  constructor(posX: number, posY: number, level: number = 1, name: string = 'Monster') {
    super(posX, posY, level, name);
    this.image = document.getElementById('skeleton') as HTMLImageElement;
    this.getStarted();
    this.appear();
  }

  getStarted(): void {
    let chanceOfLevel: number = Math.random();
    if (chanceOfLevel < 0.1) {
      this.level += 2;
    } else if (chanceOfLevel < 0.5) {
      this.level += 1;
    } 
    this.maxHealthPoint = rollDice() * 2 * this.level;
    this.currentHealthPoint = this.maxHealthPoint;
    this.DefendPoint = rollDice() * this.level / 2;
    this.StrikePoint = rollDice() * this.level;
  }

  appear() {
    this.ctx.drawImage(this.image, this.posX, this.posY);    
  }  
  
  move() {
    if (this.isAlive) {
      let possibleMove: number[][] = [[this.posX + 72, this.posY], [this.posX - 72, this.posY], 
        [this.posX, this.posY + 72], [this.posX, this.posY - 72]];
      let randomMove: number[] = possibleMove[Math.floor(Math.random() * 4)];
      if (newGame.currentWall.some((elem: number[]) => elem[0] === randomMove[0] && elem[1] === randomMove[1]) || randomMove[0] === 720 || randomMove[0] === -72 || 
        randomMove[1] === 720 || randomMove[1] === -72) {
        this.move();
      } else {
        this.posX = randomMove[0];
        this.posY = randomMove[1];
      }
      this.appear();
    }  
  }
}
