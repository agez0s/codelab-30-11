import { Controller, Get } from '@nestjs/common';
import { Exec02Service } from './exec02.service';
@Controller('exec02')
export class Exec02Controller {
  constructor(private readonly exec02Service: Exec02Service) {}

  @Get('menormaior')
  getMenorMaior(): Array<number> {
    return this.exec02Service.getMenorMaior([4, 9, 192, 9348, 1923, 1]);
  }
  @Get('maiormenor')
  getMaiorMenor(): Array<number> {
    return this.exec02Service.getMaiorMenor([4, 9, 192, 9348, 1923, 1]);
  }
}
