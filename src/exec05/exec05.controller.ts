import { Controller, Get } from '@nestjs/common';
import { Exec05Service } from './exec05.service';

@Controller('exec05')
export class Exec05Controller {
  constructor(private readonly exec05Service: Exec05Service) {}
  @Get()
  getMaior(): number {
    return this.exec05Service.getMaior(7, 9, 4);
  }
}
