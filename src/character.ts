'use strict';

export abstract class Character {
  protected name: string;
  protected maxHealthPoint: number;
  protected currentHealthPoint: number;
  protected DefendPoint: number;
  protected StrikePoint: number;
  protected level: number;
  protected currentPos: number[];
  protected canvas: HTMLCanvasElement;
  protected ctx: any;

  constructor(name: string, level: number, currentPos: number[]) {
    this.name = name;
    this.level = level;
    this.currentPos = currentPos;
    this.canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
  }

  isDead(): boolean {
    if (this.currentHealthPoint <= 0) {
      return true;
    }
  }

  getCurrentPos(): number[] {
    return this.currentPos;
  }

  abstract strike(): void;
  abstract getStarted(): void;
}
