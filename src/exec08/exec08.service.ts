import { Injectable } from '@nestjs/common';

@Injectable()
export class Exec08Service {
  getMaior(num1: number, num2: number, num3: number): string {
    const maior = Math.max(num1, num2, num3);
    return `O número ${maior} é o maior`;
  }
}
