'use strict';
import { Monster } from "./monster";

export class Keyholder extends Monster {

  constructor(posX: number, posY: number, level: number = 1, name: string = 'Keyholder') {
    super(posX, posY, level, name);
  }
}


