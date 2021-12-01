import { Injectable } from '@nestjs/common';

@Injectable()
export class Exec09Service {
  getTempo(tempo: number): string {
    let [hora, minutos, segundos] = [0, 0, 0];

    if (tempo >= 60) {
      minutos = Math.floor(tempo / 60);
      segundos = tempo % 60;
    }
    if (minutos >= 60) {
      hora = Math.floor(minutos / 60);
      minutos = minutos % 60;
    }
    return `${tempo} segundos equivalem a ${hora} hora(s), ${minutos} minuto(s), ${segundos} segundo(s)`;
  }
}
