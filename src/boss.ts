'use strict';
import { rollDice, randomPosition, fixedWall } from "./dice";
import { Monster } from "./monster";

export class Boss extends Monster {
  
  constructor(name: string = 'Boss', level: number = 1, currentPos: number[] = [randomPosition()[0], randomPosition()[1]]) {
    super(name, level, currentPos);
    this.name = name;
    this.level = level;
    this.getStarted();
    this.currentPos = currentPos;
    this.appear();
  }

  strike(): void {
    throw new Error("Method not implemented.");
  }

  getStarted(): void {
    this.maxHealthPoint = (rollDice() + rollDice()) * this.level;
    this.currentHealthPoint = this.maxHealthPoint;
    this.DefendPoint = rollDice() * this.level / 2;
    this.StrikePoint = rollDice() * this.level;
  }

  appear() {
    if (fixedWall.some((elem) => elem[0] === this.currentPos[0] && elem[1] === this.currentPos[1])) {
      this.appear();
    } else {
      const image = document.getElementById('boss') as HTMLImageElement;
      this.ctx.drawImage(image, this.currentPos[0], this.currentPos[1]);
    }  
  }

  move() {
    let possibleMove: number[][] = [[this.currentPos[0] + 72, this.currentPos[1]], [this.currentPos[0] - 72, this.currentPos[1]], 
      [this.currentPos[0], this.currentPos[1] + 72], [this.currentPos[0], this.currentPos[1] - 72]];
    let randomMove: number[] = possibleMove[Math.floor(Math.random() * 4)];
    if (fixedWall.some((elem) => elem[0] === randomMove[0] && elem[1] === randomMove[1]) || randomMove[0] === 720 || randomMove[0] === -72 || 
      randomMove[1] === 720 || randomMove[1] === -72) {
      this.move();
    } else {
      const image = document.getElementById('boss') as HTMLImageElement;
      this.ctx.drawImage(image, randomMove[0], randomMove[1]);
      this.currentPos = randomMove;
    }
  }
  
  gameEnd(): void {
    if (super.isDead) {
      console.log(`Well done, keep going`);
    }
  }
}
