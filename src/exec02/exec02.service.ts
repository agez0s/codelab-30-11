import { Injectable } from '@nestjs/common';

@Injectable()
export class Exec02Service {
  getMenorMaior(array: Array<number>): Array<number> {
    return array.sort((a, b) => a - b);
  }
  getMaiorMenor(array: Array<number>): Array<number> {
    return array.sort((a, b) => b - a);
  }
}
