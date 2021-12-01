import { Injectable } from '@nestjs/common';

@Injectable()
export class Exec03Service {
  getCtoF(temp: number): number {
    return (temp * 9) / 5 + 32;
  }
  getCtoK(temp: number): number {
    return temp + 273;
  }
  getFtoK(temp: number): number {
    return ((temp - 32) * 5) / 9 + 273;
  }
}
