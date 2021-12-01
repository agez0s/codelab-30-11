import { Injectable } from '@nestjs/common';

@Injectable()
export class Exec10Service {
  getDias(data: Array<number>): string {
    const dias = data[0] * 365 + data[1] * 30 + data[2];
    return `Uma pessoa com ${data[0]} ano(s), ${data[1]} mes(es) e ${data[2]} dia(s) tem, no total, ${dias} dias de vida`;
  }
}
