import { Controller, Get } from '@nestjs/common';
import { Exec06Service } from './exec06.service';

@Controller('exec06')
export class Exec06Controller {
  constructor(private readonly exec06Service: Exec06Service) {}

  @Get()
  getNumero(): string {
    return this.exec06Service.getNumero(-10);
  }
}
