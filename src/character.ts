import { rollDice } from "./dice";

'use strict';

export abstract class Character {
  protected name: string;
  protected maxHealthPoint: number;
  protected currentHealthPoint: number;
  protected DefendPoint: number;
  protected StrikePoint: number;
  protected level: number;
  protected posX: number; 
  protected posY: number; 
  protected canvas: HTMLCanvasElement;
  protected ctx: any;
  public isAlive: boolean;

  constructor(posX: number, posY: number, level: number, name: string) {
    this.name = name;
    this.level = level;
    this.posX = posX;
    this.posY = posY;
    this.canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.isAlive = true;
  }

  abstract getStarted(): void;
  abstract appear(): void;
  
  getCurrentPos(): number[] {
    let currentPos: number [] = [this.posX, this.posY];
    return currentPos;
  }
  
  getDP(): number {
    return this.DefendPoint;
  }

  getHP(): number {
    return this.currentHealthPoint;
  }

  getName(): string {
    return this.name;
  }
  
  strike(defender: Character): void {
    let strikeValue: number = this.StrikePoint + rollDice() * 2;
    console.log(`${this.name} striked with ${strikeValue}`);
    if (strikeValue > defender.getDP()) {
      defender.getHurt(strikeValue);
    }
  }
  
  getHurt(defenderSV: number): void {
    this.currentHealthPoint -= defenderSV - this.DefendPoint;
    console.log(`${this.name}'s HP reduced to ${this.currentHealthPoint}`); 
  }

  printStat(): string {
    if (this.currentHealthPoint< 0) {
      this.currentHealthPoint = 0;
    }
    return `${this.name} (Level ${this.level}) HP: ${this.currentHealthPoint}/${this.maxHealthPoint} | DP: ${this.DefendPoint} | SP: ${this.StrikePoint}\r\n`;
  }
}
