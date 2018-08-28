import { Character } from "./character";
import { rollDice } from "./dice";


'use strict';

export class Hero extends Character {
  
  constructor(name: string = 'Hero', level: number = 1, currentPos: number[] = [0, 0]) {
    super(name, level, currentPos);
    this.name = name;
    this.level = level;
    this.getStarted();
    this.currentPos = currentPos;
    this.appear(currentPos[0], currentPos[1]);
  }

  strike(): void {
    throw new Error("Method not implemented.");
  }

  getStarted(): void {
    this.maxHealthPoint = 20 + rollDice() + rollDice() + rollDice();
    this.currentHealthPoint = this.maxHealthPoint;
    this.DefendPoint = rollDice() + rollDice();
    this.StrikePoint = 5 + rollDice();
  }

  appear(x: number, y: number) {
    const image = document.getElementById('hero-down') as HTMLImageElement;
    this.ctx.drawImage(image, x, y);
  }

  moveRight(): void {
    if (super.getCurrentPos()[0] === 648) {
      const image = document.getElementById('hero-right') as HTMLImageElement;
      this.ctx.drawImage(image, this.currentPos[0], this.currentPos[1]);
    } else {
      const image = document.getElementById('hero-right') as HTMLImageElement;
      this.ctx.drawImage(image, this.currentPos[0] + 72, this.currentPos[1]);
      this.currentPos = [this.currentPos[0] + 72, this.currentPos[1]];
    }
  }

  moveLeft(): void {
    if (super.getCurrentPos()[0] === 0) {
      const image = document.getElementById('hero-left') as HTMLImageElement;
      this.ctx.drawImage(image, this.currentPos[0], this.currentPos[1]);
    } else { 
      const image = document.getElementById('hero-left') as HTMLImageElement;
      this.ctx.drawImage(image, this.currentPos[0] - 72, this.currentPos[1]);
      this.currentPos = [this.currentPos[0] - 72, this.currentPos[1]];
    }
  }

  moveUp(): void {
    if (super.getCurrentPos()[1] === 0) {
      const image = document.getElementById('hero-up') as HTMLImageElement;
      this.ctx.drawImage(image, this.currentPos[0], this.currentPos[1]);
    } else { 
    const image = document.getElementById('hero-up') as HTMLImageElement;
    this.ctx.drawImage(image, this.currentPos[0], this.currentPos[1] - 72);
    this.currentPos = [this.currentPos[0], this.currentPos[1] - 72];
    }
  }

  moveDown(): void {
    if (super.getCurrentPos()[1] === 648) {
      const image = document.getElementById('hero-down') as HTMLImageElement;
      this.ctx.drawImage(image, this.currentPos[0], this.currentPos[1]);
    } else {  
      const image = document.getElementById('hero-down') as HTMLImageElement;
      this.ctx.drawImage(image, this.currentPos[0], this.currentPos[1] + 72);
      this.currentPos = [this.currentPos[0], this.currentPos[1] + 72];
    }  
  }
  
  gameEnd(): void {
    if (super.isDead) {
      console.log(`GAME OVER`);
    }
  }
}

