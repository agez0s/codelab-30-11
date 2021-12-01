import { Controller, Get } from '@nestjs/common';
import { Exec09Service } from './exec09.service';

@Controller('exec09')
export class Exec09Controller {
  constructor(private readonly exec09Service: Exec09Service) {}

  @Get()
  getTempo(): string {
    return this.exec09Service.getTempo(3602);
  }
}
