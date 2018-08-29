'use strict';
import { randomPosition, fixedWall } from "./dice";
import { Monster } from "./monster";

export class Map {
  protected name: string;
  protected level: number;
  protected numberOfMonsters: number;
  protected canvas: HTMLCanvasElement;
  protected ctx: any;
  
  constructor(level: number = 1) {
    this.name = `Level ${level}`;
    this.level = level;
    this.numberOfMonsters = Math.floor(Math.random() * 3) + 3;
    this.canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d');
    this.DrawAllTiles(0, 0);
    this.drawWall();
  }

  drawOneTile(x: number, y: number) {
    const image = document.getElementById('floor') as HTMLImageElement;
    this.ctx.drawImage(image, x, y);
  }

  DrawAllTiles(x: number, y: number) {
    for (let row: number = 0; row < 10; row++) {
      x = 0;
      for (let column: number = 0; column < 10; column++) {
        this.drawOneTile(x, y);
        x += 72;
      }
      y += 72;
    }
  }

  drawWallItem(x: number, y:number) {
    const image = document.getElementById('wall') as HTMLImageElement;
    this.ctx.drawImage(image, x, y);
  }
  
  drawWall(): void {
    fixedWall.forEach((elem) => this.drawWallItem(elem[0], elem[1]));
  }
}


//  DRAW BACKGROUND WITH RECURSION 1:
// function DrawAllTiles(x: number, y: number, roundX: number, roundY: number) {
  //   drawOneTile(x, y);
  //   if (roundX > 0) {
    //     DrawAllTiles(x, y + 72, roundX - 1, roundY);
    //     console.log(x);
    
    //     if (roundY > 0) {
      //       DrawAllTiles(x + 72, y, roundX, roundY - 1);
      //     }
      //   }
      // }
      
//  DRAW BACKGROUND WITH RECURSION 2:
// function DrawAllTiles(x: number, y: number) {
//   drawOneTile(x, y);
//   if (x < 720) {
//     DrawAllTiles(x + 72, y);
//     if (y < 720) {
//       DrawAllTiles(x, y + 72);
//     }
//   }
// }