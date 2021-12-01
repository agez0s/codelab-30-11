import { Controller, Get } from '@nestjs/common';
import { Exec08Service } from './exec08.service';

@Controller('exec08')
export class Exec08Controller {
  constructor(private readonly exec08Service: Exec08Service) {}

  @Get()
  getMaior(): string {
    return this.exec08Service.getMaior(201, 19, 15);
  }
}
