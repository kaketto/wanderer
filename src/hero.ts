'use strict';
import { Character } from "./character";
import { rollDice } from "./dice";
import { newGame } from ".";


export class Hero extends Character {
  private imageDown: HTMLImageElement;
  private imageUp: HTMLImageElement;
  private imageRight: HTMLImageElement;
  private imageLeft: HTMLImageElement;
  
  constructor(posX: number = 0, posY: number = 0, level: number = 1, name: string = 'Hero') {
    super(posX, posY, level, name);
    this.imageDown = document.getElementById('hero-down') as HTMLImageElement;
    this.imageUp = document.getElementById('hero-up') as HTMLImageElement;
    this.imageRight = document.getElementById('hero-right') as HTMLImageElement;
    this.imageLeft = document.getElementById('hero-left') as HTMLImageElement;
    this.getStarted();
    this.appear();
  }

  getStarted(): void {
    this.maxHealthPoint = 20 + rollDice() * 3;
    this.currentHealthPoint = this.maxHealthPoint;
    this.DefendPoint = 2 * rollDice();
    this.StrikePoint = 5 + rollDice();
  }

  appear(): void {
    this.ctx.drawImage(this.imageDown, this.posX, this.posY);
  }
  
  resetStartPos(): void {
    this.posX = 0;
    this.posY = 0;
    let chanceOfRestoreHP: number = Math.random();
    if (chanceOfRestoreHP < 0.5) {
      this.currentHealthPoint += this.maxHealthPoint * 0.1;
    } else if (chanceOfRestoreHP < 0.9) {
      this.currentHealthPoint += Math.round(this.maxHealthPoint / 3);
    } else {
      this.currentHealthPoint = this.maxHealthPoint;
    }
    if (this.currentHealthPoint > this.maxHealthPoint) {
      this.currentHealthPoint = this.maxHealthPoint;
    }
  }

  winBattle(): void {
    this.currentHealthPoint += rollDice();
    if (this.currentHealthPoint > this.maxHealthPoint) {
      this.currentHealthPoint = this.maxHealthPoint
    }
    this.DefendPoint += rollDice();
    this.StrikePoint += rollDice();
    this.level++;
  }

  moveRight(): void {
    if (this.posX === 648 || (newGame.currentWall.some((elem: number[]) => elem[0] === this.posX + 72 && elem[1] === this.posY))) {
      this.ctx.drawImage(this.imageRight, this.posX, this.posY);
    } else {
      this.posX += 72;
      this.ctx.drawImage(this.imageRight, this.posX, this.posY);
    }
  }

  moveLeft(): void {
    if (this.posX === 0 || (newGame.currentWall.some((elem: number[]) => elem[0] === this.posX - 72 && elem[1] === this.posY))) {
      this.ctx.drawImage(this.imageLeft, this.posX, this.posY);
    } else { 
      this.posX -= 72;
      this.ctx.drawImage(this.imageLeft, this.posX, this.posY);
    }
  }

  moveUp(): void {
    if (this.posY === 0 || (newGame.currentWall.some((elem: number[]) => elem[0] === this.posX && elem[1] === this.posY - 72))) {
      this.ctx.drawImage(this.imageUp, this.posX, this.posY);
    } else { 
      this.posY -= 72;
      this.ctx.drawImage(this.imageUp, this.posX, this.posY);
    }
  }

  moveDown(): void {
    if (this.posX === 648 || (newGame.currentWall.some((elem: number[]) => elem[0] === this.posX && elem[1] === this.posY + 72))){
      this.ctx.drawImage(this.imageDown, this.posX, this.posY);
    } else {  
      this.posY += 72,
      this.ctx.drawImage(this.imageDown, this.posX, this.posY);
    }  
  }
  
  gameEnd(): void {
      alert `GAME OVER`;
    }
}

