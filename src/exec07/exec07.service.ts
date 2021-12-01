import { Injectable } from '@nestjs/common';

@Injectable()
export class Exec07Service {
  getCategoria(idade: number): string {
    let categoria: string;
    if (idade >= 18) {
      categoria = 'Adulto';
    } else if (idade >= 14) {
      categoria = 'Juvenil B';
    } else if (idade >= 11) {
      categoria = 'Juvenil A';
    } else if (idade >= 8) {
      categoria = 'Infantil B';
    } else if (idade >= 5) {
      categoria = 'Infantil A';
    } else {
      return `Idade inválida ou nadador muito jovem (<5 anos)`;
    }
    return `O nadador com a idade de ${idade} anos pertence à categoria ${categoria}`;
  }
}
