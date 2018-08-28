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

  move(): void {
    throw new Error("Method not implemented.");
  }

  gameEnd(): void {
    if (super.isDead) {
      console.log(`GAME OVER`);
    }
  }
}

let me = new Hero();
console.log(me);
