import { Injectable } from '@nestjs/common';

@Injectable()
export class Exec06Service {
  getNumero(numero: number): string {
    let positivo = 'não é positivo.';
    const impar = numero % 2;
    if (numero === 0) {
      return 'O número é zero!';
    } else if (numero > 0) {
      positivo = 'é positivo.';
    }
    if (impar == 0) {
      return `O número ${numero} é par e ${positivo}`;
    } else {
      return `O número ${numero} é ímpar e ${positivo}`;
    }
  }
}
