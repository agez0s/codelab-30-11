import { Injectable } from '@nestjs/common';

@Injectable()
export class Exec01Service {
  getSoma(numero1: number, numero2: number): number {
    return numero1 + numero2;
  }
  getSub(numero1: number, numero2: number): number {
    return numero1 - numero2;
  }

  getMult(numero1: number, numero2: number): number {
    return numero1 * numero2;
  }

  getDiv(numero1: number, numero2: number): number {
    return numero1 / numero2;
  }

  getPot(numero1: number, numero2: number): number {
    return numero1 ** numero2;
  }

  getRaiz(numero1: number): number {
    return Math.sqrt(numero1);
  }

  getPorcentagem(numero1: number, numero2: number) {
    return (numero1 / numero2) * 100;
  }

  getSeno(numero: number) {
    return Math.sin(numero);
  }

  getCosseno(numero: number) {
    return Math.cos(numero);
  }

  getTangente(numero: number) {
    return Math.tan(numero);
  }
}
