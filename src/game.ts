'use strict';
import { Keyholder } from "./keyholder";
import { Hero } from "./hero";
import { Boss } from "./boss";
import { Monster } from "./monster";

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

export class Game {
  private level: number;
  public hero: Hero;
  private boss: Boss;
  private keyholder: Keyholder;
  public characters: Monster[];
  public currentWall: number[][];
  public imageFloor: HTMLImageElement;
  private imageWall: HTMLImageElement;

  constructor(level: number = 1) {
    this.level = level;
    this.imageFloor = document.getElementById('floor') as HTMLImageElement;
    this.imageWall = document.getElementById('wall') as HTMLImageElement;
    this.currentWall = [];
    this.drawMap(0, 0);
    this.hero = new Hero();
  }
  
  drawMap(x: number, y: number):void {
    for (let row: number = 0; row < 10; row++) {
      x = 0;
      for (let column: number = 0; column < 10; column++) {
        ctx.drawImage(this.imageFloor, x, y);
        x += 72;
      }
      y += 72;
    }
    for (let coordX: number = 72; coordX < canvas.width; coordX += 144) {
      for (let i: number = 0; i < 5; i++) {
        let coordY: number = Math.floor(Math.random() * 10) * 72;
        this.currentWall.push([coordX, coordY]);
      }
    }
    this.currentWall.forEach((elem) => ctx.drawImage(this.imageWall, elem[0], elem[1]));    
  }

  createSkeletons() {
    let numberOfSkeletons: number = Math.ceil(Math.random() * 3 + 1);
    for (let i: number = 0; i < numberOfSkeletons; i++) {
      this.characters.push(new Monster(Math.ceil(Math.random() * 4) * 144, Math.floor(Math.random() * 10) * 72, this.level));
    }
  }
  
  start() {
    this.boss = new Boss(Math.ceil(Math.random() * 4) * 144, Math.floor(Math.random() * 10) * 72, this.level);
    this.keyholder = new Keyholder(Math.ceil(Math.random() * 4) * 144, Math.floor(Math.random() * 10) * 72, this.level);
    this.characters = [this.boss, this.keyholder];
    this.createSkeletons();
  }

  levelUp() {
    this.level++;
    this.currentWall = [];
    this.drawMap(0, 0);
    this.hero.resetStartPos();
    this.hero.appear();
    // let newBoss = new Boss(Math.ceil(Math.random() * 4) * 144, Math.floor(Math.random() * 10) * 72, this.level);
    // let newKeyholder = new Keyholder(Math.ceil(Math.random() * 4) * 144, Math.floor(Math.random() * 10) * 72, this.level);
    this.characters = [new Boss(Math.ceil(Math.random() * 4) * 144, Math.floor(Math.random() * 10) * 72, this.level), new Keyholder(Math.ceil(Math.random() * 4) * 144, Math.floor(Math.random() * 10) * 72, this.level)];
    this.createSkeletons();
  }

  printGameLevel(): number {
    return this.level;
  }
} 


