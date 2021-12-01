import { Controller, Get } from '@nestjs/common';
import { Exec03Service } from './exec03.service';

@Controller('exec03')
export class Exec03Controller {
  constructor(private readonly exec03Service: Exec03Service) {}
  @Get('ctof')
  getCtoF(): number {
    return this.exec03Service.getCtoF(100);
  }
  @Get('ctok')
  getCtoK(): number {
    return this.exec03Service.getCtoK(100);
  }
  @Get('ftok')
  getFtoK(): number {
    return this.exec03Service.getFtoK(100);
  }
}
