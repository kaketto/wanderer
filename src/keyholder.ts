'use strict';
import { Monster } from "./monster";

export class Keyholder extends Monster {

  constructor(name: string = 'Keyholder') {
    super(name);
    this.name = name;
  }

  gameEnd(): void {
    if (super.isDead) {
      console.log(`Next level`);
    }
  }
}


