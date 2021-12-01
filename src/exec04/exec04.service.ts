import { Injectable } from '@nestjs/common';

@Injectable()
export class Exec04Service {
  getMedia(nota1: number, nota2: number, nota3: number): string {
    const soma = nota1 + nota2 + nota3;
    const media = soma / 3;
    if (soma >= 7) {
      return `Parabéns, o aluno foi aprovado com média ${media.toFixed(2)}`;
    } else {
      return `Infelizmente o aluno foi reprovado com média ${media.toFixed(2)}`;
    }
  }
}
