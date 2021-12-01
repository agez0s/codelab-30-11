import { Controller, Get } from '@nestjs/common';
import { Exec01Service } from './exec01.service';
@Controller('exec01')
export class Exec01Controller {
  constructor(private readonly exec01Service: Exec01Service) {}

  @Get('soma')
  getSoma(): number {
    return this.exec01Service.getSoma(5, 5);
  }
  @Get('mult')
  getMult(): number {
    return this.exec01Service.getMult(5, 5);
  }
  @Get('sub')
  getSub(): number {
    return this.exec01Service.getSub(5, 5);
  }
  @Get('div')
  getDiv(): number {
    return this.exec01Service.getDiv(5, 5);
  }
  @Get('pot')
  getPot(): number {
    return this.exec01Service.getPot(5, 5);
  }
  @Get('raiz')
  getRaiz(): number {
    return this.exec01Service.getRaiz(5);
  }
  @Get('porcentagem')
  getPorcentagem(): number {
    return this.exec01Service.getPorcentagem(5, 20);
  }
  @Get('seno')
  getSeno(): number {
    return this.exec01Service.getSeno(5);
  }
  @Get('cosseno')
  getCosseno(): number {
    return this.exec01Service.getCosseno(5);
  }
  @Get('tangente')
  getTangente(): number {
    return this.exec01Service.getTangente(5);
  }
}
