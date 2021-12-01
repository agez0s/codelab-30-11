import { Controller, Get } from '@nestjs/common';
import { Exec10Service } from './exec10.service';

@Controller('exec10')
export class Exec10Controller {
  constructor(private readonly exec10Service: Exec10Service) {}

  @Get()
  getDias(): string {
    return this.exec10Service.getDias([20, 3, 14]);
  }
}
