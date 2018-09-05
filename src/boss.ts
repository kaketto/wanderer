'use strict';
import { rollDice } from "./dice";
import { Monster } from "./monster";

export class Boss extends Monster {
  protected image: HTMLImageElement;

  constructor(posX: number, posY: number, level: number = 1, name: string = 'Boss') {
    super(posX, posY, level, name);
    this.image = document.getElementById('boss') as HTMLImageElement;
    this.getStarted();
  }

  getStarted(): void {
    let chanceOfLevel: number = Math.random();
    if (chanceOfLevel < 0.1) {
      this.level += 2;
    } else if (chanceOfLevel < 0.5) {
      this.level += 1;
    } 
    this.maxHealthPoint = rollDice() * 2 * this.level + rollDice();
    this.currentHealthPoint = this.maxHealthPoint;
    this.DefendPoint = rollDice() * this.level / 2 + rollDice() / 2;
    this.StrikePoint = rollDice() * this.level + this.level;
  }
}
