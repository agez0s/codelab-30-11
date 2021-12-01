import { Controller, Get } from '@nestjs/common';
import { Exec07Service } from './exec07.service';

@Controller('exec07')
export class Exec07Controller {
  constructor(private readonly exec07Service: Exec07Service) {}

  @Get()
  getCategoria(): string {
    return this.exec07Service.getCategoria(12);
  }
}
