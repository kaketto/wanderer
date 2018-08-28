'use strict';

export abstract class Character {
  protected name: string;
  protected maxHealthPoint: number;
  protected currentHealthPoint: number;
  protected DefendPoint: number;
  protected StrikePoint: number;
  protected level: number;
  protected currentPos: number[]

  // constructor(name: string, maxHealthPoint: number, currentHealthPoint: number, DefendPoint: number, StrikePoint: number, level: number, currentPos: number[]) {
  //   this.name = name;
  //   this.maxHealthPoint = maxHealthPoint;
  //   this.currentHealthPoint = currentHealthPoint;
  //   this.DefendPoint = DefendPoint;
  //   this.StrikePoint = StrikePoint;
  //   this.level = level;
  //   this.currentPos = currentPos;
  // }

  constructor(name: string, level: number, currentPos: number[]) {
    this.name = name;
    this.level = level;
    this.currentPos = currentPos;
  }

  isDead(): boolean {
    if (this.currentHealthPoint <= 0) {
      return true;
    }
  }

  abstract strike(): void;

  abstract getStarted(): void;

  abstract move(): void;
}
