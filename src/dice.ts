'use strict';

export function rollDice(): number {
  return Math.ceil(Math.random() * 6);
}

export function randomPosition(): number[] {
  return [Math.floor(Math.random() * 10) * 72, Math.floor(Math.random() * 10) * 72];
}

export function randomWall(): number[][] {
  let numberOfWall: number = 30;
  let randomWalls: number[][] = [];
  for (let i: number = 0; i < numberOfWall; i++) {
    randomWalls.push(randomPosition());
  }
  return randomWalls;
}

export let fixedWall: number[][] = [ [ 360, 432 ], [ 0, 576 ], [ 648, 504 ], [ 504, 288 ], [ 504, 0 ], [ 216, 144 ], [ 72, 360 ],
[ 288, 144 ], [ 216, 576 ], [ 576, 576 ], [ 0, 360 ], [ 504, 288 ], [ 576, 144 ], [ 360, 216 ], [ 432, 360 ], [ 216, 72 ], [ 72, 216 ],
[ 288, 216 ], [ 432, 0 ], [ 216, 216 ], [ 216, 288 ], [ 432, 648 ], [ 360, 504 ], [ 576, 72 ], [ 0, 288 ], [ 648, 0 ], [ 216, 648 ],
[ 216, 72 ] ];


